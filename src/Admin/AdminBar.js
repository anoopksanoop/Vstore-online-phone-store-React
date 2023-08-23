import './Admin.css'
import React from 'react'
import { Button,} from 'react-bootstrap';
import { useNavigate} from 'react-router-dom';


const AdminBar = () => {
    const navigate = useNavigate();
  return (
   
    <div className='top'>
        <div className='admin'>
            <h2 className="ms-2 text-dark">ADMIN </h2>

           <Button
              onClick={() => navigate("/admin/products")}>
              Products
            </Button>
            <Button style={{marginTop:"5px"}}
              onClick={() => navigate("/Admin/Users")}>
              users List
            </Button>

            </div>
    </div>
  )
}

export default AdminBar