import React, { useContext } from 'react';
import TodoItems from './TodoItem';
import '../App.css';
import { TodosContext } from '../store/todos-context';

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul>
      {todosCtx.items.map((item) => (
        <TodoItems
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
          key={item.id}
          text={item.text}
        />
      ))}
    </ul>
  );
};

export default Todos;
