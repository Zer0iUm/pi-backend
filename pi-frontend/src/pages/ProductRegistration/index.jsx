import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

import { useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getCookie } from "../../utils";
import api from "../../services/api";

const ProductRegistration = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [productTypeId, setProductTypeId] = useState(1);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState();

  const handleSave = async (e) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("product_type_id", productTypeId);
    formData.append("description", description);
    formData.append("price", price);

    if (selectedImage) formData.append("", selectedImage);

    try {
      await api.post("/product", formData, {
        Headers: { authentication: getCookie("authentication") },
      });

      alert("Produto criado com sucesso!");
      navigate("/homestore");
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <>
      <Header />

      <h1 className="reg-h1">Cadastro de Produtos</h1>
      <form
        action="/product"
        method="POST"
        enctype="multipart/form-data"
        className="reg-form"
      >
        <label className="reg-label" for="name">
          Nome:
        </label>
        <input
          type="text"
          id="name"
          className="reg-name"
          name="name"
          placeholder="Informe o nome do produto."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <label for="product_type_id">Categoria:</label>
        <select
          id="product_type_id"
          name="product_type_id"
          className="reg-select"
          value={productTypeId}
          onChange={(e) => setProductTypeId(e.target.value)}
        >
          <option value="1">Cerveja</option>
          <option value="2">Acessórios</option>
          <option value="3">Kits</option>
        </select>
        <br />

        <label for="description">Descrição:</label>
        <textarea
          id="description"
          className="reg-textarea"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />

        <label className="reg-label" for="price">
          Preço:
        </label>
        <input
          type="number"
          id="price"
          name="price"
          placeholder="Informe o valor do produto."
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />

        <div className="reg-upload-img">
          <label className="reg-label" for="image">
            Imagem:
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={(e) => setSelectedImage(e.target.files[0])}
          />
        </div>

        <br />

        
          <Link 
            className="cadastrar"
            to='/homestore' 
            type="submit" 
            onClick={handleSave}> 
              Cadastrar
          </Link>

      </form>

      <Footer />
    </>
  );
};

export default ProductRegistration;
