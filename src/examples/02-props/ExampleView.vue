<script setup>
import { onMounted, ref } from 'vue';
import dataOne from '../../assets/data/contactSingle.json';
import ProfileCard from './ProfileCard.vue';

// ref() – reaktívna "krabička" na hodnotu, v <script> sa k nej pristupuje cez .value
const person = ref(null);

// Dáta nastavíme až po pripojení komponentu do DOM (lifecycle hook onMounted).
// V praxi by tu bol napr. fetch() na API.
onMounted(() => {
  person.value = dataOne;
  console.log('ref:', person); // RefImpl { value: ... }
  console.log('hodnota:', person.value); // samotný objekt (Proxy)
});

// ALTERNATÍVA: reactive() – funguje len pre objekty a pole, bez .value
//   const person = reactive({})
//   Object.assign(person, dataOne) ✅
//   person = dataOne               ❌ prepíše premennú, reaktivita sa stratí
</script>

<template>
  <!--
    information="person"   ❌ statický atribút – pošle sa reťazec "person"
    :information="person"  ✅ v-bind – pošle sa hodnota premennej person
  -->
  <ProfileCard v-if="person" :information="person" />
</template>
