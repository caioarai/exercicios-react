import { useReducer } from 'react';
import { useState } from 'react';

const HookUseReducer = () => {
  const initialItems = [
    { id: 1, name: 'Arroz' },
    { id: 2, name: 'Feijão' },
  ];
  const [inputItem, setInputItem] = useState('');

  const itemReducer = (state, action) => {
    switch (action.type) {
      case 'ADD': {
        const newItem = {
          id: Math.random(),
          name: action.payload,
        };

        return [...state, newItem];
      }
      case 'DELETE':
        return state.filter((item) => item.id !== action.id);
      default:
        return state;
    }
  };

  const [items, dispatchItems] = useReducer(itemReducer, initialItems);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatchItems({ type: 'ADD', payload: inputItem });
    setInputItem('');
  };

  const deleteItem = (id) => {
    dispatchItems({ type: 'DELETE', id });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setInputItem(e.target.value)}
          value={inputItem}
        />
        <input type="submit" value="Adicionar" />
      </form>
      <ul>
        {items.map((item) => (
          <li key={item.id} onDoubleClick={() => deleteItem(item.id)}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HookUseReducer;
