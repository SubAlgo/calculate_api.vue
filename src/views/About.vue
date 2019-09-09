<template>
  <div>
    My name is <input v-model="name">
  </div>
</template>

<script>
export default {
  data ()  {
    return {
      name: ''
    }
  },
  mounted() {
    if (localStorage.name) {
      this.name = localStorage.name;
    }
  },
  watch:{
    name(newName) {
      localStorage.name = newName;
    }
  }
}
</script>

