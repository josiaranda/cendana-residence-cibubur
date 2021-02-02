import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "gatsby";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import clsx from "clsx";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    home:{
        textDecoration:"none",
        "&:visited":{
            color:"inherit"
        }
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    {/*<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">*/}
                    {/*    <MenuIcon />*/}
                    {/*</IconButton>*/}
                    <Typography variant="h6" classes={classes.title} className={classes.title}>
                        <Link to={"/"} activeClassName={clsx(classes.home)}>Keluarga Cendana Cibubur</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
