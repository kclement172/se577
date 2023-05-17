<template>
  <p> This page displays mock Repository Info</p>

  <!-- Only render this table if there is Repo data-->
  <div v-if="RepoData.length > 0">
      <!-- Use a table to render the data-->
    <table>
      <tr>
        <th>Repo Name</th>
        <th>Language</th>
        <th>Created Date</th>
      </tr>
        <!-- v-for is how you do a loop in Vue-->
        <!-- Each row needs a unique variable/key-->
        <!-- v-for is how you do a loop in Vue-->
        <!-- Each td is the data element at that point in the array-->
      <tr v-for = "(Repo, rowNum) in RepoData">
        <td>{{ Repo.Name }}</td>
        <td>{{ Repo.Language }}</td>
        <td>{{ Repo.CreatedDate }}</td>
      </tr>
    </table>
  </div>
  <p>The number of results is {{ RepoData.length }}</p>
</template>
  
  <script lang="ts">
  export default {
    name: 'RepoInfo',
  };
  </script>
  
  <script setup lang="ts">
import { onMounted, ref } from 'vue';
import type {RepoInfoApiInterface} from './ApiInterfaces';
import axios from 'axios';

  //Most code goes here
  let RepoData = ref<RepoInfoApiInterface[]>([])

  // What does onMounted do? Ex: Page 1 - As soon as the page comes into focus and is ready, the api call happens automatically
  // When does it get called? When the page loads
  onMounted(async () => {
    console.log("Page 1 mounted")

    //this is where to go and get the Repo data
    let allReposURI = 'http://localhost:9500/repoinfo'

    //Use axios to load the Repo data - readup on await to make
    //async calls easier
    // What is async/await? Wakes up when the page is loaded.
    // What is the RepoApiInterface[] doing? Expecting it to look like an array of the RepoAPIInterface model
    let RepoAPI = await axios.get<RepoInfoApiInterface[]>(allReposURI)

    //if OK, set the RepoData variable, so that we can render in the ui
    if(RepoAPI.status == 200){
      RepoData.value = RepoAPI.data
    }
  })


  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped></style>
