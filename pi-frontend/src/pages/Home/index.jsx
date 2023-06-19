import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import api from "../../services/api";
import Slide from "../../components/slide/Slide";
import styles from "./Home.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../reducer/cartSlice";

const Home = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const adicionarAoCarrinho = (product) => {
    console.log(product);
    dispatch(addToCart(product));
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const response = await api.get("product");
    setProducts(response.data);
  };
  return (
    <>
      <Header />
      <Slide
        banner={`http://localhost:3000/img/banner goró 1.png`}
        banner1={`http://localhost:3000/img/banner goró 1.png`}
        banner2={`http://localhost:3000/img/banner goró 1.png`}
        height="540px"
        miniTitle="ACESSÓRIOS"
        miniTitle1="ACESSÓRIOS"
        miniTitle2="ACESSÓRIOS"
        title="GORÓ STYLE"
        title1="GORÓ STYLE"
        title2="GORÓ STYLE"
        text="Chique e confortável! Garanta a camiseta que combina com a sua cerveja favorita."
        text1="Chique e confortável! Garanta a camiseta que combina com a sua cerveja favorita."
        text2="Chique e confortável! Garanta a camiseta que combina com a sua cerveja favorita."
      />
      <section className={styles.categoria}>
        <h3>CATEGORIAS</h3>
        <div className={styles.categoria__container}>
          <Link
            to="/cervejas"
            className={styles.categoria__amarelo}
            state={{ product_type_id: "1" }}
          >
            <img src="http://localhost:3000/img/Group 4.svg" />
            <h4>CERVEJA</h4>
          </Link>
          <Link
            to="/listacessories"
            className={styles.categoria__preto}
            state={{ product_type_id: "2" }}
          >
            <img src="http://localhost:3000/img/Vector.svg" />
            <h4>ACESSÓRIOS</h4>
          </Link>
          <Link
            to="/kits"
            className={styles.categoria__vermelho}
            state={{ product_type_id: "3" }}
          >
            <img src="http://localhost:3000/img/Vector_.svg" />
            <h4>KITS</h4>
          </Link>
        </div>
      </section>
      <section className={styles.produtos}>
        <h3>TODOS OS PRODUTOS</h3>
        <div className={styles.alignProdutos}>
          <ul className={styles.produtos__container}>
            {products.map((product) => (
              <li className={styles.produto__container}>
                <Link
                  to={"/product"}
                  className={styles.link__produto}
                  state={{ id: product.id }}
                >
                  <div className={styles.produto__img}>
                    <img
                      className={styles.foto}
                      src={`http://localhost:3000/img/${product.image}`}
                      alt="banner"
                    />
                    <div className={styles.icone}>
                      <Link onClick={() => adicionarAoCarrinho(product)}>
                        <img
                          className={styles.icone}
                          src="http://localhost:3000/img/sacola.png"
                          alt="banner"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className={styles.produto__conteudo}>
                    <p className={styles.produto__nome}>{product.name}</p>
                    <p className={styles.produto__descricao}>{product.type}</p>
                    <p className={styles.produto__valor}>R$ {product.price}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Link className={styles.produtos__botao} to="#">
          VER TODOS OS PRODUTOS
        </Link>
      </section>
      <Footer />
    </>
  );
};

export default Home;
