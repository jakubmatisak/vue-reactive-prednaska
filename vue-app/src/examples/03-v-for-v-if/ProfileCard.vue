<script setup>
import AlertInfo from '../../components/AlertInfo.vue';

// PRÍKLAD 3: podmienené vykresľovanie (v-if / v-else) a class binding
defineProps({
  information: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <!-- v-if / v-else: vykreslí sa práve jedna z vetiev -->
  <AlertInfo v-if="!information.name" />

  <!--
    Class binding – objektový zápis: trieda sa pridá, ak je podmienka true.
    Alternatíva (ternárny operátor):
      :class="information.gender === 'm' ? 'male' : 'female'"
  -->
  <div
    v-else
    class="profile-card"
    :class="{ male: information.gender === 'm', female: information.gender === 'f' }"
  >
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
  </div>
</template>
