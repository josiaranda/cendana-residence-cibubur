import React,{useState} from "react";
import {useCookies} from "react-cookie";



export default function Login(props){
    const [cookies, setCookie, removeCookie] = useCookies();
    function onEnter(e,password){
        if (e.key === 'Enter' && password ==="192837"){
            setCookie('_awa',"true",{path:'/',maxAge:15*60});
            props.setLogin(true);
        }
    }

    const [password, setPassword] = useState("");
    return (
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <div>
                <h3>Login</h3>
            </div>
            <div>
                <input type="password" name="pass" id="pass" onChange={event => setPassword(event.target.value)}
                onKeyDown={event => {onEnter(event,password)}}/>
            </div>

        </div>
    )
}