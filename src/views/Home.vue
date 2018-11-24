<template>
  <div class="home">
    <h1>Hola</h1>
    <input type="text" v-model="name">
    <button @click="addTask">Agregar</button>
    <hr>
    <ul>
      <li v-for="product of $store.state.products" :key="product.id">
        {{ product.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      name: ''
    }
  },
  methods: {
    addTask() {
      this.$store.commit('addProduct', {
        name: this.name
      })

      this.name = ''
    }
  }
}
</script>
