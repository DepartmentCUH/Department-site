import logo from './logo.svg';
// import './App.css';
import Navbar from './Components/Navbar/Navbar.compoonent';
import Navbar1 from './Components/Navbar/Navbar1.component'; 
import Sidebar from './Components/Sidebar/Sidebar.component';
import CarouselComponent from './Components/Carousel/Carousel.component';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Navbar1/>
      <div className="flex"> <Sidebar/>
      <CarouselComponent/>
      <Sidebar/>
      </div>
     
   
      
    </div>
  );
}

export default App;
