import React, {Fragment, useState} from "react";
import NewUser from "../../components/newUser";
import {Cookies} from "react-cookie";
import AppBar from "../../components/appbar";
import Container from "@material-ui/core/Container";
import Admin from "../../components/admin";
import Login from "../../components/login";

export default function New(props) {
    const [isLogin,setIsLogin] = useState((new Cookies).get("_awa"));
    function redirectToHome(){
        const isBrowser = () => typeof window !== "undefined"
        if (isBrowser()){
            window.location = "/";
        }

    }

    return (
        <Fragment>
            <AppBar/>
            <Container style={{marginTop:"18px"}}>
                {
                    isLogin? <NewUser/> : redirectToHome()
                }

            </Container>
        </Fragment>
    )
}