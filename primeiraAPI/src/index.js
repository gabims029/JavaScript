//Importa módulo express
const express = require("express");

//Defineuma classe para organizar a lógica da aplicação
class AppController {
  constructor() {
    //Cria uma nova instância do express dentro da classe
    this.express = express();
    //Chama o método middlewares para configurar os middlewares
    this.middlewares();
    //Chama o método routes para definir as rotas da API
    this.routes();
  }
  middlewares() {
    //Permitir que a aplicação recaba dados em formato JSON nas requisições
    this.express.use(express.json());
  }
  //Define as rotas da nossa API
  routes() {
    const users =[];

    this.express.post("/users",(req,res)=>{
      const {id,nome,email,senha} = req.body
      users.push({id,nome,email,senha});
      res.status(200).send({message:"Usuário cadastrado com sucesso"});
    });
   
    this.express.post("/auth",(req,res)=>{
      const {email,senha} = req.body
      const user = users.find(user => user.email == email && user.senha == senha);
      if(user){
        res.status(200).send({message: "Usuário encontrado"});
      }
      else{
        res.status(400).send({message: "Usuário NÃO encontrado"});
      }
    });

    this.express.get("/users/:id",(req,res)=>{
      const {id} = req.params;
      const user = users.find(user => user.id == id);
      if(user){
        res.status(200).send(user);
      }
      else{
        res.status(400).send({message: "Usuário não encontrado"});
      }
    });




    //Define uma rota GET para o caminho health
    this.express.get("/health/", (req, res)=>{
      res.send({ status: "OK" });
    });//Essa rota é usada para verificar se a API estoa OK
  }
}
//Exportando a instância de Express configurada, para que seja acessada em outros arquivos
module.exports = new AppController().express;
