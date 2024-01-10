import nookies from 'nookies'
import { tokenService } from '../services/auth/tokenService';
import { authService } from '../services/auth/authService';
import { withSession } from '../services/auth/session';

export default function ServerSide(props){

    console.log(props)
    return(
        <div>
            <h1>
                Auth Page Server Side Render
            </h1>
            <pre>
                {JSON.stringify(props, null, 2)}
            </pre> 
        </div>
    )
}

export const getServerSideProps = withSession((ctx) => {

    console.log("COKIES", ctx.req.cookies)

    return{
        props: {
            session: ctx.req.session
        }
    }
})
    // const cookies = nookies.get(ctx)
    // try{
    //     const session = await authService.getSession(ctx)
    //     return{
    //         props: {
    //             session,
    //         },
    //     }
    // }catch(err){
    //     return {
    //         redirect: {
    //             permanent: false,
    //             destination: "/?error"
    //         }
    //     }
    // }
// } 
  