import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./style.css";

const Home = () => {
  return (
    <>
      <Header />
      <section class="carrossel">
        <div class="swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div>
                <img src="/img/banner goró 1.png" alt="banner" />
              </div>
              <div class="conteudo">
                <p class="conteudo-um">ACESSÓRIOS</p>
                <h2>GORÓ STYLE</h2>
                <p class="conteudo-dois">
                  Chique e confortável! Garanta a camiseta que
                  <br />
                  combina com a sua cerveja favorita.
                </p>
                <Link to="#">VER CAMISETAS</Link>
              </div>
            </div>
            <div class="swiper-slide">
              <div>
                <img src="/img/banner goró 1.png" alt="banner" />
              </div>
              <div class="conteudo">
                <p class="conteudo-um">ACESSÓRIOS</p>
                <h2>GORÓ STYLE</h2>
                <p class="conteudo-dois">
                  Chique e confortável! Garanta a camiseta que
                  <br />
                  combina com a sua cerveja favorita.
                </p>
                <Link to="#">VER CAMISETAS</Link>
              </div>
            </div>
            <div class="swiper-slide">
              <div>
                <img src="/img/banner goró 1.png" alt="banner" />
              </div>
              <div class="conteudo">
                <p class="conteudo-um">ACESSÓRIOS</p>
                <h2>GORÓ STYLE</h2>
                <p class="conteudo-dois">
                  Chique e confortável! Garanta a camiseta que
                  <br />
                  combina com a sua cerveja favorita.
                </p>
                <Link to="../lists/listAcessories/index.html">VER CAMISETAS</Link>
              </div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </section>

      <section class="categoria">
        <h3>CATEGORIAS</h3>
        <div class="categoria__container">
          <Link to="/cervejas" class="categoria__amarelo">
            <img src="/img/Group 4.svg" />
            <h4>CERVEJA</h4>
          </Link>
          <Link to="/listAcessories" class="categoria__preto">
            <img src="/img/Vector.svg" />
            <h4>ACESSÓRIOS</h4>
          </Link>
          <Link to="/Kits" class="categoria__vermelho">
            <img src="/img/Vector_.svg" />
            <h4>KITS</h4>
          </Link>
        </div>
      </section>

      <section class="produtos">
        <h3>TODOS OS PRODUTOS</h3>
        <div class="alignProdutos">
          <ul class="produtos__container">
            {/* 			<% for(let i=0; i<products.length; i++){ %>
						<li class="produto__container">
							<a
								href="/product/<%= products[i].id%>"
								class="link__produto"
							>
								<div class="produto__img">
									<img
										class="foto"
										src="/img/<%= products[i].image %>"
										alt="banner"
									/>
									<div class="icone">
										<a href="#"
											><img
												class="icone"
												src="/img/sacola.png"
												alt="banner"
										/></a>
									</div>
								</div>
								<div class="produto__conteudo">
									<p class="produto__nome">
										<%= products[i].name %>
									</p>
									<p class="produto__descricao">
										<%= products[i].type %>
									</p>
									<p class="produto__valor">
										R$ <%= products[i].price %>
									</p>
								</div>
							</a>
						</li>
					<% } %> */}
          </ul>
        </div>

        <Link class="produtos__botao" to="#">
          VER TODOS OS PRODUTOS
        </Link>
      </section>
      <Footer />
    </>
  );
};

export default Home;
