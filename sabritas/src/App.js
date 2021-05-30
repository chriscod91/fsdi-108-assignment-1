
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './components/footer';
import NavBar from './components/navBar';
import QuantityPicker from './components/quantitypicker';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
     <h1>hello from react</h1>
     

     <QuantityPicker></QuantityPicker>

     <Footer></Footer>
    </div>
    
  );

}

export default App;
