import React, {Fragment, useState} from "react";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import IconButton from '@material-ui/core/IconButton';

import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
    root: {
        display:"flex",
        flexDirection:"column",
        alignItems:"flex-start",
    },
    fc:{
        margin:"17px",
        minWidth:"300px"
    }

}));

export default function NewUser(props){
    const classes = useStyles();

    const [data,setData] = useState({
        name:null,
        phone:null,
        nickname:"",
        blok:null,
        image:"",
    });

    const handleChange = (prop) => (event) => {
        if (prop ==="image"){
            setData({ ...data, [prop]: event.target.files[0] });
            console.log(event.target.files[0],"iamge")
        }else {
            setData({ ...data, [prop]: event.target.value });
        }
    };

    const handleSubmit = () => {
        alert(JSON.stringify(data))
    };

    let nameNotError = ((data.name && data.name.trim()!== "") || data.name == null);
    let phoneNotError = ((data.phone && data.phone.trim()!== "") || data.phone == null);
    let blokNotError = ((data.blok && data.blok.trim()!== "") || data.blok == null);



    return (
        <div className={clsx(classes.root)}>
            <h2>Add newa</h2>
            <FormControl className={clsx(classes.fc)} variant="outlined">
                {/*<InputLabel htmlFor="name">Name</InputLabel>*/}
                <TextField
                    error={!nameNotError}
                    id="name"
                    label={"Name"}
                    type={"text"}
                    value={data.name}
                    onChange={handleChange('name')}
                    placeholder={"John Doe"}
                    labelWidth={45}
                    helperText="Incorrect entry."
                    variant={"outlined"}
                    required

                />

            </FormControl>
            <FormControl className={clsx(classes.fc)} variant="outlined">
                {/*<InputLabel htmlFor="phone">Phone</InputLabel>*/}
                <TextField
                    error={!phoneNotError}
                    id="phone"
                    label={"Phone"}
                    type={"text"}
                    value={data.phone}
                    onChange={handleChange('phone')}
                    inputProps={{
                        startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                    }}
                    labelWidth={50}
                    helperText="Incorrect entry."
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
                    placeholder={"Mas John"}
                    labelWidth={75}
                />
            </FormControl>
            <FormControl className={clsx(classes.fc)} variant="outlined">
                {/*<InputLabel htmlFor="blok">Blok</InputLabel>*/}
                <TextField
                    error={blokNotError}
                    id="blok"
                    label={"Blok"}
                    type={"text"}
                    value={data.blok}
                    onChange={handleChange('blok')}
                    labelWidth={32}
                    placeholder={"A1"}
                    helperText="Incorrect entry."
                    variant={"outlined"}
                    required
                />
            </FormControl>
            <FormControl className={clsx(classes.fc)} variant="outlined">
                <InputLabel htmlFor="foto" >Foto</InputLabel>
                <OutlinedInput
                    id="foto"
                    type={"file"}
                    // value={data.image}
                    accept={"image/x-png,image/jpeg"}
                    onChange={handleChange('image')}
                    startAdornment={
                        <InputAdornment position="start">

                        </InputAdornment>
                    }
                    labelWidth={35}
                    placeholder={"A1"}
                />
            </FormControl>
            <Button
                onClick={handleSubmit}
                variant="contained"
                color="default"
            >Submit</Button>
        </div>
    )
}