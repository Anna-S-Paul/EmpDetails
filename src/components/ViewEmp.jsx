import React, { useState } from 'react'
import NavEmp from './NavEmp'

const ViewEmp = () => {
  const [data,changeData]=useState(
    [
      {"id":101, "Name":"Ann","Designation":"Manager", "salary":1500},
      {"id":102, "Name":"Anna","Designation":"HR", "salary":45670},
      {"id":908, "Name":"Alfiya","Designation":"Manager", "salary":23000},
      {"id":232, "Name":"Aseera","Designation":"Intern", "salary":10000},
      {"id":243, "Name":"Aysha","Designation":"Intern", "salary":10000}
    ]
  )
  return (
    <div>
        <NavEmp/>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <table class="table">
  <thead>
    <tr>
      <th scope="col">Emp ID</th>
      <th scope="col">Emp Name</th>
      <th scope="col">Designation</th>
      <th scope="col">salary</th>
    </tr>
  </thead>
  <tbody>
   {
    data.map(
      (value,index)=>{
        return  <tr>
        <td>{value.id}</td>
        <td>{value.Name}</td>
        <td>{value.Designation}</td>
        <td>{value.salary}</td>
      </tr>
      }
    )
   }
    
  </tbody>
</table>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewEmp