import { permanentRedirect } from "next/navigation";
import { tokenService } from "./tokenService"

export const authService = {
    async login(body) {
        return await fetch("http://localhost:4000/api/login", {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(body)
        })
        .then(async (respostaDoServidor) => {
            const response =  {
                ok: respostaDoServidor.ok,
                status: respostaDoServidor.status,
                statusText: respostaDoServidor.statusText,
                body: await respostaDoServidor.json(),
            }
            
            if(!response.ok) throw new Error("Usuario ou senha inválidos")
            const body = response.body
            
            tokenService.save(body.data.access_token)
        })
    },
    async getSession(ctx = null){
        const token = tokenService.get(ctx);
        return fetch("http://localhost:4000/api/session", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(async (response) => {
            if (!response.ok) {
                throw new Error("Erro ao obter sessão");
            }
            return response.json(); // Retorne os dados JSON da resposta
        })
    }
}