import React, { useState } from 'react';

function FormularioIMC() {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null);

    const calcularIMC = () => {
        
        if (peso > 0 && altura > 0) {
            const resultado = Number(peso) / (Number(altura) ** 2);
            setImc(resultado);
        } else {
            setImc(null);
        }
    }

    return (
        <div>
            <h3>Calculadora de IMC</h3>
            <input 
                type="number" 
                placeholder="Informe o peso em kg:" 
                value={peso} 
                onChange={(e) => setPeso(e.target.value)} 
            />
            <input 
                type="number" 
                placeholder="Informe a altura em metros:" 
                value={altura} 
                onChange={(e) => setAltura(e.target.value)} 
            />
            <button onClick={calcularIMC}>Calcular IMC</button>
            {imc !== null && (
                <p>O IMC é: {imc.toFixed(2)}</p>
            )}
        </div>
    );
}

export default FormularioIMC;
