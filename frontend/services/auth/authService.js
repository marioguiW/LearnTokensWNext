import { permanentRedirect } from "next/navigation";
import { tokenService } from "./tokenService"
import { HttpClient } from "./HttpClient";

export const authService = {
    async login(body) {
        console.log(JSON.stringify(body))
        return await HttpClient("http://localhost:4000/api/login", {
            method: 'POST',
            body: body
        })
        .then(async (respostaDoServidor) => {
            console.log("linha 13 - authService", respostaDoServidor)
            const response =  {
                ok: respostaDoServidor.ok,
                status: respostaDoServidor.status,
                statusText: respostaDoServidor.statusText,
                body: await respostaDoServidor.body,
            }
            
            if(!response.ok) throw new Error("Usuario ou senha inválidos")
            const body = response.body
            
            tokenService.save(body.data.access_token)
            console.log("body RETORNADO", body)
            return body

        })
        .then( async ({data}) => {
            console.log("dadossss", data)
            const {refresh_token} = data
            console.log("Testando crl", refresh_token)
    
            const respostaTeste = await HttpClient("/api/refresh", {
                method: "POST",
                body: {
                    refresh_token: refresh_token
                }
            })
        })
    },
    async getSession(ctx = null){
        const token = tokenService.get(ctx);

        return HttpClient("http://localhost:4000/api/session", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            },
            ctx,
            refresh: true,
        })
        .then(async (response) => {

            if (!response.ok) {
                console.log("erro")
                throw new Error("Erro ao obter sessão");
            }
            console.log("passo")
            return response // Retorne os dados JSON da resposta
        })
    }
}