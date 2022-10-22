# desafio-backend-lemon

# Descrição

Nem todos os clientes que desejam fazer parte da Lemon podem ser aceitos no momento. Seja por razões regulatórias ou porque não vale a pena para o cliente ou para a Lemon ter essa empresa como cliente. No processo de aquisição de clientes, fazemos a checagem de elegibilidade da mesma, através dos dados contidos na conta de luz do cliente. Caso a empresa não seja elegível, precisamos explicitar os motivos para tal. Caso ela seja elegível, precisamos calcular também a projeção da quantidade de CO2 que ela deixaria de emitir caso usasse energia limpa. 

Pensando na problemática foi desenvolvido uma api para verificar a elegibilidade ou não do cliente e garantir as informações de calculo de consumo!

### Pré-requisitos

NPM
Node.js

### Pacotes utilizados

1. cors para liberação de acesso
2. jest para testes unitários
3. yup para validação de valores json
4. swagger-ui-expresspara criação da página visual de descrição e teste da API
5. yamljs para leitura do arquivo yaml de configuração do Swagger
6. nodemon para iniciar a aplicação com reinício automático
7. eslint para configuração do ESLint

### Arquitetura utilizada

```
/__tests__ testes unitários ou de integração
/controllers arquivo para controlar a route e conectar-se com a lógica da aplicação com tratativas
domain/services arquivos que contém lógica de serviço da aplicação
infra/http configuraçaõ de dados inicial para nosso request com swagger
infra/helpers definição de documentação swagger para http
main/config/enum definição de valores utilizados em cada situação
main/middlewares arquivo para validar erros e evitar quebrar a aplicação
main/routes configuramos as rotas utilizadas dentro da api
presentation/validator validação de dados
```

### Comandos para aplicação

yarn  ou npm

```
test,
test:coverage,
dev,
lint,
docker,
```

### Configuração ambiente local

1 - Dentro da pasta criada no ambiente local execute o comando abaixo

git clone https://github.com/AdrielModollo/desafio-lemon.git

2- Instale depedências 

- yarn install ou npm install

3 - Inicie a aplicação

- yarn dev ou npm run dev

4 - Inicialmente a api foi configurada na porta 3333, por isso utilize o caminho: localhost:3333 para acessar!

5 - Utilize a rota configurada http://localhost:3333/elegibility com os parâmetros esperados json:

```
{
  "numeroDoDocumento": "14041737706",
  "tipoDeConexao": "bifasica",
  "classeDeConsumo": "comercial",
  "modalidadeTarifaria": "convencional",
  "historicoDeConsumo": [
    3878, 
    9760,
    5976, 
    2797, 
    2481, 
    5731, 
    7538, 
    4392, 
    7859, 
    4160, 
    6941, 
    4597  
  ]
}
```

6 - Você também pode realizar o procedimento através da route de swagger: localhost:3333/api-docs

### Como testar online?

1°Acesse o link hospedado na aws: http://18.231.195.79:3333/api-docs/

2° Na route "elebility" preencha as informações do json

Exemplo:

```
{
  "numeroDoDocumento": "14041737706",
  "tipoDeConexao": "bifasica",
  "classeDeConsumo": "comercial",
  "modalidadeTarifaria": "convencional",
  "historicoDeConsumo": [
    3878, 
    9760,
    5976, 
    2797, 
    2481, 
    5731, 
    7538, 
    4392, 
    7859, 
    4160, 
    6941, 
    4597  
  ]
}

```

3° Caso o cliente obtiver sucesso, retorná algo como:

![img](https://i.ibb.co/VBmbrM4/teste-realizado.png)
