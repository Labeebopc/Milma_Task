import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Products from './Components/Products/Products';
import About from './Components/About/About';

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <About/>

      <Products title='Chocolates' itemname='Choco Bar' volume='500ml' price='99.00'/>
      <Products title='Vannilla' itemname='Vannilla Tora' volume='500ml' price='199.00'/>
      <Products title='Pista' itemname='Pista Tora Tora' volume='500ml' price='249.00'
      style={{color: 'blue'}}/>
      <Footer/>


      
    </div>
  );
}

export default App;
