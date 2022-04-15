import React from 'react'
import {Link} from 'react-router-dom'


function AdminProducts() {
    return (
        <div>
            <div className="mt-4">
                <Link to="/AddProducts" className="btn btn-success ml-auto m-2">Add Product</Link>
            </div>
            <table className="table table-bordered mt-5 mb-5">
                <thead>
                    <tr>
                        <th scope="col">Cateogory</th>
                        <th scope="col">Name</th>
                        <th scope="col">Volume</th>
                        <th scope="col">Price</th>
                        <th scope="col">Image</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Chocolate</th>
                        <td>Tora Tora</td>
                        <td>500ml</td>
                        <td>299</td>
                        <td>Image</td>
                    </tr>
                </tbody>
            </table>


        </div>
    )
}

export default AdminProducts