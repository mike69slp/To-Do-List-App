// user input - includes validation
function TodoForm({addTodo}){
  const [value,setValue] = React.useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <div className="row">
      <div className="col-8">
        <input type="text" className="py-3 form-control shadow" value={value} placeholder="Add a To Do..." onChange={e => setValue(e.target.value)} /> 
      </div>
      <div className="col-2">
        <button onClick={handleSubmit} className="mt-2 btn btn-dark">Add To Do</button>
      </div>
    </div>
  )
}