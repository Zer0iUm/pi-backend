import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

import { useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getCookie } from "../../utils";
import api from "../../services/api"



const ProductRegistration = () => {
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [idProductType, setIdProductType] = useState(1);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState();

  const handleSave = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("product_type_id", idProductType);
    formData.append("description", description);
    formData.append("price", price);

    if (selectedImage) formData.append("", selectedImage);

    try {
      await api.post("/product", formData, {
        Headers: { authentication: getCookie("authentication") },
      });

      alert("Produto criado com sucesso!");
      navigate("/");
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <>
      <Header />

      <h1>Cadastro de Produtos</h1>

{/*       {typeof error !== "undefined" ? (
        <ul>
          {error.map((error) => {
            return <li>{error.msg}</li>;
          })}
        </ul>
      ) : null}
 */}
      <form action="/product" method="POST" enctype="multipart/form-data">
        <label for="name">Nome:</label>
        <input type="text" id="name" name="name" />
        <br />

        <label for="product_type_id">Categoria:</label>
        <select id="product_type_id" name="product_type_id">
          <option value="1">Cerveja</option>
          <option value="2">Acessórios</option>
          <option value="3">Kits</option>
        </select>
        <br />

        <label for="description">Descrição:</label>
        <textarea id="description" name="description"></textarea>
        <br />

        <label for="price">Preço:</label>
        <input type="number" id="price" name="price" />
        <br />

        <label for="image">Imagem:</label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={(e) => setSelectedImage(e.target.files[0])}
        />
        <br />

        <button type="submit" onClick={handleSave}>
          Cadastrar
        </button>
      </form>

      <Footer />
    </>
  );
};

export default ProductRegistration;
