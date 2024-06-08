import React from 'react'
import { Link } from 'react-router-dom'

const NavEmp = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">EMPLOYEE</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <br />
        <li class="nav-item">
          <Link class="nav-link" to="/search">Search</Link>
        </li>
        <br />
        <li class="nav-item">
          <Link class="nav-link" to="/delete">Delete</Link>
        </li>
        <br/>
        <li class="nav-item">
          <Link class="nav-link" to="/viewall">View all employees</Link>
        </li>
        <br />
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavEmp