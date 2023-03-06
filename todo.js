function Todo({todo, index, remove}) {
    function handle() {
        remove(index);
    }

    //return <div className="todo" onClick={handle}>{todo.text} (-)</div>
    return (
        <li className="my-3 py-3 shadow list-group-item">
            <div className="row">
                <div className="col-6">
                    <span className="h4">{todo.text}</span>
                </div>
                <div className="col-4">
                    <button className="btn btn-dark" onClick={handle}>Delete</button>
                </div>                  
            </div>    
        </li>
    )
}
