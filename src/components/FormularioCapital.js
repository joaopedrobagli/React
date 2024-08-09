import React, { useState } from 'react';

function FormularioCapital() {
    const [capital, setCapital] = useState('');
    const [taxa, setTaxa] = useState('');
    const [periodo, setPeriodo] = useState('');
    const [jurosSimples, setJurosSimples] = useState(null);

    const calcularJuros = () => {
        if (capital > 0 && taxa >= 0 && periodo > 0) {
            const taxaDecimal = Number(taxa) / 100;
            
            const resultado = Number(capital) * taxaDecimal * Number(periodo);
            setJurosSimples(resultado);
        } else {
            setJurosSimples(null); 
        }
    }

    return (
        <div>
            <h3>Calculadora de Juros Simples</h3>
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
            <button onClick={calcularJuros}>Calcular Juros</button>
            {jurosSimples !== null && (
                <p>Os juros são: {jurosSimples.toFixed(2)}</p>
            )}
        </div>
    );
}

export default FormularioCapital;
