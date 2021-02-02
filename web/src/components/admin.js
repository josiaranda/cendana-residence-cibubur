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
import Avatar from '@material-ui/core/Avatar';


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
    console.log(props,"props")
    return (
        props.data.map((row) => (
            <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.nickname}</TableCell>
                <TableCell>{row.blok}</TableCell>
                <TableCell><Avatar alt={row.name} src={row.image}/></TableCell>
                <TableCell><Link to={`/admin/edit?id=${row.ID}`}>Edit</Link></TableCell>
            </TableRow>
        ))
    )
}

function RenderEmptyTableRow(props) {
    return (
        <TableRow>
            <TableCell component="th" scope="row" colSpan={6}>
                {props.isLoading?`Loading...`:`No data`}
            </TableCell>

        </TableRow>
    )
}

export default function Admin(props) {
    const classes = useStyles();

    const [isDataLoading, setIsDataLoading] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
        setIsDataLoading(true);
        getAllUser()
            .then(d => setData(d))
            .finally(() => {
                setIsDataLoading(false);
            })
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
                            <TableCell>WA Phone</TableCell>
                            <TableCell>Panggilan</TableCell>
                            <TableCell>Blok</TableCell>
                            <TableCell>Image</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.length > 0 ? <RenderTableRow data={data}/> : <RenderEmptyTableRow isLoading={isDataLoading}/>}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    )
}