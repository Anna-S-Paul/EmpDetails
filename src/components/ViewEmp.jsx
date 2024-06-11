import React, { useEffect, useState } from 'react'
import NavEmp from './NavEmp'
import axios from 'axios'

const ViewEmp = () => {
  const [data, changeData] = useState([])
  const fetchData = () => {
    axios.get("http://localhost:8081/viewall").then(
      (response) => {
        changeData(response.data)
      }
    ).catch().finally()
  }
  useEffect(() => {fetchData()}, [])
  return (
    <div>
      <NavEmp />
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
                    (value, index) => {
                      return <tr>
                        <td>{value.empid}</td>
                        <td>{value.empname}</td>
                        <td>{value.designation}</td>
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