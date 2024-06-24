import React, { useEffect, useState } from "react";

function App() {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  //AXIOSg
  // useEffect(() => {
  //   axios.get("https://fakestoreapi.com/products")
  //     .then((response) => {
  //       setProduct(response.data);
  //     })

  const handleSearch = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) =>
        setProduct(
          product.filter((product) => product.price === parseFloat(search))
        )
      );
  //AXIOS
  // const handleSearch = () => {
  //   axios.get("https://fakestoreapi.com/products")
  //     .then((response) => {
  //       setProduct(
  //         response.data.filter((product) => product.price === parseFloat(search))
  //       );
  //     })
  
  };
  return (
    <div>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>search</button>
      </div>
      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>price</td>
            <td>category</td>
          </tr>
        </thead>
        <tbody>
          {product.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
