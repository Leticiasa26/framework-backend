"use strict";
/*let nomeDisciplina:string = "Frameworks"

console.log ( nomeDisciplina )

const variavel = 10
const variavelNumber:number = 10
const variavelString:string = "Frameworks"
const variavelBooleano:boolean = true // false
const vetor:number [] = []
const vetorstring:string [] = [ "Strings", "26" ]

vetor.push ( 10 )

// Criando objetos dentro do JS

const pessoa:{ nome:string, idade:number } = {
    idade: 17,
    nome: "Leticia"
}

pessoa.nome = "Cia"

console.log ( pessoa )

// TYPE

type Estudante = {
    nome:string,
    idade:number,
    cpf: string
}

const estudante:Estudante = {
    nome: "Letícia Silva",
    idade: 17,
    cpf: "00000000000"
}

console.log ( estudante )

// Funções no JavaScript

function soma ( a:number, b:number ) : number | undefined {
    return a + b
}

console.log ( `O resultado da soma é: ${soma(10,7)}`)*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = __importDefault(require("mysql2/promise"));
const access = {
    host: "localhost",
    user: 'root',
    password: "",
    database: 'banco1023a',
    port: 3306
};
const conn = promise_1.default.createConnection(access);
conn
    .then((conn) => {
    console.log(" Conectou ");
    const resultado = conn.query(" SELECT * FROM estudantes ");
    resultado
        .then((resposta) => {
        // const dados = resposta [ 0 ]
        // const camposTabela = resposta [ 1 ]
        const [dados, camposTabela] = resposta;
        console.log(dados);
    })
        .catch((error) => {
        if (error.code === " asfd ") {
            console.log(" ERRO : Você deve criar a tabela com o mesmo nome da sua QUERY ");
        }
        else if (error.code === 'ER_PARSE_ERROR') {
            console.log(" ERRO : Você tem um erro de escrita em sua QUERY confira: vírgulas, parenteses e nome de colunas ");
        }
        else {
            console.log(error);
        }
    });
    conn.end()
        .then(() => console.log(" Conexão finalizada "))
        .catch(() => console.log(" Não deu certo finalizar a conexão "))
        .finally(() => console.log(" Executei o finally "));
})
    .catch((erro) => {
    if (erro.code === 'ECONNREFUSED') {
        console.log(" ERRO : ligue o laragon => Conexão Recusada ");
    }
    else if (erro.code === 'ER_BAD_DB_ERROR') {
        console.log(" ERRO: crie um banco de dados com  nome definido na conexão ");
    }
    else if (erro.code === 'ER_ACCESS_DENIED_ERROR') {
        console.log(" ERRO: conferir o usuário e senha definidos na conexão ");
    }
    else {
        console.log(erro);
    }
});
const fastify_1 = __importDefault(require("fastify"));
const app = (0, fastify_1.default)();
app.get('/', async (request, reply) => {
    reply.send(" Fastify Funcionando ");
});
app.listen({ port: 8080 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`app listening at ${address}`);
});
