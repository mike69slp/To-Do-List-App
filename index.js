function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }        
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  
  const removeTodo = index => {
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  return(
    <div className="container rounded-3 border border-2 border-dark my-5 bg-white">
      <div>
        <h1 className="h1">To Do List</h1> 
        <TodoForm addTodo={addTodo} />
      </div>

      <hr />

      <div className="row rounded bg-white">
        <div className="col-12"> 
          <ul className="list-group">
          {todos.map((todo, i) => (
            <Todo index={i} key={i} todo={todo} remove={removeTodo} />
          ))}
          </ul>
        </div> 
      </div> 
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);