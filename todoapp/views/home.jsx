const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
        
          <main>
              <h1>HOME</h1>
          </main>
        <a href="/todo">
            <button className="btn-primary">todo Page</button>
        </a>
      </Def>
    )
  }
  

module.exports = home
