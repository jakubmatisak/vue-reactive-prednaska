<!--
  PRÍKLAD 1: Statický komponent
  Dáta sú natvrdo v šablóne – TAKTO TO NEROBIŤ!
  Komponent má byť prepoužiteľný: dáta mu má poslať rodič (pozri príklad 2 – props).
-->
<template>
  <div class="profile-card">
    <div class="profile-card-content">
      <div class="profile-card-photo">
        <img src="/imgs/man.png" alt="Fotka kontaktu">
      </div>
      <div class="profile-card-info">
        <div class="profile-card-header">Ferdinand Pekný</div>
        <div class="profile-card-text">Jarabinková 24/1285, 411 07 Bratislava</div>
      </div>
    </div>
    <div class="profile-card-actions">
      <button>Upraviť</button>
    </div>
  </div>
</template>
