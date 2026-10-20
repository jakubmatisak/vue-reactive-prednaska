<script setup>
import { onMounted, ref } from 'vue'
import data from '../../assets/data/contacts.json'
import ProfileCard from './ProfileCard.vue'

const people = ref([])

onMounted(() => {
  // structuredClone – pracujeme s kópiou, aby úpravy nezmenili importovaný JSON
  // (ten je zdieľaný medzi všetkými komponentmi, ktoré ho importujú)
  people.value = structuredClone(data.contacts)
})

// Rodič vlastní dáta → rodič ich aj mení.
function handleEdit(id) {
  const person = people.value.find(p => p.id === id)
  person.address = 'Adresa nová'
}

function handleCopy(id) {
  const person = people.value.find(p => p.id === id)
  const nextId = Math.max(...people.value.map(p => p.id)) + 1

  // people.value.push(person) ❌ ten istý objekt 2× → rovnaký :key (warning)
  //                              a úprava jednej kartičky zmení obe
  people.value.push({ ...person, id: nextId }) // ✅ nový objekt s novým id
}
</script>

<template>
  <!-- @edit je skratka pre v-on:edit – počúvame udalosť z dieťaťa -->
  <ProfileCard
    v-for="person in people"
    :key="person.id"
    :information="person"
    @edit="handleEdit"
    @copy="handleCopy"
  />
</template>
