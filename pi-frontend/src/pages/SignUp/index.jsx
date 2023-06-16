import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import api from "../../services/api";
import Input from "../../components/Input";
import "./style.css";

const SignUp = () => {
  const {register, handleSubmit, setValue, setFocus} = useForm();
  const onSubmit = (e) => {
    console.log(e)
  }

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    // console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json()).then(data => {
        console.log(data);
        setValue('address', data.logradouro);
        setValue('city', data.localidade);
        setValue('district', data.bairro);
        setValue('state', data.uf);
        setFocus('number')
    }) 
}
 


  return (
    <>
      <Header />
      <section className="section__cadastro">
        <div className="cadastro">
          <div className="cadastro__titulo">
            <img src="http://localhost:3000/img/login_cadastro.svg" alt="Cadastro" />
            <h3>DADOS PESSOAIS</h3>
          </div>

          <div className="cadastro__estapa">
            <p className="cadastro__circuloamarelo">1</p>
            <p className="cadastro__circulocinza">2</p>
            <p className="cadastro__circulocinza">3</p>
          </div>
        </div>

        <form className="form" method='post' action='/signUp' onSubmit={handleSubmit(onSubmit)}>
          <div className="teste">
            <input
              type="nome"
              placeholder="Nome"
              id="nome"
              name="name"
            />
            <input
              type="sobrenome"
              placeholder="Sobrenome"
              id="sobrenome"
              name="lastname"
            />
          </div>
          <div className="teste">
            <input
              type="dataNascimento"
              placeholder="Data de Nascimento | 00/00/0000"
              id="dataNascimento"
              name="birthday"
            />
            <input
              type="genero"
              placeholder="Gênero | ex: Feminino"
              id="genero"
              name="genre"
            />
          </div>
          <div className="teste">
            <input
              type="CPF"
              placeholder="CPF | 000.000.000-00"
              id="CPF"
              name="cpf"
            />
            <input
              type="telefoneContato"
              placeholder="Telefone | (00) 00000-0000"
              id="telefoneContato"
              name="phone"
            />
          </div>
          <span className="form__erro">Mensagem de erro</span>
        </form>
      </section>

     
        <div className="cadastro">
          <div className="cadastro__titulo">
            <img src="http://localhost:3000/img/cadeado.svg" alt="Login" />
            <h3>DADOS DE LOGIN</h3>
          </div>

          <div className="cadastro__estapa">
            <p className="cadastro__circulocinza">1</p>
            <p className="cadastro__circuloamarelo">2</p>
            <p className="cadastro__circulocinza">3</p>
          </div>
        </div>
        <form className="form" method='post' action='/signUp' onSubmit={handleSubmit(onSubmit)}>
            <div className="teste">
            <input t
            ype="email"
             placeholder="E-mail" 
             id="email" 
             name="email" />

            <input
                type="emailConfirmar"
                placeholder="Confirme seu e-mail"
            />
            </div>
            <div className="teste">

            <input
             type="password" 
             placeholder="Senha" 
             id="senha"
              name="password" />

            <input
                type="password"
                placeholder="Confirme sua senha"
            />
            </div>
      </form>
      <section className="section__cadastro" style={{ marginBottom: "4.5rem" }}>
        <div className="cadastro">
          <div className="cadastro__titulo">
            <img src="http://localhost:3000/img/casa.svg" alt="Endereço" />
            <h3>DADOS DE ENDEREÇO</h3>
          </div>

          <div className="cadastro__estapa">
            <p className="cadastro__circulocinza">1</p>
            <p className="cadastro__circulocinza">2</p>
            <p className="cadastro__circuloamarelo">3</p>
          </div>
        </div>
        <form className="form-endereço" method='post' action='/signUp' onSubmit={handleSubmit(onSubmit)}>
            <input
                type="cep"
                placeholder="CEP | 00000-000"
                {...register("cep")}
                onBlur={checkCEP}
            />
            <div className="teste">

                <input
                    id="cidade"
                    type="cidade"
                    placeholder="Cidade"
                    {...register("city")}
                    name="city" 
                />

                <input
                    id="state"
                    type="estado"
                    placeholder="Estado"
                    {...register("state")}
                    name="state" 
                />    

            </div>
            <div className="teste">
                
            <input
                id="endereco" 
                type="endereço" 
                placeholder="Endereço" 
                {...register("address")}
             />

            <input 
                type="complemento" 
                placeholder="Complemento" 
                name="complement"
             />
            </div>

            <div className="teste">
                <input 
                    type="numero" 
                    placeholder="Número" 
                    {...register("number")}
                />

                <input id="bairro" 
                    type="bairro" 
                    placeholder="Bairro" 
                    {...register("district")}
                />
            </div>
        </form>
        <div className="teste">
          <button type="submit" className="cadastro__botao" onClick={handleSubmit}>
            CRIAR CONTA
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default SignUp;