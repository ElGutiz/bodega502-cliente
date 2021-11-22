import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button, MenuItem, Menu} from "@material-ui/core"
import Fade from '@mui/material/Fade';



export default function NavbarPro() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuCLick = () => {
    setAnchorEl(null);
  };

  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor: 'warning.main' }} position="static" style={{alignItems: 'center', height: '8.5vh'}}>
        <Toolbar>
          <div> 
            <Button 
             color="inherit" 
             id="fade-button1"
             sx={{ bgcolor: 'warning.main' }}
             aria-controls="fade-menu"
             aria-haspopup="true"
             aria-expanded={open ? 'true' : undefined}
             onClick={handleClick}
            >Hogar
            </Button>
              <Menu
                id="fade-menu1"
                MenuListProps={{
                  'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuCLick}
                TransitionComponent={Fade}
              >
                  <MenuItem onClick={handleMenuCLick}>Articulos de cocina</MenuItem>
                  <MenuItem onClick={handleMenuCLick}>Camas</MenuItem>
                  <MenuItem onClick={handleMenuCLick}>Electrodomesticos</MenuItem>
                  <MenuItem onClick={handleMenuCLick}>Mesas</MenuItem>
                  <MenuItem onClick={handleMenuCLick}>Sillas/Bancos</MenuItem>
                </Menu>

            <Button 
             color="inherit" 
             id="fade-button1"
             aria-controls="fade-menu"
             sx={{ bgcolor: 'warning.main' }}
             aria-haspopup="true"
             aria-expanded={open ? 'true' : undefined}
             onClick={handleClick}
            >Ejercicio
            </Button>
              <Menu
                id="fade-menu2"
                MenuListProps={{
                  'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuCLick}
                TransitionComponent={Fade}
              >
                  <MenuItem onClick={handleMenuCLick}>Pesas</MenuItem>
                  <MenuItem onClick={handleMenuCLick}>Maquinas</MenuItem>
                  <MenuItem onClick={handleMenuCLick}>Bancos</MenuItem>
                </Menu>
          </div>

          <div> 
            <Button 
             color="inherit" 
             id="fade-button1"
             aria-controls="fade-menu"
             aria-haspopup="true"
             aria-expanded={open ? 'true' : undefined}
             onClick={handleClick}
            >Limpieza
            </Button>
              <Menu
                id="fade-menu3"
                MenuListProps={{
                  'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuCLick}
                TransitionComponent={Fade}
              >
                  <MenuItem onClick={handleMenuCLick}>Mascarillas</MenuItem>
                  <MenuItem onClick={handleMenuCLick}>Guantes</MenuItem>
                </Menu>
          </div>

          <div> 
            <Button 
             color="inherit" 
             id="fade-button1"
             aria-controls="fade-menu"
             aria-haspopup="true"
             aria-expanded={open ? 'true' : undefined}
             onClick={handleClick}
            >Otros Productos
            </Button>
              <Menu
                id="fade-menu4"
                MenuListProps={{
                  'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuCLick}
                TransitionComponent={Fade}
              >
                  <MenuItem onClick={handleMenuCLick}>Accesorio relojes</MenuItem>
                  <MenuItem onClick={handleMenuCLick}>Baterias</MenuItem>
                  <MenuItem onClick={handleMenuCLick}>Jardineria y extensiones</MenuItem>
                 
                </Menu>
          </div>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}