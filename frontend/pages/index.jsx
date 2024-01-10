import { useState } from "react"
import { useRouter } from 'next/router';
import { authService } from "../services/auth/authService"


export default function Page(){

    const router = useRouter();

    const [values, setValues] = useState({
        username: "omariosouto",
        password: "safepassword"
    })

    function handleChange(event){

        const name = event.target.name
        const value = event.target.value

        setValues((currentValues) => {
            return {
                ...currentValues,
                [name]: value
            }
        })
    }

    return(
        <div>
            <form action="" onSubmit={(event) => {
                event.preventDefault();
                authService.login({
                    username: values.username,
                    password: values.password,
                })
                .then(() => {
                    router.push('/auth-page-static');
                    // router.push('/auth-page-ssr');
                })
                .catch((err) => {
                    console.log(err);
                    alert('Usuário ou a senha estão inválidos')
                })
            }}>
                <input
                    type="text"
                    name="username"
                    value={values.username}
                    onChange={(e) => handleChange(e)}
                />
                <input type="password" name="password" value={values.password} />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}