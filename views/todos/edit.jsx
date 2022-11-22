const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
          <main>
            <h1>Edit Todo</h1>
            <form method="POST" action={`/todos/${data.id}?_method=PUT`}>
                <div className="row">
                    <div className="form-group col-sm-6">
                        <label htmlFor="name">Todo Name</label>
                        <input className="form-control" id="name" name="name" value={data.todos.name} required />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="pic">Todo Picture</label>
                        <input className="form-control" id="pic" name="pic" />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="city">City</label>
                        <input className="form-control" id="city" name="city" />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="state">State</label>
                        <input className="form-control" id="state" name="state" />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className="form-control" id="cuisines" name="cuisines" required />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add Todo" />
                </div>
            </form>


          </main>
        </Def>
    )
}
router.get('/:id/edit', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!todos[id]) {
        res.render('error404')
    }
    else {
      res.render('todos/edit', { todo: todos[id] })
    }
  })
  
  
module.exports = edit_form
