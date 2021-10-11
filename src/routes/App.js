import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {Layout} from '../containers/Layout';
import Home from '../pages/Home';
import NotFound from  '../pages/NotFound';

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="*" component={NotFound} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

export {App};


/* import React from 'react';
import './App.css';
import { TodoCounter } from '../components/TodoCounter'
import { TodoSearch} from '../components/TodoSearch'
import { TodoList} from '../components/TodoList'
import { TodoItem } from '../components/TodoItem'
import { CreateTodoButton } from '../components/CreateTodoButton'
const todos = [
  { text: 'cortar cebolla', completed: false},
  { text: 'terminar el curso de react', completed: false},
  { text: 'comer la cebolla', completed: false}
]

function App() {
  return (

   <React.Fragment>

    <TodoCounter />

    <TodoSearch />
   
    <TodoList>

     {todos.map(todo => (
      <TodoItem 
      key={todo.text} 
      text={todo.text} 
      completed={todo.completed}
      />
     ))}

    </TodoList>

    <CreateTodoButton />
   
   </React.Fragment>
  );
};
export default App; */
