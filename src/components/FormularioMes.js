import React, { useState } from 'react';

function FormularioMes() {
    const [dias, setDias] = useState('');
    const [resultado, setResultado] = useState({ horas: 0, diasRestantes: 0, minutos: 0 });

    const converterTempo = () => {
        
        if (dias >= 0) {
            
            const totalDias = Number(dias);
            const totalHoras = totalDias * 24;
            const totalMinutos = totalHoras * 60;
            const diasRestantes = Math.floor(totalHoras / 24);
            const horas = totalHoras % 24;
            const minutos = totalMinutos % 60;

            setResultado({ horas, diasRestantes, minutos });
        } else {
            setResultado({ horas: 0, diasRestantes: 0, minutos: 0 }); 
        }
    }

    return (
        <div>
            <h3>Conversor de Dias</h3>
            <input 
                type="number" 
                placeholder="Informe o valor em dias:" 
                value={dias} 
                onChange={(e) => setDias(e.target.value)} 
            />
            <button onClick={converterTempo}>Converter</button>
            {resultado.diasRestantes !== 0 && (
                <div>
                    <p>Dias: {resultado.diasRestantes}</p>
                    <p>Horas: {resultado.horas}</p>
                    <p>Minutos: {resultado.minutos}</p>
                </div>
            )}
        </div>
    );
}

export default FormularioMes;
