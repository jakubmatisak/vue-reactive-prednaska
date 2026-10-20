<script setup>
import { computed, onMounted, ref } from 'vue';
import data from '../../assets/data/contacts.json';
import ProfileCard from './ProfileCard.vue';

const people = ref([]);

onMounted(() => {
  people.value = data.contacts;
  console.log(people.value);
});

// Computed aj v rodičovi – štatistika sa prepočíta sama po každej zmene v people
// POZOR: chyba v computed zhodí celý render komponentu – kontakt bez adresy (id 99) preskočíme
const abroadCount = computed(
  () =>
    people.value.filter((p) => p.address && !p.address.endsWith('Slovensko'))
      .length,
);

function handleEdit(id) {
  const person = people.value.find((p) => p.id === id);
  person.address = 'Hlavná 1, Viedeň, Rakúsko';
}
</script>

<template>
  <p>Kontaktov: {{ people.length }}, z toho v zahraničí: {{ abroadCount }}</p>

  <ProfileCard
    v-for="person in people"
    :key="person.id"
    :information="person"
    @edit="handleEdit"
  />
</template>
