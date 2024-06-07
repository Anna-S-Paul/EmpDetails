import React from 'react'
import NavEmp from './NavEmp'

const ViewEmp = () => {
  return (
    <div>
        <NavEmp/>
        <div className="cointainer">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <table class="table">
  <thead>
    <tr>
      <th scope="col">Emp ID</th>
      <th scope="col">Emp Name</th>
      <th scope="col">Designation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>101</td>
      <td>Omana</td>
      <td>Manager</td>
    </tr>
    <tr>
      <td>2908</td>
      <td>Thom</td>
      <td>Intern</td>
    </tr>
    <tr>
      <td>278</td>
      <td>Ammu</td>
      <td>Manager</td>
    </tr>
    <tr>
      <td>6574</td>
      <td>Anu</td>
      <td>Intern</td>
    </tr>
    <tr>
      <td>2456</td>
      <td>Elina</td>
      <td>Trainee</td>
    </tr>
  </tbody>
</table>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewEmp