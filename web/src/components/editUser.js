import React, {Fragment, useEffect, useState} from "react";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';


import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import Button from "@material-ui/core/Button";
import {getOneUser, patchUser} from "../model/data";
import ContactCard from'./contactCard.js'
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
    },
    fc: {
        margin: "17px",
        minWidth: "300px"
    },
    submitBtn:{
        margin: "17px",
    }

}));
function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}
export default function NewUser(props) {


    const classes = useStyles();

    const [submitDisabled,setSubmitDisabled] = useState(false);

    const [data, setData] = useState({...props.data});
    const [oldImage, setOldImage] = useState(props.data.image);

    const [error, setError] = useState({
        name: [false, ""],
        phone: [false, ""],
        nickname: [false, ""],
        blok: [false, ""],
        image: [false, ""],
    });

    const toDataURL = url => fetch(url)
        .then(response => response.blob())
        .then(blob => new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.onloadend = () => resolve(reader.result)
            reader.onerror = reject
            reader.readAsDataURL(blob)
        }))

    const handleChange = (prop) => (event) => {
        if (prop === "image") {
            const f = event.target.files[0];

            if (typeof f === "undefined") {
                setData({...data, [prop]: oldImage});
                return
            }

            if (typeof f.type === "string" && !(["image/png", "image/jpeg", "image/jpg"].includes(f.type))) {
                setError({...error, 'image': [true, "Supported file: png, jpg, jpeg"]})
                return
            }
            const blob = URL.createObjectURL(f);
            toDataURL(blob).then(value => {
                setData({...data, [prop]: value});
            })
            setError({...error, 'image': [false, ""]})
        } else {
            setData({...data, [prop]: event.target.value});
        }
    };

    const handleSubmit = () => {
        setSubmitDisabled(true);
        if ( !validateName(true) || !validatePhone(true) || !validateBlok(true)){
            setSubmitDisabled(false);
            return
        }
        if (data.image === ""){
            delete data.image;
        }
        console.log("data",{...data,phone:`+62${data.phone}`})
        patchUser({...data,phone:`+62${data.phone}`})
            .then(value => {
                alert("Update success");
                const isBrowser = () => typeof window !== "undefined"
                if (isBrowser()){
                    window.location = "/admin";
                }
            })
            .catch(reason => {
                alert(`Update failed: ${reason.msg || "Unknown"}`);
                setSubmitDisabled(false);
            })

    };


    const checkIsEmpty = (value) => {
        return ((value === "") || (typeof value === "string" && value.trim() === ""))
    };

    const validateName = (strict=false) => {
        if (strict){
            if (typeof data.name !== "string" || data.name === ""){
                setError({...error, 'name': [true, "Cannot Empty"]})
                return false;            }
        }
        const isEmpty = checkIsEmpty(data.name);
        if (isEmpty) {
            setError({...error, 'name': [true, "Cannot Empty"]})
            return false;
        }
        setData({...data,name:toTitleCase(data.name)})
        setError({...error, 'name': [false, ""]})
        return true
    }
    const validatePhone = (strict = false) => {
        if (strict){
            if (typeof data.phone !== "string" || data.phone === ""){
                setError({...error, 'phone': [true, "Cannot Empty"]})
                return false            }
        }
        const isEmpty = checkIsEmpty(data.phone);
        if (isEmpty) {
            setError({...error, 'phone': [true, "Cannot Empty"]})
            return false
        }
        if (typeof data.phone === "string") {
            data.phone = data.phone.replace(" ", "");
            data.phone = data.phone.replace("+62", "");
            if (data.phone.startsWith("0")) {
                data.phone = data.phone.substring(1);
            }

        }
        const isnum = /^\d+$/.test(data.phone);
        if (!isnum) {
            setError({...error, 'phone': [true, "Only number allowed"]})
            return false
        }

        setData({...data, 'phone': data.phone});

        setError({...error, 'phone': [false, ""]})
        return true
    }

    const validateBlok = (strict=false) => {
        if (strict){
            if (typeof data.blok !== "string" || data.blok === ""){
                setError({...error, 'blok': [true, "Cannot Empty"]})
                return false            }
        }
        const isEmpty = checkIsEmpty(data.blok);
        if (isEmpty) {
            setError({...error, 'blok': [true, "Cannot Empty"]})
            return false
        }

        if (typeof data.blok === "string") {

            data.blok = data.blok.toUpperCase();

        }
        const isnum = /^[A-Z][0-9]+$/.test(data.blok);
        if (!isnum) {
            setError({...error, 'blok': [true, "Example format: A1, B15, C215"]})
            return false
        }

        setData({...data, 'blok': data.blok});

        setError({...error, 'blok': [false, ""]})
        return true
    }


    return (
        <div className={clsx(classes.root)}>
            <h2>Add new</h2>
            <FormControl className={clsx(classes.fc)} variant="outlined">
                {/*<InputLabel htmlFor="name">Name</InputLabel>*/}
                <TextField
                    error={error.name[0]}
                    helperText={error.name[1]}
                    id="name"
                    label={"Name"}
                    type={"text"}
                    value={data.name}
                    onChange={handleChange('name')}
                    onBlur={validateName}
                    InputProps={{
                        notched:data.name
                    }}
                    placeholder={"John Doe"}
                    labelWidth={45}
                    variant={"outlined"}
                    required

                />

            </FormControl>
            <FormControl className={clsx(classes.fc)} variant="outlined">
                {/*<InputLabel htmlFor="phone">Phone</InputLabel>*/}
                <TextField
                    error={error.phone[0]}
                    helperText={error.phone[1]}
                    id="phone"
                    label={"Phone"}
                    type={"text"}
                    value={data.phone}
                    onChange={handleChange('phone')}
                    onBlur={validatePhone}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">+62</InputAdornment>,
                    }}
                    labelWidth={50}
                    variant={"outlined"}
                    required

                />
            </FormControl>
            <FormControl className={clsx(classes.fc)} variant="outlined">
                <InputLabel htmlFor="nickname">Nickname</InputLabel>
                <OutlinedInput
                    id="nickname"
                    type={"text"}
                    value={data.nickname}
                    onChange={handleChange('nickname')}
                    placeholder={`Mas ${(typeof data.name === "string" && data.name.split(' ')[0]) || 'John'}, Pak ${(typeof data.name === "string" && data.name.split(' ')[0]) || 'John'}, ${(typeof data.name === "string" && data.name.split(' ')[0]) || 'John'}`}
                    labelWidth={75}
                />
            </FormControl>
            <FormControl className={clsx(classes.fc)} variant="outlined">
                {/*<InputLabel htmlFor="blok">Blok</InputLabel>*/}
                <TextField
                    error={error.blok[0]}
                    helperText={error.blok[1]}
                    id="blok"
                    label={"Blok"}
                    type={"text"}
                    value={data.blok}
                    onChange={handleChange('blok')}
                    onBlur={validateBlok}
                    labelWidth={32}
                    placeholder={"A1"}
                    variant={"outlined"}
                    required
                />
            </FormControl>
            <FormControl className={clsx(classes.fc)} variant="outlined">
                {/*<InputLabel htmlFor="foto" >Foto</InputLabel>*/}
                <TextField
                    error={error.image[0]}
                    helperText={error.image[1]}
                    label={"Foto"}
                    id="foto"
                    type={"file"}
                    // value={data.image}
                    inputProps={{
                        accept: "image/x-png,image/jpeg"
                    }}
                    onChange={handleChange('image')}

                    InputProps={{
                        startAdornment: <InputAdornment position="start">

                        </InputAdornment>
                    }}
                    labelWidth={35}
                    variant={"outlined"}

                />
            </FormControl>
            <div  style={{margin:"9px"}}>
                <Divider/>
            </div>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <ContactCard {...data}/>
                </Grid>
            </Grid>
            <Button
                className={clsx(classes.submitBtn)}
                onClick={handleSubmit}
                variant="contained"
                color="default"
                disabled={submitDisabled}
            >Submit</Button>
        </div>
    )
}