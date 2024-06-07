import React from 'react'

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
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <br />
        <li class="nav-item">
          <a class="nav-link" href="#">Search</a>
        </li>
        <br />
        <li class="nav-item">
          <a class="nav-link" href="#">Delete</a>
        </li>
        <br />
        <li class="nav-item">
          <a class="nav-link">View all employees</a>
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