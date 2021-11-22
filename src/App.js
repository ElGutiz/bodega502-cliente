import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from './componentes/Navbar';
import NavbarPro from './componentes/NavbarPro';
import Ofertas from "./componentes/Inicio/CaruselOfertas";
import Categorias from "./componentes/Inicio/Categorias";
import Producto from "./componentes/Producto/Producto";
import Editor from "./componentes/Editor/Editor";
import Compra from "./componentes/Compra/Compra";
//import Login from "./componentes/Login/Login"
import './custom.scss';

import { ThemeProvider, createTheme,responsiveFontSizes} from '@mui/material/styles';
import React, { } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";
// <Producto/>

//color const
const pumpkin = '#f3742b'
const carolina_blue = '#4ea4d9'
const light_golden_yellow = '#fffbd6'
const lime_green = '#47c60c'
const venian_red = '#f3742b'

let theme = createTheme({
  palette: {
    pumpkin:{
      main: pumpkin
    },
    carolina_blue:{
      main: carolina_blue
    },
    light_golden_yellow:{
      main: light_golden_yellow
    },
    lime:{
      main: lime_green
    },
    venian_red:{
      main: venian_red
    },
  },
  typography:{
    fontFamily:[
      'Archivo+Black',
      'Arimo',
      'Hind+Madurai',
    ].join(','),
  },
});

theme = responsiveFontSizes(theme);
function App() {
  return (
    <Router>
      <ThemeProvider theme={theme} >
        <div className="App">
          <Navbar />
          <NavbarPro />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/oferta' exact component={Ofertas} />
            <Route path='/editor' exact component={Editor} />
            <Route path='/compra' exact component={Compra} />

            <Route path='/producto/:id' component={Producto} />
            <Route path='/editor/:id' component={Editor} />
            <Route path='/compra/:id' component={Compra} />
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
}
const Home = () => {
  return (
    <div>
      <Categorias />
    </div>
  )
}
export default App;
