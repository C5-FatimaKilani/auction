import axios from 'axios'
import React from 'react'
import { setAuctions, addNewAuction} from "../../redux/reducers/auction"
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom";
import products, { setProducts } from '../../redux/reducers/products';

const ProductPage = () => {
  const [auction, setAuction] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();

const {auctions, token} = useSelector((state)=> {
  return{
    auctions:state.auctions.auctions,
    token: state.auth.token,
  }
  
})

  const getAuctions= async(id)=> {
await axios.get(`http://localhost:5000/auction/${id}`)
.then((result)=>{
  dispatch(setAuctions(result.data.result))
})
.catch((error) => {
  console.log(error);
});
  };

  const addAuction = async(id) => {
await axios.post(`http://localhost:5000/auction/${id}`,
{
  price,
},
{
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
.then((result) => {
  console.log(result);
  dispatch(
    addNewAuction({
      price: result.data.result,
      id: result.data.result.insertId,
      user_name: result.data.user_name,
    })
  );
})
.catch((error) => {
  console.log(error);
});
  }

useEffect(() => {
 axios.get(`http://localhost:5000/products/${id}`)
 .then((result) => {
  dispatch(setProducts(result.data.result));
})
.catch((err) => {
  console.log(err);
});

getAuctions(id);



}, [])


   return (
    <div>
{products.length?(products.map((product)=>{
  return(
    <div>
      <strong>{product.productName}</strong>
      <img src={product.image}/>
      <textarea placeholder="Add Auction ..."
                      onChange={(e) => {
                        setAuctions(e.target.value);
                      }}/>

<button
                      
                      onClick={() => {
                        addNewAuction(auction.id);
                        setClicked(!clicked);
                      }}
                    >
                      Add
                    </button>

    </div>
  )
})):(<></>)}
    </div>
  )
}

export default ProductPage