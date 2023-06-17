const bcrypt = require("bcrypt");
const { User } = require("../models");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

const UserController = {
  userLogin: async (req, res) => {
    try {
      const user = await User.findOne({
        where: {
          email: req.body.email,
        },
      }); // encontra o usuário através do e-mail - e retorna o objeto

      if (user && bcrypt.compareSync(req.body.password, user.password)) {
        // compara a senha recebida no body com a senha gravada no banco de dados
        const token = jwt.sign({ id: user.id, email: user.email }, "segredo"); // gera o token do usuário com JWT
        console.log(user.is_admin)
        res.status(200).json({ token, admin: user.is_admin });
        
      } else res.status(400).json({ error: "Usuário ou Senha incorretos!" });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  register: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) res.status(400).json({ error: errors.mapped() }); // ou array()

    try {
      const user = await User.findOne({
        where: {
          email: req.body.email,
        },
      }); // encontra o usuário através do e-mail - e retorna o objeto

      if (!user) {
        let newUser = {
          ...req.body,
        };
        // delete newUser.pwdConfirm // remove propriedade pwdConfirm - porque não é necessário gravar no banco

        const hash = bcrypt.hashSync(newUser.password, 10); // gera o hash da senha
        newUser.password = hash; // salva na propriedade senha

        await User.create(newUser); // cria o registro no banco de dados
        res.status(201).json({ msg: 'Usuário criado com sucesso!' })
      } else res.status(400).json({ error: "Usuário já cadastrado!" });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
};
module.exports = UserController;
