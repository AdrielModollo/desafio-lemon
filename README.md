# desafio-backend-lemon

# Descrição

Nem todos os clientes que desejam fazer parte da Lemon podem ser aceitos no momento. Seja por razões regulatórias ou porque não vale a pena para o cliente ou para a Lemon ter essa empresa como cliente. No processo de aquisição de clientes, fazemos a checagem de elegibilidade da mesma, através dos dados contidos na conta de luz do cliente. Caso a empresa não seja elegível, precisamos explicitar os motivos para tal. Caso ela seja elegível, precisamos calcular também a projeção da quantidade de CO2 que ela deixaria de emitir caso usasse energia limpa. 

Pensando na problemática foi desenvolvido uma api para verificar a elegibilidade ou não do cliente e garantir as informações de calculo de consumo!

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
