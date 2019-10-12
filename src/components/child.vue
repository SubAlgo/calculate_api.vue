<template>
  <div class="blog-post">
      <h3>{{ title }}</h3>
    </div>
</template>

<script>
export default {
  name: 'blog',
  data () {
    return {
      name: ''
    }
  },
  props: ['title']
}
</script>
