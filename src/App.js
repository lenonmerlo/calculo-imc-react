import React, { useState } from 'react';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularIMC = () => {
    if (altura && peso) {
      const alturaMetros = altura / 100;
      const imc = (peso / (alturaMetros * alturaMetros)).toFixed(2);
      setResultado(imc);
    }
  };

  const classificarIMC = (imc) => {
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc >= 18.5 && imc <= 24.9) return 'Peso normal';
    if (imc >= 25 && imc <= 29.9) return 'Sobrepeso';
    if (imc >= 30 && imc <= 34.9) return 'Obesidade grau I';
    if (imc >= 35 && imc <= 39.9) return 'Obesidade grau II';
    return 'Obesidade grau III';
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Calculadora de IMC</h1>
      <div>
        <input
          type="number"
          placeholder="Altura (cm)"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Peso (kg)"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
      </div>
      <button onClick={calcularIMC}>Calcular IMC</button>
      {resultado && (
        <div>
          <h2>Seu IMC: {resultado}</h2>
          <h3>Classificação: {classificarIMC(resultado)}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
