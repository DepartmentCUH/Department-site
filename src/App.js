import logo from "./logo.svg";
// import './App.css';
import Login from "./Components/login-signup/login";
import Signup from "./Components/login-signup/signup";
import Navbar from "./Components/Navbar/Navbar.compoonent";
import Navbar1 from "./Components/Navbar/Navbar1.component";
import Sidebar from "./Components/Sidebar/Sidebar.component";
import CarouselComponent from "./Components/Carousel/Carousel.component";
import EventBar from "./Components/EventBar/Event.component";
import Footer from "./Components/Footer/Footer";
import Eventpage from "./Components/EventsPage/Eventpage.component";
import Notificationpage from "./Components/NotificationPage/Notification.component";
import Addstudent from "./Components/StudentOperations/AddStudent";
import Allstudent from "./Components/StudentOperations/AllStudent";
import Editstudent from "./Components/StudentOperations/EditStudent";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar/> */}

        <Switch>
          <Route path="/login" exact={true}>
            <Login />
          </Route>
          <Route path="/signup" exact={true}>
            <Signup />
          </Route>
          <Route path="/" exact={true}>
            <Navbar1 />
            <div className="flex">
              <Sidebar />
              <CarouselComponent />
              <EventBar />
            </div>

            <Footer />
          </Route>
          <Route path="/events" exact={true}>
            <Eventpage />
          </Route>
          <Route path="/notification" exact={true}>
            <Notificationpage />
          </Route>
          <Route path="/students" exact={true}>
            <Allstudent />
          </Route>
          <Route path="/add-student" exact={true}>
            <Addstudent />
          </Route>
          <Route path="/edit-student/:id" exact={true}>
            <Editstudent />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
