import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useLocation } from 'react-router-dom'
import api from "../../services/api";
import "./style.css";

const product = () => {
    const location = useLocation()

    const [product, setProduct] = useState()

	useEffect(() => {
		loadProduct()
	}, [])

	const loadProduct = async () => {
		const response = await api.get(`product/${location.state.id}`)
		setProduct(response.data)
	}

    return(
        <>
        <Header />
{/* 
            {product ? (
                <>
                			<div id="produto">
                            <section id="img-produto">
                                <div id="produto-mini">
                                    <img alt="Pequeno 1" src="/img/<%= product.image %>"
                                        onclick="changeImage('/img/<%= product.image %>'); clickedImage('img-mini-1')"
                                        id="img-mini-1" />
                                    <img alt="Pequeno 2" src="/img/double.png"
                                        onclick="changeImage('/img/double.png'); clickedImage('img-mini-2')" id="img-mini-2" />
                                    <img alt="Pequeno 3" src="/img/american pale ale.png"
                                        onclick="changeImage('/img/american pale ale.png'); clickedImage('img-mini-3')"
                                        id="img-mini-3" />
                                </div>
                                <img alt="Imagem principal" src="/img/<%= product.image %>" id="display" />
                            </section>
                            <section id="info-produto">
                                <h1>
                                    {product.name}
                                </h1>
                                    {product.type}

                                    {product.type=='1' ? () : null}
                                <h2>
                                    {product.quantity} ML
                                </h2>
                                <p>
                                    {product.description}
                                </p>
                                if {product.type=='1' ? (
                                    <table id="info-tabela">
                                            <tr>
                                                <th>% de álcool</th>
                                                <th>IBU</th>
                                                <th>Tipo de copo</th>
                                            </tr>
                                            <tr>
                                                <td>
                                                    product.ABV 
                                                </td>
                                                <td>
                                                    product.IBU 
                                                </td>
                                                <td>
                                                    product.typeGlass
                                                </td>
                                            </tr>
                                        </table>
                                    ) : null}  
                                 
                                
                                        <hr />
                                        <div id="rating">
                                            <img src="/img/star-active.png" alt="star 1" id="rating-1" />
                                            <img src="/img/star.png" alt="star 2" id="rating-2" />
                                            <img src="/img/star.png" alt="star 3" id="rating-3" />
                                            <img src="/img/star.png" alt="star 4" id="rating-4" />
                                            <img src="/img/star.png" alt="star 5" id="rating-5" />
                                        </div>
                                        <h3 id="valorTotal">R${product.price}
                                        </h3>
                                        <section id="compra">
                                            <div class="btn-quantidade" id="remover" onclick="setQuantidade('remove')">
                                                -
                                            </div>
                                            <input id="input-quantidade" type="text" value="1" />
                                            <div class="btn-quantidade" id="adicionar" onclick="setQuantidade('add')">
                                                +
                                            </div>
                                            <button>COMPRAR</button>
                                        </section>
                                        if (req.session.username=='Admin' ){ 
                                            <a href="/product/update/<%= product.id %>" class="action-button edit">Editar
                                                Produto</a>
                                            <form action="/product/<%= product.id %>?_method=DELETE" method="POST"
                                                style="display: inline-flex">
                                                <button type="submit" class="action-button delete">
                                                    Remover Produto
                                                </button>
                                            </form>
                                             } 
                            </section>
                        </div>
            
            
                        <section id="comentarios">
                            <h2 class="subtitulo">COMENTÁRIOS</h2>
                            <hr class="divisao" />
                            <section class="comentario">
                                <h3>Nome Sobrenome</h3>
                                <div class="rating-user">
                                    <img src="/img/star.png" />
                                    <img src="/img/star.png" />
                                    <img src="/img/star.png" />
                                    <img src="/img/star.png" />
                                    <img src="/img/star.png" />
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Donec laoreet fermentum mollis. In nisi tellus,
                                    tristique eget nisl at, tristique posuere turpis.
                                    Quisque eleifend velit quis vestibulum sodales. Donec
                                    porta metus non malesuada aliquet.
                                </p>
                                <div class="rating-comentario">
                                    <img alt="thumbs up" src="/img/like-active.png" />
                                    <div class="likes">1</div>
                                    <img alt="thumbs down" src="/img/dislike.png" />
                                    <div class="dislikes"></div>
                                </div>
                                <h3>Nome Sobrenome</h3>
                                <div class="rating-user">
                                    <img src="/img/star.png" />
                                    <img src="/img/star.png" />
                                    <img src="/img/star.png" />
                                    <img src="/img/star.png" />
                                    <img src="/img/star.png" />
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <div class="rating-comentario">
                                    <img alt="thumbs up" src="/img/like.png" />
                                    <div class="likes"></div>
                                    <img alt="thumbs down" src="/img/dislike-active.png" />
                                    <div class="dislikes">1</div>
                                </div>
                                <h3>Nome Sobrenome</h3>
                                <div class="rating-user">
                                    <img src="/img/star.png" />
                                    <img src="/img/star.png" />
                                    <img src="/img/star.png" />
                                    <img src="/img/star.png" />
                                    <img src="/img/star.png" />
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <div class="rating-comentario">
                                    <img alt="thumbs up" src="/img/like.png" />
                                    <div class="likes"></div>
                                    <img alt="thumbs down" src="/img/dislike.png" />
                                    <div class="dislikes"></div>
                                </div>
                            </section>
                        </section>
            
                        <section id="recomendacao">
                            <h2 class="subtitulo">QUEM VIU ESSE PRODUTO TAMBÉM VIU</h2>
                            <hr class="divisao" />
            
                            <ul class="produtos__container">
                                 for(let i=0; i<=3; i++) { 
                                     const iRandom=Math.floor(Math.random() * product.length) 
                                        <li class="produto__container">
                                            <a href="/product/<%= product.id%>" class="link__produto">
                                                <div class="produto__img">
                                                    <img class="foto" src="/img/<%= product.image %>" alt="banner" />
                                                    <div class="icone">
                                                        <a href="#"><img class="icone" src="/img/sacola.png" alt="banner" /></a>
                                                    </div>
                                                </div>
                                                <div class="produto__conteudo">
                                                    <p class="produto__nome">
                                                        product.name 
                                                    </p>
                                                    <p class="produto__descricao">
                                                        product.type 
                                                    </p>
                                                    <p class="produto__valor">
                                                         product.price
                                                    </p>
                                                </div>
                                            </a>
                                        </li>
                                         }
                            </ul>
                        </section>
                        </>
            ) : null}

 */}
            <Footer />
        </>
    );
};

export default product;