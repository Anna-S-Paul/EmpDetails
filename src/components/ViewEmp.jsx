import React, { useState } from 'react'
import NavEmp from './NavEmp'

const ViewEmp = () => {
  const [data,changeData]=useState(
    [
      {"Name":"Ann","Designation":"Manager"},
      {"Name":"Anna","Designation":"HR"},
      {"Name":"Alfiya","Designation":"Manager"},
      {"Name":"Aseera","Designation":"Intern"},
      {"Name":"Aysha","Designation":"Intern"}
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
      <th scope="col">Emp Name</th>
      <th scope="col">Designation</th>
    </tr>
  </thead>
  <tbody>
   {
    data.map(
      (value,index)=>{
        return  <tr>
        <td>{value.Name}</td>
        <td>{value.Designation}</td>
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