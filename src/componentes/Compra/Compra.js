import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Compra_style.css";
import Button from '@material-ui/core/Button'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple, red, lightGreen, orange, green } from '@mui/material/colors';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from "@material-ui/core/Grid";
export default function Compra({ match }) { 




  const [product, SetProduct] = useState({});
    async function prueba() {
        await fetch('http://18.216.107.92:3001/getProduct',{method: "POST", 
        headers: { "content-type": "application/json" },
        body: JSON.stringify({"id": match.params.id})})
            .then(response => response.json())
            .then(data =>{
                SetProduct(data[0])  
            })
    }
    useEffect(() => {
        prueba()
  });

  async function venta() {
    console.log(userName)
    if (userName.length === 0 || userPhone.length === 0 || userMail.length === 0 || userAdress.length === 0){
      alert('Debe llenar todos los campos')
    }else{
      alert('Compra realizada con exito.')
      await fetch('http://18.216.107.92:3001/pedido',{method: "POST", 
      headers: { "content-type": "application/json" },
      body: JSON.stringify({"id": parseInt(match.params.id),
                          "display_name": product.display_name,
                          "list_price": parseFloat(product.list_price),
                          "user_name": userName,
                          "user_mobile": userPhone,
                          "user_email": userMail,
                          "user_adress": userAdress,    
                        })})
        .then(response => response.json())
        .then(data =>{
            SetProduct(data[0])          
      })
    }
  }

  const [userName, setUserName] = useState('')
  const [userPhone, setUserPhone] = useState('')
  const [userMail, setUserMail] = useState('')
  const [userAdress, setUserAdress] = useState('')

  const onChangeUserName = event => {
    setUserName( event.target.value );
  };

  const onChangeUserPhone = event => {
    setUserPhone( event.target.value );
  };

  const onChangeUserMail = event => {
    setUserMail( event.target.value );
  };

  const onChangeUserAdress = event => {
    setUserAdress( event.target.value );
  };
  const theme = createTheme({
    palette: {
      primary: green,
      secondary: orange,
    },
  });
    return (

      <div className="main_div_compra">
        <div>
          <text style={{fontSize:'125%'}}>Complete el formulario para finalizar su compra</text>
        </div>
        <div className="compra_grid_row">
          <div className="compra_grid_column" >
          <div style={{marginTop: "10px",marginLeft: "10px"}}>
          <text style={{fontSize:'85%'}}>Ingrese sus datos:</text>
          <form className="contact-form" alignItems="center">

        <br />

        
        <TextField
          id="outlined-basic"
          placeholder=" Nombre"
          
          variant="standard"
          
          required
          type="text"
          size="large"
          onChange={onChangeUserName}
        />
       
        <TextField
          id="outlined-basic"
          style={{marginLeft: '50px',
        marginBottom:'35px'}}
          placeholder=" email"
          variant="standard"
          onChange={onChangeUserMail}
          required
          type="email"
        />
        <br />

        <TextField
          id="outlined-basic"
          placeholder=" Direccion"
          
          variant="standard"
          onChange={onChangeUserAdress}
          required
        />
        
        <TextField
          id="outlined-basic"
          style={{marginLeft: '50px',
          marginBottom:'10px'}}
          placeholder=" Telefono"
          onChange={onChangeUserPhone}
          variant="standard"
          
          required
        />
        

      </form>
   
        </div>
          </div>
          <div className="compra_grid_column">
            <div>
                          
            <text style={{fontWeight:'bold'}} > {product.display_name}</text>
            
            <div>
              <text>Q. {product.list_price}</text>
            </div>
                <text style={{fontSize:'85%'}}>Descripcion: {product.description}</text>
            </div>
          </div>
        </div>
       
        <div className="compra_grid_row" style={{marginTop: "100px", left: "26%", gap: "10rem"}}>
        
          <Link to={"../"}>
            <Button style={{textTransform: 'initial', 
          marginLeft:'20px'}} variant="contained" color="primary">Regresar al Catalogo</Button>
          </Link>
          <ThemeProvider theme={theme}>
          <Button style={{textTransform: 'initial', 
          marginLeft:'10px'}} variant="contained" color="secondary" onClick={() => {venta()}}>Comprar Producto</Button>
          </ThemeProvider>
        </div>
      </div>
    );
} 