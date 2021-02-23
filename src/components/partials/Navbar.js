import React from 'react'

function Navbar() {
    return(
        <div>
<nav className="navbar navbar-expand-lg navbar-dark bg-primary my-2">
  <a className="navbar-brand" href="#">FOOOT REACT</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarColor01">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home
          <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Leagues</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">National Teams</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Stadiums</a>
      </li>
     
    </ul>

  </div>
</nav>
        </div>
    )
}
export default Navbar