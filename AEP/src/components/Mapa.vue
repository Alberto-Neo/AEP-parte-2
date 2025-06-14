<template>
  <div class="container mt-4">
    <h2>Mapa de Ocorrências</h2>
    <div id="map" style="height: 500px;"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

onMounted(() => {
  const ocorrencias = JSON.parse(localStorage.getItem('ocorrencias')) || []
  const map = L.map('map').setView([-23.420999, -51.933056], 12)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'OpenStreetMap'
  }).addTo(map)

  ocorrencias.forEach(o => {
    L.marker([-23.55, -46.63]).addTo(map)
      .bindPopup(`<strong>${o.tipo}</strong><br>${o.descricao}<br><em>${o.localizacao}</em>`)
  })
})
</script>
