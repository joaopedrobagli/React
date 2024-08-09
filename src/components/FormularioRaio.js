import React, { useState } from 'react';

function FormularioRaio() {
    const [resultado, setResultado] = useState(0);
    const [valor1, setValor] = useState(0);

    const calcularPerimetro = () => {
        
        const pi = Math.PI;
        const perimetro = 2 * pi * Number(valor1);
        setResultado(perimetro);
        setValor("");
    }

    return (
        <div>
            <h3>Calcular Perímetro do Círculo</h3>
            <input 
                type="number" 
                placeholder="Informe o raio:" 
                value={valor1} 
                onChange={(e) => setValor(e.target.value)} 
            />
            <button onClick={calcularPerimetro}>Calcular</button>
            <p>O perímetro do círculo é: {resultado.toFixed(2)}</p>
        </div>
    );
}

export default FormularioRaio;
