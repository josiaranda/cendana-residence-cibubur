import React, {Fragment,useState} from "react"
import {Cookies} from "react-cookie";
import Login from '../components/login.js';
import Admin from '../components/admin.js';
import AppBar from "../components/appbar.js";
import Container from '@material-ui/core/Container';


export default function Home() {
    const [isLogin,setIsLogin] = useState((new Cookies).get("_awa"));
    return (
        <Fragment>
            <AppBar/>
            <Container style={{marginTop:"18px"}}>
                {
                    isLogin? <Admin/> : <Login isLogin={isLogin} setLogin={setIsLogin}/>
                }

            </Container>

        </Fragment>
    );
}
