<template>
  <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <p>{{ post.name }}</p>
      <input type="text" v-bind:value="post.name" name="" id="">
      <div v-html="post.name"></div>
    </div>
</template>

<script>
export default {
  props: ['post']
}
</script>
