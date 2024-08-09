import React, { useState } from 'react';

const FormularioCalculator = () => {
 
  const [radius, setRadius] = useState('');
  const [area, setArea] = useState(null);

  
  const calculator = (e) => {
    setRadius(e.target.value);
  };

  
  const calc = (e) => {
    e.preventDefault(); 
    const r = parseFloat(radius); 
    if (!isNaN(r) && r >= 0) {
      const calculatedArea = Math.PI * r * r; 
      setArea(calculatedArea);
    } else {
      setArea('insira um valor válido');
    }
  };

  return (
    <div>
      <h1>Calculadora de Área do Círculo</h1>

      <form onSubmit={calc}>
        
        <label>
          Raio:
          <input 
            type="number" 
            value={radius} 
            onChange={calculator} 
            min="0" 
            step="any"
            placeholder="Digite o valor do raio"
          />
        </label>
        <button type="submit">Calcular</button>
      </form>
      {area !== null && (
        <div>

          <h2>Área do Círculo:</h2>
          
          <p>{area}</p>
        </div>
      )}
    </div>
  );
};

export default FormularioCalculator;