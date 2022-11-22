const React = require('react')
const Def = require('../default')

function index (data) {
  let todosFormatted = data.todos.map((todo) => {
    return (
      <div className="col-sm-6">
        <h2>
          <a href={`/todos/${todo.id}`}>
          {todo.name}
          </a>
        </h2>
        <p clasName="text-center">
          {todo.cuisines}
        </p>
        <img src={todo.pic} alt={todo.name} />
        <p clasName="text-center">
          Located in {todo.city}, {todo.state}
        </p>
      </div>
    )
  })
  
  return (
    <Def>
        <main>
            <h1>Todo List</h1>
            <div className="row">
              {todosFormatted}
            </div>
        </main>
    </Def>
  )
}

  
module.exports = index
