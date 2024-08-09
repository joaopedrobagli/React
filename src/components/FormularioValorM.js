import React, { useState } from 'react';

function FormularioValorM() {
    const [metros, setMetros] = useState(0);
    const [centimetros, setCentimetros] = useState(0);

    const converterParaCentimetros = () => {
    
        const resultado = Number(metros) * 100;
        setCentimetros(resultado);
        setMetros(""); 
    }

    return (
        <div>
            <h3>Converter Metros para Centímetros</h3>
            <input 
                type="number" 
                placeholder="Informe o valor em metros:" 
                value={metros} 
                onChange={(e) => setMetros(e.target.value)} 
            />
            <button onClick={converterParaCentimetros}>Converter</button>
            <p>O valor em centímetros é: {centimetros.toFixed(2)}</p>
        </div>
    );
}

export default FormularioValorM;
