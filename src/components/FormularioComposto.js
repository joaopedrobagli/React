import React, { useState } from 'react';

function FormularioComposto() {
    const [capital, setCapital] = useState('');
    const [taxa, setTaxa] = useState('');
    const [periodo, setPeriodo] = useState('');
    const [montante, setMontante] = useState(null);

    const calcularMontante = () => {
        
        if (capital > 0 && taxa >= 0 && periodo > 0) {
            const taxaDecimal = Number(taxa) / 100;
            const resultado = Number(capital) * Math.pow(1 + taxaDecimal, Number(periodo));
            setMontante(resultado);
        } else {
            setMontante(null);
        }
    }

    return (
        <div>
            <h3>Calculadora de Juros Compostos</h3>
            <input 
                type="number" 
                placeholder="Informe o capital:" 
                value={capital} 
                onChange={(e) => setCapital(e.target.value)} 
            />
            <input 
                type="number" 
                placeholder="Informe a taxa de juros (%):" 
                value={taxa} 
                onChange={(e) => setTaxa(e.target.value)} 
            />
            <input 
                type="number" 
                placeholder="Informe o período:" 
                value={periodo} 
                onChange={(e) => setPeriodo(e.target.value)} 
            />
            <button onClick={calcularMontante}>Calcular Montante</button>
            {montante !== null && (
                <p>O montante é: {montante.toFixed(2)}</p>
            )}
        </div>
    );
}

export default FormularioComposto;
