import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { firstMayus } from '../helpers/helpers';

const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 1rem 1rem 0 0;
    background-color: green;
    color: #fff;
`

const ContentList = styled.ul`
    display: flex;
    justify-content: space-evenly;
    font-size: 1rem;
    font-weight: bold;
    background-color: lightgreen;
    padding: 2rem 0;
    border-radius: 0 0 1rem 1rem;

`

const NameList = styled.span`
    font-size: 1rem;
    font-weight: normal;
`

export const Resumen = ({datos}) => {

    const { marca, year, plan } = datos;

    if(marca === '' || year === '' || plan === '') return null;

    return (
        <>
            <Title className="animate__animated animate__bounceIn">Resumen de cotizacion</Title>
            <ContentList className="animate__animated animate__bounceIn">
                <li>Marca: <NameList>{firstMayus(marca)}</NameList> </li>
                <li>Plan: <NameList>{firstMayus(plan)}</NameList></li>
                <li>Year: <NameList>{firstMayus(year)}</NameList></li>
            </ContentList>
        </>
    )
}

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}