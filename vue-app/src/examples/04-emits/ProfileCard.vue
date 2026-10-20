<script setup>
import AlertInfo from '../../components/AlertInfo.vue';

// PRÍKLAD 4: Emits – "props idú dole, udalosti idú hore".
// Dieťa nemení dáta rodiča priamo, len mu oznámi, čo sa stalo.
defineProps({
  information: {
    type: Object,
    default: () => ({}),
  },
});

const emit = defineEmits(['edit', 'copy']);

function onEdit(id) {
  console.log('Klik na Upraviť – posielam emit "edit"', id);
  emit('edit', id);
}
</script>

<template>
  <AlertInfo v-if="!information.name" />
  <div v-else class="profile-card">
    <div class="profile-card-content">
      <div class="profile-card-photo">
        <img :src="information.path" alt="Fotka kontaktu">
      </div>
      <div class="profile-card-info">
        <div class="profile-card-header">{{ information.name }}</div>
        <div class="profile-card-text">{{ information.address }}</div>
        <div class="profile-card-text">{{ information.phoneNumber }}</div>
      </div>
    </div>
    <div class="profile-card-actions">
      <button @click="onEdit(information.id)">Upraviť</button>
      <!-- emit sa dá zavolať aj priamo v šablóne cez $emit -->
      <button @click="$emit('copy', information.id)">Kopírovať</button>
    </div>
  </div>
</template>
