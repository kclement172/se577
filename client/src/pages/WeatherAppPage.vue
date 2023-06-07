<template>
    <div id = "weather-app">
      <main>    

        <div class="weather-wrap">
          <div class="location-section">
             <div class="city">{{urlData?.name}}, NJ</div>              
             <div class="date-and-time">{{Date()}}</div>
          </div>

          <div class="weather-section">
            <div class="temperature">{{urlData?.main.temp}} F</div>
            <div class="weather">{{urlData?.weather[0].main}}</div>
            <div class="weather-description">{{urlData?.weather[0].description}}</div>
          </div>

        </div>
      </main>
    </div>
  </template>
  
  <script lang="ts">  
  export default {
    name: 'WeatherAppPage' 
  };
  </script>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type {WeatherAppInterface} from './ApiInterfaces';
import axios from 'axios';

  //Most code goes here
  let urlData = ref<WeatherAppInterface>()

  // What does onMounted do? Ex: Page 1 - As soon as the page comes into focus and is ready, the api call happens automatically
  // When does it get called? When the page loads
  onMounted(async () => {
    console.log("Page 4 mounted")

    //this is where to go and get the user data
    let weatherDataURI = 'http://localhost:9500/weathersecure/weather?q=cinnaminson&units=imperial'
    // http://localhost:9500/weathersecure/weather?q=cinnaminson&units=imperial

    //Use axios to load the user data - readup on await to make
    //async calls easier
    // What is async/await? Wakes up when the page is loaded.
    // What is the URLApiInterface[] doing? Expecting it to look like an array of the URLApiInterface model
    let weatherAPI = await axios.get<WeatherAppInterface>(weatherDataURI)

    //if OK, set the urlData variable, so that we can render in the ui
    if(weatherAPI.status == 200){
      urlData.value = weatherAPI.data
    }
  })


  </script>
  
  <style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  body {
    font-family: 'montserrat', sans-serif;
  }

  #weather-app {
    background-image: url('../assets/town.jpg');
    background-size: cover;
    background-position: bottom;
  }

  main {
    min-height: 100vh;
    padding: 25px;

    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));
  }

  .location-section .city{
    color: #FFF;
    font-size: 32px;
    font-weight: 500;
    text-align: center;
    text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
  }

  .location-section .date-and-time {
    color: #FFF;
    font-size: 20px;
    font-weight: 300;
    text-align: center;
    font-style: italic;
  }

  .weather-section {
    text-align: center;
  }

  .weather-section .temperature{
    display: inline-block;
    padding: 10px 25px;
    color: #FFF;
    font-size: 102px;
    font-weight: 900;

    text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 16px;
    margin: 30px 0px;

    box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  }

  .weather-section .weather{
    color: #FFF;
    font-size: 48px;
    font-weight: 700;
    font-style: italic;
    text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  }

  .weather-section .weather-description{
    color: #FFF;
    font-size: 32px;
    font-weight: 700;
    font-style: italic;
    text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  }

  </style>
  