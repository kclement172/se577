<template>
  <div class="about">    
    <HelloWorld msg="About Me"/>
    <img alt="Front End Meme" src="../assets/frontendmeme.png">
    <footer>
      <string>
        Hello, my name is Kyle Clement, and I am a graduate student in Drexel's School of Computing and Informatics, majoring in Computer Science. 
        I graduated with a bachelors degree in Plant Science from Rutgers in 2017, and pursued a career in agriculture for a few years. 
        My hobbies include video games, hiking, gardening, reading, cooking, and working out. 
        This will be my first experience intentionally working with and studying software architecture, 
        and by the end of the term I'm hoping to be able to identify common software architecture patterns used in the industry, 
        become familiar with cutting edge software architecture solutions, and list pros and cons of each.
      </string>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'AboutView',
  components: {
    HelloWorld,
  },
});
</script>
