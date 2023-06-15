import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useLocation } from 'react-router-dom';
import api from "../../services/api";
import "./style.css";

const Product = () => {
    const location = useLocation();
    
    const [product, setProduct] = useState([]);
    const [displayImage, setDisplayImage] = useState(`http://localhost:3000/img/${product.image}`);
    const [activeImage, setActiveImage] = useState('img-mini-1');

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    const response = await api.get(`product/${location.state.id}`);
    setProduct(response.data);
  };

  const changeImage = (thumbnail) => {
    setDisplayImage(thumbnail);
  };

  const clickedImage = (id) => {
  setActiveImage(id);
};

const [quantidade, handleQuantidade] = useState(1);

const setQuantidade = (input) => {
  let valor = quantidade;
  if (input === 'remove') {
    valor <= 1 ? (valor = 1) : valor--;
  } else if (input === 'add') {
    valor++;
  }
  setQuantidade(valor);
};

<input
  id="input-quantidade"
  type="text"
  value={quantidade}
  onChange={(event) => setQuantidade(event.target.value)}
/>


  return (
    <>
      <Header />
      <div id="produto">
        <section id="img-produto">
          <div id="produto-mini">
            <img
              alt="Pequeno 1"
              src={`http://localhost:3000/img/${product.image}`}
              onClick={() => {
                changeImage(`http://localhost:3000/img/${product.image}`);
                clickedImage("img-mini-1");
              }}
              id="img-mini-1"
            />
            <img
              alt="Pequeno 2"
              src="http://localhost:3000/img/double.png"
              onClick={() => {
                changeImage("http://localhost:3000/img/double.png");
                clickedImage("http://localhost:3000/img-mini-2");
              }}
              id="img-mini-2"
            />
            <img
              alt="Pequeno 3"
              src="http://localhost:3000/img/american pale ale.png"
              onClick={() => {
                changeImage("http://localhost:3000/img/american pale ale.png");
                clickedImage("http://localhost:3000/img-mini-3");
              }}
              id="img-mini-3"
            />
          </div>
          <img alt="Imagem principal" src={`http://localhost:3000/img/${product.image}`} id="display" />
        </section>
        <section id="info-produto">
          <h1>{product.name}</h1>
          <h2>{product.type}</h2>
          <p>{product.description}</p>
          {product.type === "1" ? (
            <table id="info-tabela">
              <tr>
                <th>% de álcool</th>
                <th>IBU</th>
                <th>Tipo de copo</th>
              </tr>
              <tr>
                <td>{product.abv}</td>
                <td>{product.ibu}</td>
                <td>{product.typeGlass}</td>
              </tr>
            </table>
          ) : null}
          <hr />
          <div id="rating">
            <img src="http://localhost:3000/img/star-active.png" alt="star 1" id="rating-1" />
            <img src="http://localhost:3000/img/star.png" alt="star 2" id="rating-2" />
            <img src="http://localhost:3000/img/star.png" alt="star 3" id="rating-3" />
            <img src="http://localhost:3000/img/star.png" alt="star 4" id="rating-4" />
            <img src="http://localhost:3000/img/star.png" alt="star 5" id="rating-5" />
          </div>
          <h3 id="valorTotal">R${product.price}</h3>
          <section id="compra">
            <div className="btn-quantidade" id="remover" onClick={() => setQuantidade('remove')}>
            </div>
            <input id="input-quantidade" type="text" value="1" />
            <div className="btn-quantidade" id="adicionar" onClick={() => setQuantidade('add')}>
              +
            </div>
            <button>COMPRAR</button>
          </section>
            <>
              <Link to={`http://localhost:3000/img/product/update/${product.id}`} class="action-button edit">
                Editar Produto
              </Link>
              <form action={`http://localhost:3000/img/product/${product.id}?_method=DELETE`} method="POST">
                <button type="submit" class="action-button delete">
                  Remover Produto
                </button>
              </form>
            </>
        </section>
      </div>

      <section id="comentarios">
        <h2 className="subtitulo">COMENTÁRIOS</h2>
        <hr className="divisao" />
        <section className="comentario">
          <h3>Nome Sobrenome</h3>
          <div className="rating-user">
            <img src="http://localhost:3000/img/star.png" />
            <img src="http://localhost:3000/img/star.png" />
            <img src="http://localhost:3000/img/star.png" />
            <img src="http://localhost:3000/img/star.png" />
            <img src="http://localhost:3000/img/star.png" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec laoreet fermentum mollis. In nisi tellus,
            tristique eget nisl at, tristique posuere turpis.
            Quisque eleifend velit quis vestibulum sodales. Donec
            porta metus non malesuada aliquet.
          </p>
          <div className="rating-comentario">
            <img alt="thumbs up" src="http://localhost:3000/img/like-active.png" />
            <div class="likes">1</div>
            <img alt="thumbs down" src="http://localhost:3000/img/dislike.png" />
            <div class="dislikes"></div>
          </div>
          <h3>Nome Sobrenome</h3>
          <div class="rating-user">
            <img src="http://localhost:3000/img/star.png" />
            <img src="http://localhost:3000/img/star.png" />
            <img src="http://localhost:3000/img/star.png" />
            <img src="http://localhost:3000/img/star.png" />
            <img src="http://localhost:3000/img/star.png" />
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div class="rating-comentario">
            <img alt="thumbs up" src="http://localhost:3000/img/like.png" />
            <div class="likes"></div>
            <img alt="thumbs down" src="http://localhost:3000/img/dislike-active.png" />
            <div class="dislikes">1</div>
          </div>
          <h3>Nome Sobrenome</h3>
          <div class="rating-user">
            <img src="http://localhost:3000/img/star.png" />
            <img src="http://localhost:3000/img/star.png" />
            <img src="http://localhost:3000/img/star.png" />
            <img src="http://localhost:3000/img/star.png" />
            <img src="http://localhost:3000/img/star.png" />
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div class="rating-comentario">
            <img alt="thumbs up" src="http://localhost:3000/img/like.png" />
            <div class="likes"></div>
            <img alt="thumbs down" src="http://localhost:3000/img/dislike.png" />
            <div class="dislikes"></div>
          </div>
        </section>
      </section>

      <section id="recomendacao">
        <h2 class="subtitulo">QUEM VIU ESSE PRODUTO TAMBÉM VIU</h2>
        <hr class="divisao" />
        <ul class="produtos__container">
          {Array.from({ length: 4 }, (item, index) => {
            const iRandom = Math.floor(Math.random() * product.length);
            return (
              <li class="produto__container">
                <Link to={`http://localhost:3000/product/${product.id}`} class="link__produto">
                  <div class="produto__img">
                    <img class="foto" src={`http://localhost:3000/img/${product.image}`} alt="banner" />
                    <div class="icone">
                      <Link to="#"><img class="icone" src="http://localhost:3000/img/sacola.png" alt="banner" /></Link>
                    </div>
                  </div>
                  <div class="produto__conteudo">
                    <p class="produto__nome">{product.name}</p>
                    <p class="produto__descricao">{product.description}</p>
                    <p class="produto__valor">{product.price}</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Product;