import { useEffect } from "react"
import React from 'react'
import { HttpClient } from "../services/auth/HttpClient"
import { useRouter } from "next/router"
import { tokenService } from "../services/auth/tokenService"


export default function LogoutPage(){
    const router = useRouter()

    useEffect(() => {
        // Função assíncrona dentro do useEffect
        (async ()=>{
            try {
                const resposta = await HttpClient('/api/refresh', {
                  method: "DELETE"
                });
        
                console.log(resposta);
                
                tokenService.delete();
                router.push("/");
              } catch (error) {
                console.error("Erro ao fazer logout:", error);
                // Trate o erro conforme necessário
              }
        })()
      }, []);

    return(
        <div>Voce está sendo redirecionado</div>    
    )
}