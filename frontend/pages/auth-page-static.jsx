import { useEffect, useState } from "react"
import { authService } from "../services/auth/authService"
import { useRouter } from "next/router"
import { withSessionHOC } from "../services/auth/session"



function PaginaEstatica(props){
    return(
        <div>
            <h1>
                Auth Page Static
            </h1>
            <pre>
                {JSON.stringify(props, null, 2)}
            </pre> 
        </div>
    )
}

export default withSessionHOC(PaginaEstatica)