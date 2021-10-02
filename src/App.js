import logo from './logo.svg';
// import './App.css';
import Navbar from './Components/Navbar/Navbar.compoonent';
import Navbar1 from './Components/Navbar/Navbar1.component'; 
import Sidebar from './Components/Sidebar/Sidebar.component';
import CarouselComponent from './Components/Carousel/Carousel.component';
import EventBar from './Components/EventBar/Event.component';
import Footer from './Components/Footer/Footer';
import Eventpage from './Components/EventsPage/Eventpage.component';
import Notificationpage from './Components/NotificationPage/Notification.component';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      {/* <Navbar/> */}
      
      <Switch>
      <Route path="/" exact={true}>
      <Navbar1/>
      <div className="flex">
         <Sidebar/>
      <CarouselComponent/>
      <EventBar />
     
      </div>
     
     
      <Footer/>
          </Route>
      <Route path="/events" exact={true}>
           <Eventpage/>
          
          </Route>
          <Route path="/notification" exact={true}>
          <Notificationpage/>
           </Route>
      </Switch>
      
     
     
   
      </Router>
    </div>
  );
}

export default App;
