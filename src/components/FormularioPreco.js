import React, { useState } from 'react';

function FormularioPreco() {
    const [preco, setPreco] = useState('');
    const [desconto, setDesconto] = useState('');
    const [precoAjustado, setPrecoAjustado] = useState(null);

    const calcularDesconto = () => {
        if (preco > 0 && desconto >= 0) {
            const percentualDesconto = Number(desconto) / 100;
            const resultado = Number(preco) * (1 - percentualDesconto);
            setPrecoAjustado(resultado);
        } else {
            setPrecoAjustado(null); 
        }
    }

    return (
        <div>
            <h3>Calculadora de Desconto</h3>
            <input 
                type="number" 
                placeholder="Informe o preço:" 
                value={preco} 
                onChange={(e) => setPreco(e.target.value)} 
            />
            <input 
                type="number" 
                placeholder="Informe o percentual de desconto:" 
                value={desconto} 
                onChange={(e) => setDesconto(e.target.value)} 
            />
            <button onClick={calcularDesconto}>Calcular Preço Ajustado</button>
            {precoAjustado !== null && (
                <p>O preço ajustado é: {precoAjustado.toFixed(2)}</p>
            )}
        </div>
    );
}

export default FormularioPreco;
