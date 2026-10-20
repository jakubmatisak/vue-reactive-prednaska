<script setup>
// PRÍKLAD 2: Props – dáta posiela rodič, komponent ich len zobrazuje.
// Props sú READ-ONLY: komponent ich nesmie meniť (na zmenu slúžia emits – príklad 4).
defineProps({
  information: {
    type: Object,
    // POZOR: default pre objekt/pole musí byť funkcia, ktorá objekt VRÁTI.
    //   () => {}    ❌ telo funkcie, vráti undefined
    //   () => ({})  ✅ vráti prázdny objekt
    default: () => ({}),
  },
})
</script>

<template>
  <!-- V šablóne sú props dostupné priamo (information), netreba písať props.information -->
  <div class="profile-card">
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
