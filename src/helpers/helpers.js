export const getYear = (year) => {
    return new Date().getFullYear() - year;
}

export const calcularMarca = (marca) => {
    let increment;

    switch(marca){
        case 'europeo':
            increment = 1.30;
            break
        case 'americano':
            increment = 1.15;
            break
        case 'asiatico':
            increment = 1.05;
            break

        default:
            break;
    }

    return increment;
}

export const calcularPlan = (plan) => {
    return (plan === 'basico' ? 1.20 : 1.50);
}

export const firstMayus = ( text )=> { 
    return text.charAt(0).toUpperCase() + text.slice(1)
}