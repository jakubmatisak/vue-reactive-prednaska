<script setup>
import { onMounted, ref } from 'vue'
import data from '../../assets/data/contacts.json'
import ProfileCard from './ProfileCard.vue'

// Pole inicializujeme ako [] (nie null) – v-for aj ďalší kód potom vždy pracuje s poľom.
const people = ref([])

onMounted(() => {
  // Posledný kontakt nemá meno → ukáže sa AlertInfo (v-if v ProfileCard)
  people.value = [...data.contacts, { id: 99 }]
})
</script>

<template>
  <!--
    v-for vytvorí kartičku pre každý kontakt.
    :key musí byť UNIKÁTNY a STABILNÝ → použijeme id, nie meno (mená sa môžu opakovať).
  -->
  <ProfileCard
    v-for="person in people"
    :key="person.id"
    :information="person"
  />
</template>
