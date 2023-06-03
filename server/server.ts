import  {MockData}  from "./db";
import fastify, {RequestGenericInterface} from "fastify";
import fastifyHttpProxy from "@fastify/http-proxy";
import dotenv from 'dotenv';

import {GetGHProxySecureOptions, GetGHProxyOptions, GetOpenWeatherSecureOptions, GetOpenWeatherProxyOptions } from "./proxy";

import cors from '@fastify/cors';

// Reads the file
dotenv.config();

const server = fastify()

// Process.env gets the access token
// These lines are what make the magic happen
let proxyOptsSecure = GetGHProxySecureOptions(process.env.GH_ACCESS_TOKEN)
server.register(fastifyHttpProxy, proxyOptsSecure)

let proxyOpts = GetGHProxyOptions()
server.register(fastifyHttpProxy, proxyOpts)

let weatherOptsSecure = GetOpenWeatherSecureOptions(process.env.OPEN_WEATHER_API_ACCESS_TOKEN)
server.register(fastifyHttpProxy, weatherOptsSecure)

let weatherProxyOpts = GetOpenWeatherProxyOptions()
server.register(fastifyHttpProxy, weatherProxyOpts)

// setup CORS - this will be necessary for API requests from a VUE or any SPA app 
// Not quite necessary for the project
// What it does - Web has a protection built in, that if you're in a browser, it should only execute code delivered in the browser. This bypasses that protection. 
server.register(cors, {
    origin: "*"
})

// All that was necessary for implementing the API
// MockData is in the db.ts file
server.get('/repoinfo', async (request, reply) => {
  return MockData;
})

//If you want to pass a parameter like /student/123 setup an interface
//for the parameter
// The name "id" needs to match the "id" used in the server.get<requestId>
// To connect the interface to the actual function below, use the requestId name in the get function call "<requestId>"
interface requestId extends RequestGenericInterface {
    Params: {
      id: string
    }
}

  // This block actually starts the server
server.listen({ port: 9500 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
