import './App.css';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import TodoBtn from './components/TodoBtn';

function Title(){
  return <h1>Title for React JS by Piyush</h1>
}

function App() {
  return (
    <div className="App">
        <Title />
        <h1>|| Naive Todo APP ||  </h1>        
        <div className='todo-container'>
          <Header title = 'Todoie App' />
          <TodoItem item = 'Mango' />
          <TodoItem item = 'Orange' />
          <TodoItem item = 'Musk Bun' />
          <TodoItem item = 'Green peas'/>
          <TodoItem item = 'Jackfruit' />
          <TodoBtn text = 'Add todo' />
        </div>
    </div>
  );
}

export default App;
