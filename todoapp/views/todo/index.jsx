const React = require('react')
const Def = require('../default')

function index (data) {
    let todoFormatted = data.todo.map((todo) => {
        return (
          <div className="col-sm-6">
            <h2>{todo.name}</h2>
            <p clasName="text-center">
              {todo.cuisines}
            </p>
            <img src={place.pic} alt={todo.name} />
            <p clasName="text-center">
              Located in {todo.city}, {todo.state}
            </p>
          </div>
        )
      })
      return (
        <Def>
            <main>
                <h1>POST-It</h1>
                <div className='row'>
                {todoFormatted}
                </div>
            </main>
        </Def>
    )
    }
  
module.exports = index