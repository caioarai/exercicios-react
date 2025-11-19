import './App.css';
import CarDetails from './components/CarDetails';

function App() {
  const car = [
    {
      id: 1,
      model: 'SUV',
      color: 'Preto',
      price: 170000,
    },
    {
      id: 2,
      model: 'Esportivo',
      color: 'Branco',
      price: 250000,
    },
    {
      id: 3,
      model: 'Sedan',
      color: 'Azul',
      price: 110000,
    },
  ];
  return (
    <>
      <h1 className="titulo">Detalhes do carro:</h1>
      <div>
        {car.map(({ id, model, color, price }) => (
          <CarDetails key={id} model={model} color={color} price={price} />
        ))}
      </div>
    </>
  );
}

export default App;
