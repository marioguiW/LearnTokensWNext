// Arquitetura Hexagonal
import nookies from 'nookies';
import { tokenService } from '../../services/auth/tokenService';

// Ports & Adapters
export async function HttpClient(fetchUrl, fetchOptions = {}) {
  const defaultHeaders = fetchOptions.headers || {};
  const options = {
    ...fetchOptions,
    headers: {
      'Content-Type': 'application/json',
      ...defaultHeaders,
    },
    body: fetchOptions.body ? JSON.stringify(fetchOptions.body) : null,
  };
  return fetch(fetchUrl, options)
    .then(async (respostaDoServidor) => {
      return {
        ok: respostaDoServidor.ok,
        status: respostaDoServidor.status,
        statusText: respostaDoServidor.statusText,
        body: await respostaDoServidor.json(),
      }
    })
    .then(async (response) => {
      if(!fetchOptions.refresh) return response;
      if(response.status !== 401) return response;
      console.log('Middleware: Rodar código para atualizar o token');
      
      // const isServer = Boolean(fetchOptions?.ctx);

      // console.log("Testando",fetchOptions?.ctx?.req?.cookies)
      
      // const currentRefreshToken = fetchOptions?.ctx?.req?.cookies
      // console.log("Current", currentRefreshToken)

      try {
        // [Tentar atualizar os tokens]
        const refreshResponse = await HttpClient('http://localhost:3000/api/refresh', {
          method: 'GET',
          // body: isServer ? { refresh_token: currentRefreshToken } : undefined,
        });

        console.log("1 -> ", refreshResponse)

        const newAccessToken = refreshResponse.body.data.respostaRefresh.access_token;
        console.log("tokenService.save(newAccessToken);", newAccessToken)
        const newRefreshToken = refreshResponse.body.data.respostaRefresh.refresh_token;  


        tokenService.save(newAccessToken);

        // [Guarda os Tokens]
        // if(isServer) {
        //   nookies.set(fetchOptions.ctx, 'REFRESH_TOKEN_NAME', newRefreshToken, {
        //     httpOnly: true,
        //     sameSite: 'lax',
        //   })
        // // }
        // tokenService.save(newAccessToken);
        // [Tentar rodar o request anterior]

        const retryResponse = await HttpClient(fetchUrl, {
          ...options,
          refresh: false,
          headers: {
            'Authorization': `Bearer ${newAccessToken}`
          }
        });
        // console.log('retryResponse', retryResponse);
        return retryResponse;

      } catch(err) {
        console.error(err);
        return response;
      }
    });
}