<script setup>
import {onMounted} from 'vue'

onMounted(() => {
  console.log('bol som mountnuty, teraz nieco urobim')
})
</script>

<template>
  <div class="alert">
    <div class="alert-font">Nenašlo sa</div>
  </div>
</template>

<style scoped>
.alert {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2rem;
  padding: 1rem;
  border-radius: 0.25rem;
  max-width: 25rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.alert-font {
  color: crimson;
  font-weight: bolder;
}

</style>