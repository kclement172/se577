import { FastifyHttpProxyOptions } from '@fastify/http-proxy'; 

// Configuration is driven from Server.Ts
export function GetGHProxySecureOptions(GHAccessToken: string | undefined) : FastifyHttpProxyOptions {
    return {
        upstream: 'https://api.github.com',
        prefix: 'ghsecure', 
        httpMethods: ['GET', 'POST'],
        replyOptions: {
            rewriteRequestHeaders: (origReq, headers) => {
                return {
                    ...headers,
                    authorization: `Bearer ${GHAccessToken}`
                }
            } 
        } 
    }
}

// Adds the authorization header to the token, and that's what makes it work
export function GetGHProxyOptions() : FastifyHttpProxyOptions {
    return {
        upstream: 'https://api.github.com',
        prefix: 'ghproxy', 
        httpMethods: ['GET', 'POST']
    }
}

// Configuration is driven from Server.Ts
export function GetOpenWeatherSecureOptions(OPEN_WEATHER_API_ACCESS_TOKEN: string | undefined) : FastifyHttpProxyOptions {
    return {
        upstream: 'https://api.openweathermap.org/data/2.5',
        prefix: 'weathersecure',
        httpMethods: ['GET', 'POST'],
        replyOptions: {
            queryString(search, reqUrl) {

                //first, lets setup the authtoken query string value
                const authQs = `&appid=${OPEN_WEATHER_API_ACCESS_TOKEN}`

                //now lets split the URL and get only the stuff to the
                //right of the ?
                let [,qs] = reqUrl.split("?")

                //2 options, there were no parameters, or we need to add
                //our parameter to the list
                if(qs)
                    qs = `${qs}&${authQs}`  //other query parameters existed
                else
                    qs = `${authQs}`         //this is the only one

                return qs
            }
        }
    }
}

export function GetOpenWeatherProxyOptions() : FastifyHttpProxyOptions {
    return {
        upstream: 'https://api.openweathermap.org/data/2.5',
        prefix: 'weatherproxy', 
        httpMethods: ['GET', 'POST']
    }
}
