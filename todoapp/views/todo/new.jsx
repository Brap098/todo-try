const React = require('react')
const Def = require('../default')

function new_form () {
    return (
        <Def>
          <main>
            <h1>Add a New Todo Liste</h1>
            <form method="POST" action="/todo">
                <div>
                    <label htmlFor="user">Username</label>
                    <input id="user" name="user" required/>
                </div>
                <div>
                    <label htmlFor="catigory">catigory</label>
                    <input id="catigory" name="catigory" />
                </div>
                <div>
                    <label htmlFor="title">Todo Title</label>
                    <input id="title" name="title" />
                </div>
                <div>
                    <label htmlFor="pic">Todo Pic</label>
                    <input type="url" id="pic" name="pic" />
                </div>
                <div>
                    <label htmlFor="list">Todo</label>
                    <input id="list" name="list" />
                </div>
                <input type="submit" value="Add Todo" />
            </form>

          </main>
        </Def>
    )
}

module.exports = new_form
