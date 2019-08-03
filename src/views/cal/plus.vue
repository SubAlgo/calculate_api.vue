<template>
    <div>
        plus
        <form @submit.prevent="calPlus">
            <input v-model.number="n1">
            <input v-model.number="n2">
            <br>
            <button type="submit">Sign In</button>
        </form>
        
    </div>
</template>

<script>
export default {
    name: 'plus',
    data () {
        return {
            n1: '',
            n2: '',
            sum: ''
        }
    },
    methods : {
        calPlus () {
            this.$api.cal.plus(this.n1, this.n2)
                .then(() => [
                    alert("success")
                ])
                .catch((err) => {
                    console.log(err)
                })
        }
    }
}
</script>
