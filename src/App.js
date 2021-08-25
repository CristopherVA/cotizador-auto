import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Form } from './component/Form';
import { Header } from './component/Header';
import { Resumen } from './component/Resumen';
import { Resultado } from './component/Resultado';
import { Spinner } from './component/Spinner/Spinner';

const Container = styled.div`
    width: 500px;
    height: 400px;
    margin: 0 auto;
    padding: 2rem 5rem;
    background-color: #ffffff;
    border-radius: 0 0 2rem 2rem;
`



export const App = () => {


    const [resumen, setResumen] = useState({
        cotizacion: 0,
        datos: {
            marca: '',
            year: '',
            plan: ''
        }

    })

    const [cargando, setCargando] = useState(false);


    const { cotizacion, datos } = resumen;

    return (
        <>
            <Header title={'Cotizador de Seguro de Autos'} />

            <Container>
                <Form setResumen={setResumen} setCargando={setCargando} />
                { cargando ? <Spinner /> : null }
                
                {
                    !cargando ? <Resumen datos={datos} /> : null
                }

                {
                    !cargando ? <Resultado cotizacion={cotizacion} /> : null
                }
            </Container>

        </>
    )
}
