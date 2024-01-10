
import nookies from 'nookies'
import { tokenService } from '../../services/auth/tokenService'
import { HttpClient } from '../../services/auth/HttpClient'

const REFRESH_TOKEN_NAME = "REFRESH_TOKEN_NAME"

const actions = {
    async storeToken(req, res){
        const ctx = {req, res}
        console.log("RefreshToken : ", req.body)
        nookies.set(ctx, REFRESH_TOKEN_NAME , req.body.refresh_token, {
            httpOnly: true,
            sameSite: 'lax',
            path: "/"
        })

        console.log("cookiesConfirmmmm : ", nookies.get(ctx))
        console.log("e caraio")
        
        res.json({
            data: {
                message: "stored"
            }
        })
    },
    async refreshToken(req, res){
        const ctx = {req, res}

        const cookies = nookies.get(ctx)

        console.log("refresh token crl1", req.body.refresh_token)

        const refreshToken =  cookies[REFRESH_TOKEN_NAME] || req.body.refresh_token

        console.log("token atual", refreshToken)

        const respostaRefresh = await HttpClient("http://localhost:4000/api/refresh", {
            method: "POST",
            body: {
                refresh_token: refreshToken,
            }
        })

        console.log("LINE 39", respostaRefresh)

        if(respostaRefresh.ok){

            nookies.set(ctx, REFRESH_TOKEN_NAME , respostaRefresh.body.data.refresh_token, {
                httpOnly: true,
                sameSite: 'lax',
                path: '/'
            })        

            tokenService.save(respostaRefresh.body.data.access_token, ctx)

            res.status(200).json({
                data: {
                    respostaRefresh: respostaRefresh.body.data
                }
            })
        }else{
            res.status(401).json({
                status: 401,
                message: "cai foras"
            })
        }

    },
    async getToken(req, res){
        const ctx = { req , res}
        console.log("passo aqui tbm")

        res.json({
            data: {
                cookies: nookies.get(ctx)
            }
        })
    }
}


const methodBy = {
    POST: actions.storeToken,
    GET: actions.refreshToken,
    PUT: actions.refreshToken,
    // GET: actions.getToken
}


export default function handler(request, response){
    console.log("Line 88", request.body)
    console.log("Metodo", request.method)

    if(methodBy[request.method]) return methodBy[request.method](request, response)

    response.json({
        error: "not found 404"
    })
}