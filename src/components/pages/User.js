import React, { useEffect, useState } from 'react';
import Layout from '../layouts/Layout';
import axios from 'axios';
import { Link } from 'react-router-dom';

const User = () => {
    const [APIData, setAPIData] = useState([]);
    
    //set data to local storage
    const setData = (data) => {
        let { id, fname, lname, email } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', fname);
        localStorage.setItem('Last Name', lname);
        localStorage.setItem('Email', email)
    }
//Delete data from API
    const onDelete = (id) => {
        axios.delete(`https://64a407bac3b509573b56f27d.mockapi.io/fakeuserData/${id}`)
            .then(() => {
                axios.get(`https://64a407bac3b509573b56f27d.mockapi.io/fakeuserData`)
                    .then((getData) => {
                        setAPIData(getData.data);
                    })
            })
    }
   //Get remaining data to the UI
    useEffect(() => {
        axios.get(`https://64a407bac3b509573b56f27d.mockapi.io/fakeuserData`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])


    return (
        <Layout>
            <div className="user-container ">
                <h1 className='header1 text-center mb-4'>List of Users</h1>
                <div className='table-container'>
                    <table className="table text-center">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Update</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {APIData.map((data, i) => {
                                return (
                                    <tr key={i}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.fname}</td>
                                        <td>{data.lname}</td>
                                        <td>{data.email}</td>
                                        <td>
                                            <Link to='/update'>
                                                <button className="btn btn-info" onClick={() => setData(data)}>Update</button>
                                            </Link>
                                        </td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => onDelete(data.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
}

export default User