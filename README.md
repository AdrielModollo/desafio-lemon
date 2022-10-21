# desafio-backend-lemon


### Como testar?

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
