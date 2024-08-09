import React, { useState } from 'react';

function FormularioKm() {
    const [quilometros, setQuilometros] = useState(0);
    const [milhas, setMilhas] = useState(0);

    const converterParaMilhas = () => {
        
        const resultado = Number(quilometros) * 0.621371;
        setMilhas(resultado);
        setQuilometros(""); 
    }

    return (
        <div>
            <h3>Converter Quilômetros para Milhas</h3>
            <input 
                type="number" 
                placeholder="Informe o valor em quilômetros:" 
                value={quilometros} 
                onChange={(e) => setQuilometros(e.target.value)} 
            />
            <button onClick={converterParaMilhas}>Converter</button>
            <p>O valor em milhas é: {milhas.toFixed(2)}</p>
        </div>
    );
}

export default FormularioKm;
