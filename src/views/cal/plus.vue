<template>
  <div>
    plus
    <form @submit.prevent="showList">
        <input v-model.number="n1">
        <input v-model.number="n2">
        <br>
        <button type="submit">Sign In</button>
    </form>
    <div>
      <input v-model="re">
    </div>

    <div v-if="users.length > 0">
      <div v-for="u in users" :key="u.id">
        <p>id: {{ u.id }}</p>
        <p>name: {{ u.name }}</p>
        <p>Detail: {{ u.detail }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'plus',
  data () {
    return {
      n1: '',
      n2: '',
      sum: '',
      re: '',
      users: []
    }
  },
  methods: {
    calPlus () {
      this.$api.cal.plus(this.n1, this.n2)
        .then(() => [
          alert('success')
        ])
        .catch((err) => {
          console.log(err)
        })
    },
    showList () {
      this.$api.cal.showList(this.n1, this.n2)
        .then((res) => [
          console.log(res.list[0]['name']),
          // alert(res.list[0]['name']),
          // this.re = res.list[0]['name'],
          this.users = res.list,
          console.log(this.users)
        ])
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
