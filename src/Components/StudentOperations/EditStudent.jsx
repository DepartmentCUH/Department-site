import React,{useState, useEffect} from 'react';
import StudentNavbar from './StudentNavbar';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {useHistory,useParams} from 'react-router-dom';
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
const addUserDetails = (e) => {
    e.preventDefault();
   
}

const initialValues = {
    "name":"",
    "email":"",
    "phone":"",
    "rollno":""
}
const Editstudent = () => {
    const classes = useStyle();
    const {id}=useParams();

    
    const [user,setUser]=useState(initialValues);
    const {name,phone,email,rollno}= user;
    const history=useHistory();
    const onValueChange= (e) =>{
       
        setUser({...user, [e.target.name]:e.target.value})
       
    }

    const loaduserData = async() => {
        await axios.get(`/api/students/${id}`, id) 
        .then((response) => {
            setUser(response.data);
           
          }, 
          (error) => {
            alert(error);
          })
    }
    useEffect(()=>{
        loaduserData()
        
    },[]);
    const editUserDetails = (e) => {
        e.preventDefault();
        axios.put(`/api/students/${id}`, user) 
        .then((response) => {
            alert("student updated successfully")
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
               <Typography variant="h4">Edit Student</Typography>
               <FormControl>
                   <InputLabel>
                    Name
                   </InputLabel>
                   <Input onChange={(e) => onValueChange(e)} name="name" value={name} />
               </FormControl>
               <FormControl>
                   <InputLabel>
                   Roll No
                   </InputLabel>
                   <Input onChange={(e) => onValueChange(e)} name="rollno" value={rollno} />
               </FormControl>
               <FormControl>
                   <InputLabel>
                    Phone
                   </InputLabel>
                   <Input onChange={(e) => onValueChange(e)} name="phone" value={phone} />
               </FormControl>
               <FormControl>
                   <InputLabel>
                   Email
                   </InputLabel>
                   <Input onChange={(e) => onValueChange(e)} name="email" value={email} />
               </FormControl>
               <Button variant="contained" color="primary" onClick={ editUserDetails }>Edit Student</Button>
           </FormGroup>
        </div>
    );
}

export default Editstudent;
