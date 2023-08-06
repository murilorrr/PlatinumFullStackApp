# Planium-test Challenge
#### Preview Sketch
<img src="./previewPlanium.png" width="auto" title="Image sketch">

<p align="center">A modern Full Stack Project</p>
<p align="center"><i> "How to ensure accessible healthcare for all?" - Florence Nightingale </i> </p>

<p align="center">
  <a href="#-why">Why</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-contributing">Contributing</a> •
  <a href="https://github.com/murilorrr">About Me</a> •
</p>

## ⚡ Tech Stack:
- Backend:
  - NodeJS;
  - NestJs;
  - UUID;
  - Swagger;

- Frontend:
  - Angular;
  - Material UI;
  - sweet Alert;
  - TypeScript;
and much more...


## 😊 **Why?**
<img src="https://www.planium.io/wordpress/wp-content/uploads/2018/11/logo-Planium-06.svg" width="250" height="100">
**[Especificações para o teste]**

**Observações:**
  - "Plano" dito aqui significa "Plano de Saúde".
  - "Beneficiários" são as pessoas participantes/pagantes de um plano de saúde.


1. Você recebeu duas tabelas em JSON(presente nesse repositório), uma de Planos e outra de Preços.
	- A tabela de plano possui os planos que serão vendidos.
	- A tabela de preço possui o(s) preço(s) para cada plano listado na tabela de planos.


2. Cada plano tem três faixas de preços, sendo estas categorizadas por idade:
	- Pessoas de 0 a 17 anos vão para a faixa1.
	- Pessoas de 18 a 40 anos vão para a faixa2.
	- Pessoas com mais de 40 anos vão para a faixa3.


3. Cada plano pode ter preços variados dependendo da quantidade de pessoas participando do mesmo.
	- Essa variação é representada na tabela de preços pela coluna "minimo_vidas".


4. Com as especificações acima, faça uma API que permita a entrada dos seguintes dados, salvando-os em um Json chamado beneficiarios.json:
    - Quantidade de beneficiários
    - Idade de cada beneficiário
    - Nome de cada beneficiário
    - Registro do plano escolhido (deve ser um dos registros listados na tabela de plano)
      - Caso o usuário liste um registro inexistente, deve mostrar mensagem de erro.


5. Essa API deverá ler a tabela de Plano e a tabela de Preço, e retornar:
    - Preço de cada beneficiário para o plano escolhido, juntamente com a sua idade.
    - O preço total do Plano escolhido (soma do preço de cada beneficiário)
	
6. Ao final, unir todas as informações e salvar em um JSON chamado proposta.json, o mesmo deverá conter todas as informações sobre os beneficiarios, planos e preços.
    - **Observações:**
    Seu **back-end** deverá ser feita utilizando PHP ou Node.js
    Criar um front-end pra consumir essas informações, fique a vontade para utilizar a ferramenta/framework que quiser.

7. Ao término, dê reply no e-mail que você originalmente recebeu com o link do seu repositório no [GitHub](https://github.com/).
  - Tempo total: 5 dias após o envio do teste.


**Good luck and have fun :)**

## 🏃 Getting started

### Pre-requisites

- _Node:_ `version "16.0.0"` or higher.
- _Git:_ `2.25.1` or higher.
- _Docker(Optional):_ `20.10.14` or higher.

Clone the project from Github :

```sh
$ git clone git@github.com:murilorrr/PlatinumFullStackApp.git
$ cd PlatinumFullStackApp
```

### 🐳 Docker Method

If you have docker installed, you can run with:

```sh 
$ docker-compose up
```
and enter localhost:4200

### Default method
```sh 
$ cd back-end/planium-test-nest npm install
$ npm install
$ cd ../../front-end/planium-test-angular npm install
$ npm install
$ npm start into this folders too
```

## API

| Method | Route | Description | Type of Param | Params |
|-------| ------ | ---- | ------ | ---- | 
|GET| /plan       |  Retorn all of plans in fake database    |  |  |
|GET| /beneficiario       |  Retorn all of beneficiarios in database with id  |   Param String   |  id  |
|POST| /beneficiario       |   create new beneficiario   |   Body    |   idade, nome, plano   |
|GET| /proposta       |  Retorn all of propostas in database    |  |  |
|POST| /proposta       |   accept a proposta   |   Body    |  beneficiariosPreco, total, descricaoProposta, accepted, id   |

Exempo de requisição POST para beneficiario: 
```
{
    "beneficiarios": [
        {
            "nome": "John",
            "idade": "32"
        }
    ],
    "plano": 7
}
```

Exempo de requisição POST para Proposta: 
```
{
    "total": "R$ 40",
    "descricaoProposta": "\n    Seu plano custará R$ 40 para um total de 1 pessoa\n    ",
    "accepted": false,
    "beneficiariosPreco": [
        {
            "beneficiario": {
                "nome": "123",
                "idade": "99"
            },
            "preco": "R$ 40"
        }
    ],
    "id": "e9020cc9-0e35-49e8-b22e-0411ee33f768"
}
```

Ou Acesse localhost:3000/swagger-docs-vs para ver a documentação completa da API


## 👣 Next steps
- [ ] Test for at least 90% of the application
- [ ] Improve security with Spring Security and JWT
- [ ] Database Implementation.

## 🤝 **Contributing**

This project is for study purposes too, so send me an email telling me what you are doing and why you are doing it, teach me what you know

All kinds of contributions are very welcome and appreciated!

- ⭐️ Star the project
- 🐛 Find and report issuesapp-agrotis
- 📥 Submit PRs to help solve issues or add features
- ✋ Influence the future of Desafio-Tecnico-Agrotis with feature requests