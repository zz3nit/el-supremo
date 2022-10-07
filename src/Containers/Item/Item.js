import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './item.css'

const Item = ({item}) => {
    console.log(item);
    return (
        <div className="displayTarjeta">
            <Card className="tarjetaBody">
            <img className="tarjetaImagen" src={item.imagen} alt="" />
            <CardContent>
                <Typography className="tarjetaletras" gutterBottom variant="h5" component="div">
                {item.titulo}
                </Typography>
                <Typography className="tarjetaletras" variant="body2" color="text.secondary">
                {item.descripcion}
                </Typography>
                <p className="tarjetaletras">Precio: ${item.precio}</p>
            </CardContent>
            <CardActions>
                <button className="tarjetaBoton" size="small">Ver Detalle</button>
            </CardActions>
            </Card>
            </div>
        );
        }

export default Item