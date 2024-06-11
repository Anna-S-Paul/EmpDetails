import React, { useState } from 'react'
import NavEmp from './NavEmp'
import axios from 'axios'

const AddEmployee = () => {
    const [data,changeData]=useState(
        {
            "empid":"",
            "empname":"",
            "designation":"",
            "salary":""
        }
    )
    const inputHandler=(event)=>{
        changeData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8081/",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("successfully added")
                } else {
                    alert("error")
                }
            }
        ).catch().finally()
    }
    return (
        <div>
            <NavEmp/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Emp ID:</label>
                                <input type="number" name="empid" id="" className="form-control" value={data.empid} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Emp name:</label>
                                <input type="text" className="form-control" name='empname' onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Designation:</label>
                                <select name="designation" id="" className="form-control" value={data.designation} onChange={inputHandler}>
                                    <option value="s">--select--</option>
                                    <option value="manager">Manager</option>
                                    <option value="hr">HR</option>
                                    <option value="intern">Intern</option>
                                </select>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Salary:</label>
                                <input type="number" name="salary" id="" className="form-control" value={data.salary} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <button className="btn btn-success" onClick={readValue}>Add</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEmployee