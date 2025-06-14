<template>
  <div class="container mt-4">
    <h2>Registrar Ocorrência</h2>
    <form @submit.prevent="registrarOcorrencia">
      <div class="mb-3">
        <label for="tipo" class="form-label">Tipo</label>
        <select v-model="ocorrencia.tipo" class="form-select" required>
          <option value="">Selecione</option>
          <option>Lixo</option>
          <option>Animal em risco</option>
          <option>Vegetação danificada</option>
        </select>
      </div>
      <div class="mb-3">
        <label class="form-label">Descrição</label>
        <textarea v-model="ocorrencia.descricao" class="form-control" required />
      </div>
      <div class="mb-3">
        <label class="form-label">Localização</label>
        <input v-model="ocorrencia.localizacao" class="form-control" required />
      </div>
      <button class="btn btn-success">Enviar</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const ocorrencia = ref({
  tipo: '',
  descricao: '',
  localizacao: '',
  data: new Date().toISOString()
})

function registrarOcorrencia() {
  const ocorrencias = JSON.parse(localStorage.getItem('ocorrencias')) || []
  ocorrencias.push(ocorrencia.value)
  localStorage.setItem('ocorrencias', JSON.stringify(ocorrencias))
  alert('Ocorrência registrada!')
  router.push('/map')
}
</script>
