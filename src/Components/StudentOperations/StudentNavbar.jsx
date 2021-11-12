import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
   header:{
       background:"#636E72"
   },
    title: {
      flexGrow: 1,
    },
  }));
  
const StudentNavbar = () => {
    const classes = useStyles();
    const history = useHistory();
    const doLogout = (e) => {
      e.preventDefault();
      localStorage.removeItem("jwt");
      history.push("/");
    }
    return (
        <div >
      <AppBar position="static" className={classes.header}>
        <Toolbar>
         
          <Typography  className={classes.title} onClick={() => history.push("/")}>
            Computer Science and Engineering
          </Typography>
          <Typography  className={classes.title}>
          <Link to="/add-student" style={{textDecoration: 'none'}} className="hover:text-white focus:text-white cursor-pointer	  ">
          Add Student
            </Link>
           
          </Typography>
          <Typography  className={classes.title}>
          <Link to="/students" style={{textDecoration: 'none'}} className="hover:text-white focus:text-white cursor-pointer	  ">
          All Students
            </Link>
           
           
          </Typography>
          <Button color="inherit" onClick={doLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
    );
}

export default StudentNavbar;
