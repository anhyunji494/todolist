import TodoCreate from './components/TodoCreate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import { createGlobalStyle } from 'styled-components';
import { TodoProvider } from './TodoContext';

const GlobalStyle = createGlobalStyle`
body{
background: #e9ecef}
`;

const App = () => {
  return (
    <>
      <TodoProvider>
        <GlobalStyle />
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
      </TodoProvider>
    </>
  );
};

export default App;
