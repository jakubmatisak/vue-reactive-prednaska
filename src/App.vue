<script setup>
import { computed, ref } from 'vue'
import Example01 from './examples/01-staticky-komponent/ExampleView.vue'
import Example02 from './examples/02-props/ExampleView.vue'
import Example03 from './examples/03-v-for-v-if/ExampleView.vue'
import Example04 from './examples/04-emits/ExampleView.vue'
import Example05 from './examples/05-computed/ExampleView.vue'

// Každý príklad je samostatný komponent v src/examples/<krok>/
// Prepínač si pamätá krok v URL (#1 … #5), takže ide obnoviť stránku alebo poslať odkaz.
const examples = [
  { id: 1, title: 'Statický komponent', component: Example01 },
  { id: 2, title: 'Props a data binding', component: Example02 },
  { id: 3, title: 'v-for, v-if, class binding', component: Example03 },
  { id: 4, title: 'Emits (udalosti)', component: Example04 },
  { id: 5, title: 'Computed', component: Example05 },
]

const activeId = ref(Number(location.hash.slice(1)) || 1)
const active = computed(() => examples.find(e => e.id === activeId.value) ?? examples[0])

function select(id) {
  activeId.value = id
  location.hash = String(id)
}
</script>

<template>
  <h1>Telefónny zoznam</h1>

  <nav class="examples-nav">
    <button
      v-for="example in examples"
      :key="example.id"
      :class="{ active: example.id === activeId }"
      @click="select(example.id)"
    >
      {{ example.id }}. {{ example.title }}
    </button>
  </nav>

  <div class="container">
    <component :is="active.component" />
  </div>
</template>

<style scoped>
.examples-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.examples-nav button.active {
  border-color: #42b883;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
