import React, {Fragment, useEffect, useState,useReducer,useCallback} from "react"
import AppBar from "../components/appbar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import cx from "clsx";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {imgSource} from '../components/imgSource.js'
import {getAllUser} from "../model/data";
import ContactCard from "../components/contactCard.js";
import {TextField} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import {debounce} from 'lodash';

const style = {
    display: 'flex',
    justifyContent: 'center'
}

const useStyles = makeStyles(({spacing, palette}) => {
    const family =
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
    return {
        sectionHeader: {
            fontFamily: family,
            fontSize: 36,
            fontWeight: 700,
            borderBottom: '1px #d2d2d2 solid'

        },
    };
});

function processData(data,filter="", group="name",sort="asc") {
    let toreturn = {};
    if (filter.trim()) {
        data = data.filter(item => {
            return item.name.toLowerCase().includes(filter) || item.blok.toLowerCase().includes(filter) || item.phone.toLowerCase().includes(filter) || item.nickname.toLowerCase().includes(filter);
        });
    }
    console.log(filter,data,"uuuu")
    data.map(item => {
        const char = item[group].charAt(0);
        console.log(char)
        if (!(char in toreturn) ){
            toreturn[char] = [item];
        }else {
            toreturn[char] = [...toreturn[char],item];

        }

    });
    if (sort === 'desc'){
        console.log("desc")
        toreturn = Object.keys(toreturn).reverse().reduce(
            (obj, key) => {
                obj[key] = toreturn[key];
                return obj;
            },
            {}
        );
    }else {
        toreturn = Object.keys(toreturn).sort().reduce(
            (obj, key) => {
                obj[key] = toreturn[key];
                return obj;
            },
            {}
        );
    }
    console.log(toreturn,"data")
    return toreturn;
}


export default function Home() {

    const handleFilter = debounce((filter) => {
        setState({data:processData(rawData,filter,state.group,state.sortDir)})
    },500);

    const styles = useStyles();
    const [state, setState] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
            filter: "",
            data: null,
            group: 'name',
            sortDir:"asc",
        }
    )
    const [isLoading, setIsLoading] = useState(true);
    const [filter, setFilter] = useState("");
    const [rawData, setRawData] = useState([]);
    function refreshData(){
        setState({data:processData(rawData,state.filter,state.group,state.sortDir)})
    }
    useEffect(() => {
        setIsLoading(true);
        getAllUser()
            .then(d => {setState({data:processData(d,state.filter,state.group,state.sortDir)});setRawData(d)})
            .finally(() => {
                setIsLoading(false);
            })
        ;
    }, []);
    return (
        <Fragment>
            <AppBar/>
            <Container style={{marginTop: "16px"}}>
                <Typography variant="h4" style={style}>Anggota Keluarga</Typography>
                <div style={{marginTop:"17px"}}>
                    <FormControl>
                        <TextField
                            id="standard-basic"
                            label="Search"
                            value={state.filter}
                            onChange={e => {
                                setState({filter:e.target.value})
                                handleFilter(e.target.value);
                            }}/>

                    </FormControl>
                </div>
                {
                    isLoading ?
                        (
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <div style={{textAlign:"center"}}>
                                        <img src={imgSource} alt="loading" style={{maxWidth:"100px",height:"auto"}}/>
                                    </div>
                                </Grid>
                            </Grid>
                        )
                        :
                        (

                            <Grid container spacing={2} >
                                {
                                    Object.entries(state.data).map(([key, value]) => {
                                        console.log(key,value,"kv")
                                        return (
                                            <Fragment key={key}>
                                                <Grid item xs={12}>
                                                    <div className={cx(styles.sectionHeader)}>
                                                        {key}
                                                    </div>
                                                </Grid>

                                                {
                                                    value.map(item => {
                                                        return (
                                                            <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={item.ID}>
                                                                <ContactCard {...item}/>
                                                            </Grid>
                                                        )


                                                    })
                                                }
                                            </Fragment>
                                        )
                                    })
                                }
                            </Grid>

                        )
                }
                {/*<Paper elevation={3}>*/}
                {/*    <Table/>*/}
                {/*</Paper>*/}


            </Container>

        </Fragment>
    );
}

