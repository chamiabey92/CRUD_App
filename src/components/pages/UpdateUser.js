import React, {useState, useEffect} from 'react';
import Layout from '../layouts/Layout';
import axios from 'axios';

const UpdateUser = () => {
    
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [id, setID] = useState(null);

    //get selected user
useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFname(localStorage.getItem('First Name'));
        setLname(localStorage.getItem('Last Name'));
        setEmail(localStorage.getItem('Email'))
}, []);

//update API
const updateAPIData = () => {
    axios.put(`https://64a407bac3b509573b56f27d.mockapi.io/fakeuserData/${id}`, {
        fname,
        lname,
        email
	})
}

    return (
        <Layout>
           <div className="form-container " style={{ minHeight: "90vh" }}>
                <form  >
                    <h4 className="title">UPDATE USER </h4>

                    <div className="mb-3">
                        <input
                            type="fname"
                            autoFocus
                            value={fname}
                            onChange={(e) => setFname(e.target.value)}
                            className="form-control"
                            id="fname"
                            placeholder="Enter First Name "
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="lname"
                            autoFocus
                            value={lname}
                            onChange={(e) => setLname(e.target.value)}
                            className="form-control"
                            id="lname"
                            placeholder="Enter Last Name "
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="email"
                            autoFocus
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            id="email1"
                            placeholder="Enter Your Email "
                            required
                        />
                    </div>              
                   

                    <button type="submit" className="btn btn-primary" onClick={updateAPIData}>
                        UPDATE
                    </button>
                </form>
            </div>
        </Layout>
    )
}

export default UpdateUser