# MobileNewsApp

## Descrição do Projeto

O **MobileNewsApp** é um aplicativo móvel desenvolvido utilizando o framework **Ionic** com **Angular**. O objetivo do aplicativo é fornecer aos usuários acesso a notícias em tempo real, consumindo dados da **API NewsAPI**. O app oferece funcionalidades de login e registro utilizando o **Firebase**, além de permitir que os usuários marquem suas notícias favoritas. A aplicação também conta com suporte para **notificações push** via **Firebase Cloud Messaging (FCM)**.

Este projeto foi desenvolvido como parte da cadeira de **Código de Alta Performance Mobile**, com o objetivo de demonstrar habilidades no desenvolvimento de aplicativos móveis de alto desempenho.

## Funcionalidades

- **Login e Registro:**
  - O aplicativo permite que os usuários se registrem e façam login utilizando o **Firebase Authentication**.
  - Suporte para login por e-mail/senha e registro de novos usuários.
  
- **Exibição de Notícias:**
  - O app consome dados da **API NewsAPI** para exibir notícias em tempo real.
  - As notícias são organizadas por categorias, como esportes, tecnologia, política, etc.
  
- **Favoritos:**
  - Os usuários podem favoritar notícias, que serão armazenadas e acessadas em uma aba exclusiva.
  
- **Perfil do Usuário:**
  - O app tem uma tela de perfil onde os usuários podem visualizar e editar suas informações, como nome e e-mail.
  
- **Notificações Push:**
  - O app utiliza **Firebase Cloud Messaging (FCM)** para enviar notificações push aos usuários com base em novos artigos ou atualizações importantes.
  
- **Estrutura de Navegação:**
  - O aplicativo possui três abas principais:
    1. **Notícias:** Tela que exibe as últimas notícias com filtros por categoria.
    2. **Favoritos:** Exibe as notícias que o usuário marcou como favoritas.
    3. **Perfil:** Tela com as informações e configurações do usuário.

## Tecnologias Utilizadas

- **Ionic Framework:** Framework para o desenvolvimento de aplicativos móveis híbridos.
- **Angular:** Framework JavaScript utilizado para construir a estrutura do app.
- **NewsAPI:** API para consumir notícias em tempo real.
- **Firebase:**
  - **Firebase Authentication:** Para autenticação de usuários.
  - **Firebase Cloud Messaging (FCM):** Para envio de notificações push.
  - **Firestore (opcional):** Para armazenamento de dados do usuário, como favoritos.
  
## Estrutura do Projeto

A estrutura do projeto é dividida em módulos, cada um responsável por uma parte específica da aplicação:

- **src/app/**
  - **auth:** Módulo responsável pela autenticação de usuários via Firebase.
  - **news:** Módulo que consome a API NewsAPI e exibe as notícias.
  - **favorites:** Módulo que gerencia as notícias favoritas do usuário.
  - **profile:** Módulo responsável pela exibição e edição do perfil do usuário.
  - **notifications:** Módulo para gerenciar as notificações push usando FCM.

## Como Rodar o Projeto

### Pré-requisitos

- **Node.js** instalado.
- **Ionic CLI** instalado.
- Conta no **Firebase** configurada para o projeto.

### Passos para Execução

1. Clone o repositório do projeto.

bash
git clone https://github.com/GabsFerr22/MobileNewsApp.git
cd ionicnewsapp

2. Instale as Dependencias

bash
npm install

### Configure Firebase

- Acesse o Firebase Console.
- Crie um novo projeto ou utilize um já existente.
- Configure o Firebase Authentication e adicione os métodos de login (e-mail/senha).
- Gere as chaves de configuração do Firebase e adicione-as ao arquivo src/environments/environment.ts do projeto.

### Configure NewsAPI

- Registre-se no site NewsAPI para obter uma chave de API.
- Adicione a chave da API no arquivo src/app/services/newsapi.service.ts.

### Rode o projeto

Rode com o codigo ionic serve no bash

### Consideração de desempenho 

- O aplicativo foi projetado para garantir a alta performance em dispositivos móveis, utilizando o Ionic com Angular para uma navegação eficiente.
- As notícias são carregadas de forma assíncrona da NewsAPI, com caching inteligente para evitar requisições repetidas e melhorar a experiência do usuário.
- As notificações são enviadas via Firebase Cloud Messaging (FCM) e podem ser acionadas conforme eventos importantes, como novas notícias ou atualizações.

### Conclusão

O MobileNewsApp foi desenvolvido como parte da cadeira de Código de Alta Performance Mobile, aplicando conceitos de desenvolvimento mobile, consumo de APIs externas, gerenciamento de estado com Firebase e envio de notificações push. O aplicativo oferece uma experiência interativa e rica para os usuários, com funcionalidades como login, favoritos e notificações push.