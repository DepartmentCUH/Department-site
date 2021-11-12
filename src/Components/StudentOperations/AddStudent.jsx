import React,{useState, useEffect} from 'react';
import StudentNavbar from './StudentNavbar';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {useHistory} from 'react-router-dom';
import axios from '../../axios';
const useStyle = makeStyles({
    formContainer:{
        width:"50%",
        margin:'5%  0 0 25%',
        '& > *':{
            marginTop:20
        }
    },
  
    
})

const initialValues = {
    "name":"",
    "email":"",
    "phone":"",
    "rollno":""
}
const Addstudent = () => {
    const classes = useStyle();
    const [user,setuser]=useState(initialValues);
    const {name,phone,email,rollno}= user;
    const history=useHistory();
    const onValueChange= (e) =>{
       
        setuser({...user, [e.target.name]:e.target.value})
       
    }
    const addUserDetails = (e) => {
        e.preventDefault();
        axios.post('/api/students', user) 
        .then((response) => {
            alert("user added successfully")
            history.push('/students');
          }, 
          (error) => {
            alert(error);
          })
    }
    
    return (
        <div>
            <StudentNavbar/>
           <FormGroup className={classes.formContainer}>
               <Typography variant="h4">Add Student</Typography>
               <FormControl>
                   <InputLabel>
                    Name
                   </InputLabel>
                   <Input onChange={(e) => onValueChange(e)} name="name" />
               </FormControl>
               <FormControl>
                   <InputLabel>
                   Roll No
                   </InputLabel>
                   <Input onChange={(e) => onValueChange(e)} name="rollno"/>
               </FormControl>
               <FormControl>
                   <InputLabel>
                    Phone
                   </InputLabel>
                   <Input onChange={(e) => onValueChange(e)} name="phone"/>
               </FormControl>
               <FormControl>
                   <InputLabel>
                   Email
                   </InputLabel>
                   <Input onChange={(e) => onValueChange(e)} name="email"/>
               </FormControl>
               <Button variant="contained" color="primary" onClick={ addUserDetails }>Add Student</Button>
           </FormGroup>
        </div>
    );
}

export default Addstudent;
