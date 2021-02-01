import React, {useState, useEffect, Fragment} from "react";
import {Link} from 'gatsby';
import {getAllUser} from '../model/data.js';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ControlPointIcon from '@material-ui/icons/ControlPoint';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    cont: {
        // border:"red solid 1px",
        display: "flex",
        flexDirection: "column"
    },
    title: {},
    addButton: {
        alignSelf: "flex-end",
        margin: "7px",
        textDecoration:"none"
    },
});

function RenderTableRow(props) {
    return (
        props.data.map((row) => (
            <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">{row.nickname}</TableCell>
                <TableCell align="right">{row.blok}</TableCell>
                <TableCell align="right">{row.image}</TableCell>
                <TableCell align="right">{row.image}</TableCell>
            </TableRow>
        ))
    )
}

function RenderEmptyTableRow() {
    return (
        <TableRow>
            <TableCell component="th" scope="row" colSpan={6}>
                No Data
            </TableCell>

        </TableRow>
    )
}

export default function Admin(props) {
    const classes = useStyles();

    const [data, setData] = useState([]);
    useEffect(() => {
        getAllUser()
            .then(d => setData(d))
        ;
    }, []);

    return (
        <div className={classes.cont}>
            <h1>Data</h1>
            <Link className={classes.addButton}
                  to={"/admin/new"}>

                <Button
                    variant="contained"
                    color="default"
                    startIcon={<ControlPointIcon/>}
                >Add new </Button>
            </Link>

            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nama</TableCell>
                            <TableCell align="right">WA Phone</TableCell>
                            <TableCell align="right">Panggilan</TableCell>
                            <TableCell align="right">Blok</TableCell>
                            <TableCell align="right">Image</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.length > 1 ? <RenderTableRow/> : <RenderEmptyTableRow/>}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    )
}