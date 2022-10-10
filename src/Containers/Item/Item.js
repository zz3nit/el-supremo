import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './item.css'

const Item = ({item}) => {
    return (
        <div className="displayTarjeta">
            <Card className="tarjetaBody">
            <img className="tarjetaImagen" src={item.imagen} alt="" />
            <CardContent>
                <Typography className="tarjeta__titulo" gutterBottom variant="h5" component="div">
                {item.titulo}
                </Typography>
                <Typography  variant="body2" color="text.secondary">
                </Typography>
                <p className="tarjeta__precio">Precio: ${item.precio}</p>
            </CardContent>
            <CardActions>
                <p className="tarjeta__detalle" size="small">Ver Detalle</p>
            </CardActions>
            </Card>
            </div>
        );
        }

export default Item