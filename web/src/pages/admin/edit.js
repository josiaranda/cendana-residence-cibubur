import React, {Fragment, useEffect, useState} from "react";
import EditUser from "../../components/editUser.js";
import {Cookies} from "react-cookie";
import AppBar from "../../components/appbar";
import Container from "@material-ui/core/Container";
import { useQueryParam, NumberParam } from "use-query-params";
import {getOneUser} from "../../model/data";


export default function New(props) {
    const [isLogin,setIsLogin] = useState((new Cookies).get("_awa"));
    const [id, setId] = useQueryParam("id", NumberParam);
    const [isDataLoading, setIsDataLoading] = useState(true);
    const [data, setData] = useState({
        name: null,
        phone: null,
        nickname: "",
        blok: null,
        image: "",
    });
    useEffect(() => {
        setIsDataLoading(true);
        getOneUser(id)
            .then(d => {
                d.phone = d.phone.replace("+62","");
                setData(d);
            })
            .finally(() => {
                setIsDataLoading(false);
            })
        ;
    }, []);

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
                    isLogin? (isDataLoading? "Loading...": <EditUser id={id} data={data}/>) : redirectToHome()
                }

            </Container>
        </Fragment>
    )
}