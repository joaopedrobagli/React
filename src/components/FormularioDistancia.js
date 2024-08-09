import React, { useState } from 'react';

function FormularioDistancia() {
    const [distancia, setDistancia] = useState('');
    const [tempo, setTempo] = useState('');
    const [velocidade, setVelocidade] = useState(null);

    const calcularVelocidade = () => {
        if (distancia > 0 && tempo > 0) {
            const resultado = Number(distancia) / Number(tempo);
            setVelocidade(resultado);
        } else {
            setVelocidade(null); 
        }
    }

    return (
        <div>
            <h3>Calculadora de Velocidade Média</h3>
            <input 
                type="number" 
                placeholder="Informe a distância:" 
                value={distancia} 
                onChange={(e) => setDistancia(e.target.value)} 
            />
            <input 
                type="number" 
                placeholder="Informe o tempo (em horas):" 
                value={tempo} 
                onChange={(e) => setTempo(e.target.value)} 
            />
            <button onClick={calcularVelocidade}>Calcular Velocidade</button>
            {velocidade !== null && (
                <p>A velocidade média é: {velocidade.toFixed(2)} km/h</p>
            )}
        </div>
    );
}

export default FormularioDistancia;
