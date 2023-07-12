use viagens;

db.createCollection("usuarios")
db.createCollection("destinos")


// Ou vc pode inserir diretamente um documento e ele já ira criar a collection
db.usuarios_novo.insertOne({});

// Inserindo o primeiro documento
db.usuarios.insertOne(
    {   
        "nome": "nome",
        "data_nascimento": "1990-10-05",
        "email": "pamela.apolinario.borges@gmail.com",
        "endereco": "Av Manoel Marques de Jesus, 380 - Vila Xavier, Araraquara/SP"
    });

db.usuarios.insertMany([
    {   
        "nome": "Pamela",
        "idade": 30,
        "email": "pamela.apolinario.borges@gmail.com",
        "endereco": "Av Manoel Marques de Jesus, 380 - Vila Xavier, Araraquara/SP"
    },
    {   
        "nome": "Pamela",
        "idade": 31,
        "email": "pamela.apolinario.borges.outra@gmail.com",
        "endereco": "Av Manoel Marques de Jesus, 380 - Vila Xavier, Araraquara/SP"
    },

]);

db.destinos.insertOne({"nome":"Praia do Rosa", "descricao":"LInda praia"})


//Inserindo mais usuarios

// Inserir documentos na coleção "usuarios"
db.usuarios.insertMany([{
    nome: "João",
    idade: 25,
    cidade: "São Paulo",
    estado: "SP",
    endereco: {
      rua: "Avenida Principal",
      numero: 123,
      cidade: "São Paulo",
      estado: "SP"
    }
  }, {
    nome: "Maria",
    idade: 30,
    cidade: "Rio de Janeiro",
    estado: "RJ",
    endereco: {
      rua: "Rua Secundária",
      numero: 456,
      cidade: "Rio de Janeiro",
      estado: "RJ"
    }
},{
    nome: "Carlos",
    idade: 20,
    cidade: "São Paulo",
    estado: "SP",
    endereco: {
      rua: "Rua Principal",
      numero: 789,
      cidade: "São Paulo",
      estado: "SP"
    }
  },{
    nome: "Ana",
    idade: 35,
    cidade: "São Paulo",
    estado: "SP",
    endereco: {
      rua: "Avenida Secundária",
      numero: 1011,
      cidade: "São Paulo",
      estado: "SP"
    }
    }
    ,  
    {
    nome: "Pedro",
    idade: 28,
    cidade: "Belo Horizonte",
    estado: "MG",
    endereco: {
      rua: "Rua Principal",
      numero: 1314,
      cidade: "Belo Horizonte",
      estado: "MG"
    }
  }]);
  


db.usuarios.find({});
db.usuarios.find({"nome": "João"});
db.usuarios.findOne({"nome": "João"});
db.usuarios.findOneAndUpdate({ nome: "João" }, { $set: { idade: 26 } });
db.usuarios.findOneAndDelete({ nome: "João" });
db.usuarios.findAndModify({
    query: { nome: "Pedro" },
    update: { $set: { idade: 26 } }
  });
