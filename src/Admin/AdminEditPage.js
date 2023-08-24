
import { footContext } from '../Context';
import { Button,Form } from 'react-bootstrap';
import { useEffect ,useContext,useState} from 'react';
import { useParams,useNavigate } from 'react-router-dom';

const AdminEditPage = () => {
  const { products, setProducts } = useContext(footContext);
  const { id } = useParams();
  const navigate = useNavigate();

  
  const [editedProduct, setEditedProduct] = useState({});

  useEffect(() => {
    const productToEdit = products.find((product) => parseInt(product.id)  === parseInt(id));
    setEditedProduct(productToEdit);
  }, [products, id]);

  
  const handleSubmit = (event) => {
    event.preventDefault();

    
    const editedProductIndex = products.findIndex((product) => product.id === editedProduct.id);

    
    const updatedProducts = [...products];
    updatedProducts[editedProductIndex] = editedProduct;
    setProducts(updatedProducts);

    navigate("/admin/products");
 
    console.log("admin edit");
  };
  return (
    <div>
    <div className="form">
        <h3>Edit Product</h3>
        <Form onSubmit={handleSubmit} className="top">
      <Form.Group controlId="title">
          <Form.Label>Id</Form.Label>
          <Form.Control
            type="text"
            value={editedProduct.id || ""}
            onChange={(e) => setEditedProduct({ ...editedProduct, id: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={editedProduct.model || ""}
            onChange={(e) => setEditedProduct({ ...editedProduct, model: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group controlId="image">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            value={editedProduct.image || ""}
            onChange={(e) => setEditedProduct({ ...editedProduct, image: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            value={editedProduct.decs || ""}
            onChange={(e) => setEditedProduct({ ...editedProduct, decs: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            value={editedProduct.price || 0}
            onChange={(e) => setEditedProduct({ ...editedProduct, price: parseInt(e.target.value) })}
            required
          />
        </Form.Group>
        <Form.Group controlId="qty">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="number"
            value={editedProduct.Qty || 1}
            onChange={(e) => setEditedProduct({ ...editedProduct, Qty: parseInt(e.target.value) })}
            required
          />
        </Form.Group>
        <Button type="submit">Save Submit</Button>
      </Form>
    </div>
    </div>
  )
}


export default AdminEditPage