import React, { Component, useEffect, useState } from "react";
import './Categ.scss'
import { Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import Typography from '@mui/material/Typography';


function Categorias() {
    const [productos, setUser] = useState([]);
    const [Loading,setLoading]= useState(false)


    async function prueba() {
        await fetch('http://18.216.107.92:3001/productos')
            .then(response => response.json())
            .then(data =>
                setUser(data)
            );
        setLoading(true)
    }

    useEffect(() => {
        prueba()
    }, []);

    function Card(props) {
        
        return (
            <div className="card">
                <img src={`data:image/png;base64,${props.img}`} className="card__img" alt='alt' />
                <div className="card__body">
                    <h2 className="card__title">{props.title}</h2>
                    <p className="card__description">{props.description}</p>
                    <h3 className="card__price">{parseFloat(props.price).toFixed(2)}</h3>
                    <Link to={`/producto/${props.id}`}>
                        <button className="card__btn">See Product</button>
                    </Link>
                    
                </div>
            </div>
        );
        
        
    }
    return (
        <div>
            <div className="wrapper">
                {
                    Loading ?
                    productos.map(data => {
                        return (
                            <Card
                                img={data.image_1920}
                                title={data.display_name}
                                description={data.description}
                                price={data.list_price}
                                id={data.id}
                            />
                        )
                    })
                    :
                    <Spinner animation="border" />
                }
            </div>
        </div>
    )
    /**
    return (
        <div>
            <div class=".container-sm">
                <div class="row row-cols-4">
                    {
                        productos.map(data => {
                            return (
                                <div key ={data.id}class="col">
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={`data:image/png;base64,${data.image_1920}`} />
                                        <Card.Body>
                                            <Card.Title>{data.display_name}</Card.Title>
                                            <Card.Text>
                                                {data.description}
                                            </Card.Text>
                                            <Link to={`/producto/${data.id}`}>
                                                <Button variant="primary">Ver Producto</Button>
                                            </Link>
                                            
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
    **/
}
export default Categorias;