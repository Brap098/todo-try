const React = require('react')
const Def = require('../default')

function new_form () {
    return (
        <Def>
          <main>
            <h1>Add a New Todo Liste</h1>
            <form method="POST" action="/todo">
                <div className="form-group">
                    <label htmlFor="user">Username</label>
                    <input className="form-control" id="user" name="user" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="catigory">catigory</label>
                    <input className="form-control" id="catigory" name="catigory" />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Todo Title</label>
                    <input className="form-control" id="title" name="title" />
                </div>
                <div className="form-group">
                    <label htmlFor="pic">Todo Pic</label>
                    <input className="form-control" type="url" id="pic" name="pic" />
                </div>
                <div className="form-group">
                    <label htmlFor="list">Todo</label>
                    <input className="form-control" id="list" name="list" />
                </div>
                <input className="btn btn-primary" type="submit" value="Add Todo" />
            </form>

          </main>
        </Def>
    )
}

module.exports = new_form
