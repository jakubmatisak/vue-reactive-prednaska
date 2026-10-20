<script setup>
import { computed } from 'vue'
import AlertInfo from '../../components/AlertInfo.vue'

// PRÍKLAD 5: Computed – hodnota ODVODENÁ z iného stavu.
// Vue si zapamätá výsledok (cache) a prepočíta ho len vtedy, keď sa zmení závislosť.
const props = defineProps({
  information: {
    type: Object,
    default: () => ({}),
  },
})
// Od Vue 3.5 ide props aj deštrukturovať so zachovaním reaktivity:
//   const { information = {} } = defineProps({ information: Object })

defineEmits(['edit'])

// "Rovná 65, Ludanice, Slovensko" → "Slovensko"
const country = computed(() => props.information.address?.split(',').at(-1).trim() ?? '')
const isAbroad = computed(() => country.value !== 'Slovensko')
</script>

<template>
  <AlertInfo v-if="!information.name" />
  <div v-else class="profile-card" :class="{ abroad: isAbroad }">
    <div class="profile-card-content">
      <div class="profile-card-photo">
        <img :src="information.path" alt="Fotka kontaktu">
      </div>
      <div class="profile-card-info">
        <div class="profile-card-header">{{ information.name }}</div>
        <div class="profile-card-text">{{ information.address }}</div>
        <div class="profile-card-text">{{ information.phoneNumber }}</div>
        <div v-if="isAbroad" class="profile-card-text">🌍 Zahraničie ({{ country }})</div>
      </div>
    </div>
    <div class="profile-card-actions">
      <!-- posielame id – rovnako, ako ho očakáva handler v rodičovi -->
      <button @click="$emit('edit', information.id)">Presťahovať do zahraničia</button>
    </div>
  </div>
</template>

<style scoped>
.abroad {
  outline: 2px dashed #42b883;
}
</style>
