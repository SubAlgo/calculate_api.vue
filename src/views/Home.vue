<template>
  <div class="home" :style="{ fontSize: postFontSize + 'em' }">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <blogPost v-bind:title="text"/>
    <bp
      v-for="post in posts"
      v-bind:key="post.id"
      v-bind:post="post"
      v-on:enlarge-text="postFontSize += 0.1"
    ></bp>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import blogPost from '@/components/child.vue'
import bp from '@/components/ch.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    blogPost,
    bp
  },
  data () {
    return {
      text: 'Global Macro',
      posts: [
        { id: 1, title: 'My journey with Vue', name: 'korn' },
        { id: 2, title: 'Blogging with Vue', name: 'vala' },
        { id: 3, title: 'Why Vue is so fun', name: 'GG WP' }
      ],
      postFontSize: 1
    }
  }
}
</script>
