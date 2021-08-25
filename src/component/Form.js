import React, {  useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { getYear, calcularMarca, calcularPlan } from '../helpers/helpers';

export const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`

export const Label = styled.label`
    flex: 0 0 50px; 
    align-items: center;
    font-weight: bold;
`

export const Select = styled.select`
display: block;
width: 100%;
padding: 1rem;
border-radius: 1rem;
-webkit-appearance: none;
outline: none;
border: none;
`;

export const InputRadio = styled.input`
    margin: 0 1rem;
`;

export const Button = styled.button`
    margin-top: 1rem;
    background-color: lightslategrey;
    width: 100%;
    font-size: 1rem;
    padding: 1rem;
    color: #ffffff;
    font-weight: bold;
    border: none;
    border-radius: 2rem;
    transition: ease-in .3s;
    &:hover{
        background-color: green;
        cursor: pointer;
    }

`

export const Error = styled.div`
    width: 100%;
    color: #ffff;
    text-align: center;
    padding: 1rem;
    background-color: red;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
`;


export const Form = ({setResumen, setCargando}) => {

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    })

    const [error, setError] = useState(false);

    const { marca, year, plan } = datos;

    // Obtener datos de los formularios
    const handleChange = ({ target }) => {
        console.log(target)
        setDatos({
            ...datos,
            [target.name]: target.value
        })
    }

    // Validacion de formularios
   

    const handleSubmit = (e) => {
        e.preventDefault();

        if (marca.trim() === '' || year.trim() === '' || plan.trim() === '') {
            setError(true);
            return
        }
        setError(false);

        // una base de 2000
        let result = 2000;    

        // obtener diferencia de year
        const diferencia = getYear(year )
        console.log(diferencia);

        // por cada year al que restar un 3%
        result -= ((diferencia * 3) * result) / 100;
        console.log(result)

        // europeo 30%
        // americano 15%
        // asiatico 5%

        result = calcularMarca(marca) * result;
        console.log(result)

        // calcula de plna si es basico 20% o completo 50%


        const incrementoPlan = calcularPlan(plan);
        result =  parseFloat(incrementoPlan * result ).toFixed(2);
        console.log(result)

        setCargando(true);

        setTimeout(() => {
            setCargando(false);
            setResumen({
                cotizacion: result,
                datos
            })
        }, 3000);


        setDatos({
            marca: '',
            year: '',
            plan: ''
        })
    }
    

    return (
        <form onSubmit={handleSubmit}>

            {error ? <Error className="animate__animated animate__bounceIn">Ha ocurrido un error, Todos los campos son obligatorios</Error> : null}

            <Campo>
                <Label>Marca</Label>
                <Select
                    name="marca"
                    value={marca}
                    onChange={handleChange}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="americano">-- Americano --</option>
                    <option value="europeo">-- Europeo --</option>
                    <option value="asiatico">-- Asiatico --</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Año</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={handleChange}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Plan</Label>
                <InputRadio
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={plan === "basico"}
                    onChange={handleChange}
                />Basico
                <InputRadio
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan === "completo"}
                    onChange={handleChange}
                />Completo
            </Campo>



            <Button type="submit">Cotizar</Button>



        </form>
    )
}

Form.propTypes = {
    setResumen: PropTypes.func.isRequired,
    setCargando: PropTypes.func.isRequired
}