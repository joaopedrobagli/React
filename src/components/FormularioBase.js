import React, { useState } from 'react';

function FormularioBase() {
    const [resultado, setResultado] = useState(0);
    const [base, setBase] = useState(0);
    const [expoente, setExpoente] = useState(0);

    const calcularExponenciacao = () => {

        const resultado = Math.pow(Number(base), Number(expoente));
        setResultado(resultado);
        setBase(""); 
        setExpoente("");
    }

    return (
        <div>
            <h3>Calcular Exponenciação</h3>
            <input 
                type="number" 
                placeholder="Informe a base:" 
                value={base} 
                onChange={(e) => setBase(e.target.value)} 
            />
            <input 
                type="number" 
                placeholder="Informe o expoente:" 
                value={expoente} 
                onChange={(e) => setExpoente(e.target.value)} 
            />
            <button onClick={calcularExponenciacao}>Calcular</button>
            <p>O resultado é: {resultado.toFixed(2)}</p>
        </div>
    );
}

export default FormularioBase;
