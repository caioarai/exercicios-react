import { useState } from 'react';
import './App.css';
import HookUseReducer from './components/HookUseReducer';
import HookUseMemo from './components/HookUseMemo';
import HookCustomHook from './components/HookCustomHook';

function App() {
  const [number, setNumber] = useState(5);

  return (
    <>
      <HookUseReducer />
      <HookUseMemo number={number} />
      <button onClick={() => setNumber(number + 1)}>Incrementar Número</button>
      <HookCustomHook />
    </>
  );
}

export default App;
