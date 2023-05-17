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



