import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { doc, getDoc, collection,} from 'firebase/firestore';
import { Ring, JellyTriangle } from '@uiball/loaders';
import { toast } from 'react-toastify';
import { dataBase } from "../../firebase/firebase";
import './OrdenView.css'


const generadorSchema = yup.object().shape({
    id: yup.string().length(20, `La ID debe ser de 20 digitos`).required('Coloca una ID para realizar la busqueda')
})

export const Ordenes= () => {
    const {register, handleSubmit, formState: {errors}} = useForm ({resolver: yupResolver(generadorSchema)});
    const [ordenDatos, setOrdenDatos] = useState({})
    const [loading, setLoading] = useState()


    const onSubmit = (data) => {
        setLoading(true)
        getOrdenDatos(data.id)
        toast.info('Buscando orden', {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "colored",
            icon: <Ring size={40} lineWeight={5} speed={2}  color="white" />
        })
    }

    const getOrdenDatos = async (docId) => {
        const ventasCollection = collection(dataBase, 'ventas');
        const idDoc = doc(ventasCollection, docId)
        await getDoc(idDoc)
        .then(resp => {
            if (resp.data()) {
                setOrdenDatos({id: resp.id, ...resp.data()})
                toast.success('Orden encontrada', {
                    position: "top-right",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "colored",
                    toastId: "find-success",
                })
            } else {
                setOrdenDatos({id: resp.id, ...resp.data()})
                toast.error('Orden inexistente, comprueba el ID', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "colored",
                    toastId: "find-error",
                })
            }
        })
        .finally(
            setTimeout(() =>{
                setLoading(false)
            }, 2500)
        )
    }



    return(
        <>
            <div className='orden-container'>
                <h2>Buscar orden</h2>
                <form className='orden-formulario' onSubmit={handleSubmit(onSubmit)}>
                    <p className='orden-texto'>Ingrese la ID de la orden</p>
                    <input className='orden-input' type="text" {...register("id")} placeholder="0a1b2c3d4e5f6g7h8i9j"/>
                    {errors.id && <p className='form-error'>{errors.id.message}</p>}<button className="boton-orden" type="submit">Buscar orden</button>
                </form>
            </div>
            {loading ? <div className='loader'><JellyTriangle size={120} speed={1.4} color="#0cc9a7" /></div>
                :
                <div className='orden-vista'>
                    <h2>Orden de compra</h2>
                    <p className='orden-texto'>ID: {ordenDatos.id}</p>
                    <p className='orden-texto'>Cantidad: {ordenDatos.cantidad}</p>
                    <p className='orden-texto'>Fecha de la compra: {ordenDatos.date}</p>
                    <p className='orden-texto'>Total gastado: ${ordenDatos.total}</p>
                </div>
            }
        </>
    )
}