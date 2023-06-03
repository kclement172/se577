<template>
  <p> Displaying URL Data from Kyle's Github Account</p>

  <!-- Only render this table if there is user data-->
  <div v-if="urlData?.current_user_url">
      <!-- Use a table to render the data-->
    <table>
      <tr>
        <th>Current User URL</th>
        <th>Authorizations URL</th>
        <th>Gists URL</th>
      </tr>
        <!-- v-for is how you do a loop in Vue-->
        <!-- Each row needs a unique variable/key-->
        <!-- v-for is how you do a loop in Vue-->
        <!-- Each td is the data element at that point in the array-->
      <tr>
        <td>{{ urlData?.current_user_url }}</td>
        <td>{{ urlData?.authorizations_url }}</td>
        <td>{{ urlData?.gists_url }}</td>
      </tr>
    </table>
  </div>
</template>
  
<script lang="ts">
export default {
  name: 'GithubURLPage',
};
</script>
  
  <script setup lang="ts">
import { onMounted, ref } from 'vue';
import type {URLApiInterface} from './ApiInterfaces';
import axios from 'axios';

  //Most code goes here
  let urlData = ref<URLApiInterface>()

  // What does onMounted do? Ex: Page 1 - As soon as the page comes into focus and is ready, the api call happens automatically
  // When does it get called? When the page loads
  onMounted(async () => {
    console.log("Page 4 mounted")

    //this is where to go and get the user data
    let allusersURI = 'http://localhost:9500/ghsecure'

    //Use axios to load the user data - readup on await to make
    //async calls easier
    // What is async/await? Wakes up when the page is loaded.
    // What is the URLApiInterface[] doing? Expecting it to look like an array of the URLApiInterface model
    let userAPI = await axios.get<URLApiInterface>(allusersURI)

    //if OK, set the urlData variable, so that we can render in the ui
    if(userAPI.status == 200){
      urlData.value = userAPI.data
    }
  })


  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped></style>
