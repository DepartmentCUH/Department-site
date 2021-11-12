import React,{useState, useEffect}  from 'react';
import StudentNavbar from './StudentNavbar';
import axios from '../../axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

import {makeStyles} from '@material-ui/core';

const useStyle = makeStyles({
    table:{
        width:"90%",
        margin:'5%'
    },
    thead:{
        '& > *':{
            background:'#000000',
            color:'#FFFFFF'
        }
    }
})



const Allstudent = () => {
    let [StudentData, setStudentData] = useState([])
    const getStudentData = async() =>{
      axios.get("/api/students")
            
               
      .then(response => setStudentData(response?.data))
    }
    const deleteuserData = async(id) => {
      axios.delete(`/api/students/${id}`).then(alert("Student Deleted Successfully")).catch(err =>err.message)
      getStudentData();
    }
    const classes = useStyle();
    useEffect(() => {
        getStudentData();
      },[StudentData])

    return (
        <div>
            <StudentNavbar/>
            
            <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.thead}>
            <TableCell align='center'>Roll No</TableCell>
            <TableCell  align='center'>Name</TableCell>
            <TableCell align='center' >Phone</TableCell>
            <TableCell align='center'>Email</TableCell>
            <TableCell align='center'></TableCell>
            <TableCell align='center'></TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {StudentData.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align='center'>
                {row?.rollno}
              </TableCell>
              <TableCell align='center'>{row?.name}</TableCell>
              <TableCell align='center'>{row?.phone}</TableCell>
              <TableCell align='center'>{row?.email}</TableCell>
              <TableCell align='center'>
                  <Button variant="contained" color="primary" component={Link} to={`edit-student/${row?._id}`} style={{ textDecoration: 'none',color: '#FFF' }} >Edit</Button>
              </TableCell>
              <TableCell align='center'>
                  <Button variant="contained" color="secondary" onClick={()=>deleteuserData(row?._id)}>Delete</Button></TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
         
        </div>
    );
}

export default Allstudent;
