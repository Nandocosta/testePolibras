import { useEffect, useState } from "react";
import './app.css';
import Product from "./components/Product";

function App() {
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products', {
      method: 'GET',
      headers: {
        'Content-Type' : 'application/json'
      },
    })
    .then((resp) => resp.json())
    .then((data) => {
      setProdutos(data)
    })
    .catch(err => console.log(err))
  },[])

  return (
    <>
      <h1>Lista de produtos</h1>
        <Product produtos={produtos}/>
    </>
  );

}
export default App;
