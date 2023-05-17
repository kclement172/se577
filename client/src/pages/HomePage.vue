<template>
  <div class="home">
    <img alt="Kyle Photo" src="../assets/kylephoto.png">
    <HelloWorld msg="Welcome to Kyle's SE 577 (Software Architecture) Project"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
  },
});
</script>
