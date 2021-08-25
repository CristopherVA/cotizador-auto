import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const Error = styled.div`
    width: 100%;
    color: #ffff;
    text-align: center;
    padding: 1rem;
    background-color: orangered;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
`;


const Total = styled.div`
    width: 100%;
    color: #ffff;
    text-align: center;
    padding: 1rem;
    background-color: green;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
`
export const Resultado = ({ cotizacion }) => {

    

    return (cotizacion === 0) 
    ? <Error className="animate__animated animate__zoomInUp">Elige marca, year y tipo de plan</Error> 
    : (
        <TransitionGroup
            component='div'
            className="resultado"
        >
            <CSSTransition
                classNames="resultado"
                key={cotizacion}
                timeout={{enter: 500,  exit:500}}
            >
             <Total className="animate__animated animate__bounceIn"> {cotizacion} </Total>
            </CSSTransition>
        </TransitionGroup>
    )
}

Resultado.propTypes = {
    cotizacion: PropTypes.number.isRequired
}