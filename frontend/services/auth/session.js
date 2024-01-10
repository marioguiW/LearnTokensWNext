import { useRouter } from "next/router"
import nookies from 'nookies'
import { Component, useEffect, useState } from "react"
import { authService } from "./authService"



export function withSession(funcao){
    return async (ctx)=> {
        try{
            console.log("ctx req", ctx.req.cookies) 
            
            const session = await authService.getSession(ctx)
            
            const modifiedProps = {
                ...ctx,
                req: {
                    ...ctx.req,
                    session,
                }
            }
            return funcao(modifiedProps)
        }catch{
            console.log("caiu no erro")
            return {
                redirect: {
                    permanent: false,
                    destination: "/?errorkaka"
                }
            }
        }
    }
}

export function useSession(){
    const [session, setSession] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    
    useEffect(() => {
        authService.getSession()
            .then((response)=>{
                console.log(response)
                console.log("Linha teste", response)
            setSession(response)
        })
        .catch((error)=>{
            console.error(error)
            console.log("DEU ERRO NA SESSAO")
            setError(error)
        }).
        finally(()=>{
            setLoading(false)
        })
    }, [])


    return{
        data: session,
        loading,
        error,
    }
}


export function withSessionHOC(Component) {
    return function Wrapper(props) {
        const router = useRouter();
        const session = useSession();

        if(!session.loading && session.error) {
            console.log('redireciona o usuário para a home');
            router.push('/?error=401');
        }

            const modifiedProps = {
                ...props,
                session: session.data
            }
            return (
                <Component {...modifiedProps} />
            )
    }
}

