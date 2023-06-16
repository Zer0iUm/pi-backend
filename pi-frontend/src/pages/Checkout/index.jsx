import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./style.css";

const checkout = () => {
  return (
    <>
      <Header />
      <main>
        <div className="pagamento">
          <img
            className="img--carteira"
            src="http://localhost:3000/img/carteira.svg"
            alt="carteira--pagamento"
          />
          <p>PAGAMENTO</p>
        </div>

        <hr className="linha--pagamento" />

        <div className="corpo">
          <div className="caixa--1">
            <div className="titulo--endereco">
              <p>ENDEREÇO DA ENTREGA</p>
            </div>

            <div className="container--dados">
              <div className="dados--cliente">
                <p className="nome--cpf">
                  Paula Silva <br />
                  000.000.000-00
                </p>
                <br />
                <p className="endereco">
                  Rua dos Bobos, Nº 000 <br /> Bairro Travessa 1 <br />
                  Cidade-ES <br />
                  CEP 00000-000
                </p>
                <button className="dados--cadastrais">
                  EDITAR DADOS CADASTRAIS
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="metodo--pagamento">
              <p>MÉTODO DE PAGAMENTO</p>
            </div>

            <div className="forma--pagamento">
              <div className="titulo--metodo--pagamento">
                <img
                  className="img--cartao"
                  src="http://localhost:3000/img/cartao.svg"
                  alt="imagem cartão"
                />
                <h2 className="titulo--cartao">Cartão de crédito</h2>
              </div>

              <hr className="linha--metodo" />

              <form id="form" className="formulario" action="/" method="get">
                <div className="div--form">
                  <label for="nome--cartao">Nome do cartão</label>
                  <input
                    type="text"
                    id="nome--cartao"
                    name="nome--completo"
                    placeholder="ex: Paula Silva"
                  />
                </div>

                <div className="div--form">
                  <label for="numero--cartao">
                    Numero do cartão de crédito
                  </label>
                  <input
                    type="text"
                    id="numero--cartao"
                    name="numero--cartao--completo"
                    placeholder="0000 000000 00000"
                  />
                </div>

                <div className="div--form">
                  <label for="validade--cartao">Validade do cartão</label>
                  <input
                    type="text"
                    id="validade--cartao"
                    name="validade--card"
                    placeholder="00/00"
                  />
                </div>

                <div className="div--form">
                  <label for="cod--cartao">Código de segurança</label>
                  <input
                    type="text"
                    id="cod--cartao"
                    name="cod--seguranca"
                    placeholder="CVV"
                  />
                </div>

                <div className="botao">
                  <button type="submit" className="confirmar--cartao">
                    CONFIRMAR CARTÃO
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="finalizar--compra">
          <div className="titulo--compra">
            <p>VALOR FINAL DA COMPRA</p>
          </div>

          <div className="valor--final">
            <div className="subtotal">
              <p>
                <strong>SUBTOTAL</strong> <br /> (X produtos)
              </p>
              <p>R$ 00,00</p>
            </div>
            <br />
            <div className="frete">
              <p>
                <strong>FRETE</strong>
              </p>
              <p>R$ 00,00</p>
            </div>
            <hr className="linha--compra" />

            <div className="total">
              <p>
                <strong>TOTAL</strong>
              </p>
              <p>R$ 00,00</p>
            </div>
            <div className="botao--compra">
              <button className="confirmar--compra">CONFIRMAR A COMPRA</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default checkout;
