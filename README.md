# Projeto Final {reprograma} | Bianca Trindade
# duoChat: um novo idioma de forma divertida! 🦉💡

<p align="center">
    <img width="250" src="https://user-images.githubusercontent.com/109122922/207765261-0a9be8a5-ae59-4f15-a838-078c2e6b5aba.png" alt="Logo duoChat">
</p>

O projeto **duoChat** desenvolvido por **Bianca Trindade** é uma API que realiza um CRUD e armazena os dados no banco de dados MongoAtlas.

<br>

## **A {reprograma}** 

<br>

<p align="center">
    <img width="300" src="https://user-images.githubusercontent.com/109122922/207765814-7970ee64-9d4a-4353-9694-614f3f310b4d.jpg" alt="Logo Reprograma">
</p>

A **{reprograma}** é uma iniciativa de impacto social que foca em ensinar programação para mulheres cis e trans que não têm recursos e/ou oportunidades para aprender a programar.


<br>

## 💬 **Objetivo do projeto e problema encontrado**

Como uma fã do Duolingo - aplicativo com foco em aprendizado de idioma onde usuários podem praticar vocabulário, gramática, pronúncia e escuta usando o método de repetição espaçada - sinto que aprendo muito fazendo os exercícios leitura e pronúncia, mas sinto que não desenvolvo a conversação e escrita no idioma que estou aprendendo.

Por isso, pensei como solução a criação de uma aplicação que te conecta com outras usuárias que estão no Duolingo com foco em treinar a conversação e escrita. Assim, você pode escolher duas formas de conexão:

1 - Se conectar com nativas daquele idioma que você está aprendendo, onde elas farão a correção de sua gramática e te darão dicas do idioma; 

2 - Se conectar com outras usuárias no mesmo nível que você para treinar o idioma e, juntas, avançarem nos estudos.

<br>

### ✔️ **Esse projeto para a Reprograma é capaz de:**

- C - Criar uma nova usuária, país e idioma;
- R - Listar todas as usuárias, países e idiomas existentes;
- U - Atualizar os dados das usuárias, países e idiomas;
- D - Deletar uma usuária, país e idioma;
- Filtrar uma usuária, país e idioma por ID; 
- Autenticar a usuária através de dados do login (e-mail e senha);
- Armazenar os dados da usuária, país e idioma em um banco de dados.

<br>

### 🛣️ **Rotas e Retornos** 

<br>

| Método         | Rota           | Retorno                      | Status       |
| :---           |     :---       |     :---                     | :---         | 
**Users**
| GET     | /all           | Lista todas as usuárias      | 200 - OK      |
| GET     | /:id           | Filtra usuária por ID        | 200 - OK      |
| GET     | /              | Filtra usuária por username  | 200 - OK      |
| POST    | /login         | Faz a autenticação do Login  | 200 - OK      |
| POST    | /              | Adiciona uma nova usuária    | 201 - CREATED |
| PATCH   | /:id           | Atualiza os dados da usuária | 200 - OK      |
| DELETE  | /:id           | Deleta uma usuária           | 200 - OK      |
**Languages**
| GET     | /all           | Lista todos os idiomas       | 200 - OK      |
| GET     | /:id           | Filtra idioma por ID         | 200 - OK      |
| GET     | /              | Filtra idioma por nível      | 200 - OK      |
| POST    | /              | Adiciona um novo idioma      | 201 - CREATED |
| PATCH   | /:id           | Atualiza os dados do idioma  | 200 - OK      |
| DELETE  | /:id           | Deleta um idioma             | 200 - OK      |
**Countries**
| GET     | /all           | Lista todos os países        | 200 - OK      |
| GET     | /:id           | Filtra país por ID           | 200 - OK      |
| GET     | /              | Filtra país por idioma       | 200 - OK      |
| POST    | /              | Adiciona um novo país        | 201 - CREATED |
| PATCH   | /:id           | Atualiza os dados do país    | 200 - OK      |
| DELETE  | /:id           | Deleta um país               | 200 - OK      |


<br>

### 📚 **Documentação da API**
[Swagger](https://duochat.onrender.com/my-documentation-route/)
 
<br>

### 🏗️ **Outras funcionalidades ainda em desenvolvimento - que não constam nesse projeto no momento:**

A ideia é que a aplicação fosse vinculada ao Duolingo, e a medida em que a pessoa avança no aprendizado, ela crie novas conexões.

<br>

No futuro, essa aplicação terá as seguintes abas:

- **Chat**
    - Ao digitar no chat, a aplicação é capaz de dar sugestões de palavras/sinônimos e fazer correção de palavras escritas incorretamente;
    - Você poderá selecionar uma palavra que não conhece para traduzir e salvá-la na sua listinha de novas palavras;
    - As palavras que você cometer mais de 3 erros de escrita serão adicionadas na categoria de revisão;
    - Outra usuária pode selecionar uma frase enviada e fazer a correção de uma palavra incorreta, explicando o porquê está errado.

<br>


- **Conversa por áudio e/ou vídeo**
    - Você poderá conversar com outra usuária através de chat, chamada de voz ou chamada de vídeo e também é possível criar uma sala de bate-papo com um nativo fazendo a intermediação;

<br>

- **Feed de conteúdo (no formato do Be Real)**
    - Haverá um feed de conteúdo onde você poderá postar momentos de aprendizado e demais situações que desejar;
    - A postagem no Feed é feita através de imagens, você irá tirar uma foto sua no momento que está fazendo aquele postagem e poderá acrescentar uma descrição;
    - Não será possível adicionar filtros nas fotos do feed, porém a usuária poderá colocar stickers divertidos na tela, como cachorrinhos e gatinhos bilingues.

<br>

- **Conexões**
    - Para realizar uma conexão, você precisa estar em dia com as atividades do aplicativo Duolingo, do contrário uma aba de bloqueio aparecerá na sua tela;
    - A conexão com uma nova usuária poderá ocorrer de duas maneiras:
        - **1ª -** Você poderá optar por se conectar com nativas daquele idioma, de forma que ela será sua professora;
        - **2ª -** Você poderá se conectar com outras estudantes do seu nível, de forma que vocês se ajudem para estudar e aprender juntas.
    - Caso opte por se conectar com outras usuárias do seu nível, o DuoChat puxará apenas conexões do Duolingo que estão no seu nível do idioma;
    - A usuária poderá optar por se conectar apenas com outras mulheres ou ambos.

<br>

- **Grupo de estudos**
    - Para o Grupo de estudos, será possível abrir salas de bate-papo com um tema específico (exemplo: aprenda o vocabulário necessário para ir a um supermercado nos países da língua inglesa);
    - Os grupos de estudos poderão ser abertos por todos, tanto as nativas daquele idioma quanto as demais usuárias;
    - Caso consiga parceria com algum serviço de streaming, será possível abrir salas de cinemas com séries e filmes com legenda onde ao assistir seria possível fazer anotações.

<br>

- **Perfil**
    - Para o perfil, será possível definir uma foto, um sobre você, localização, algumas fotos de sua preferência, os tópicos que você gosta de conversar e, caso tenha, o certificado de idioma do Duolingo.

<br>

⚙️ **Requisitos para a criação de um perfil:**

Para ter acesso ao DuoChat você precisa estar em dia com os estudos no Duolingo.

<br>

🎯 **Desafios:**

Nos dias de hoje, existem diversas plataformas de conversação em outros idiomas, porém, como mulher, não me sinto segura para acessá-las. No passado, muitas vezes fui abordada por pessoas que não tinham interesse em melhorar o idioma, e estavam apenas em busca de relacionamento e conversas com conotação sexual.

Por isso, uma plataforma que é uma extensão do Duolingo garante que apenas pessoas que estão ali para aprender poderão se conectar, aumentando a segurança e evitando situações de desconforto.

<br>

🚫 **Denuncias:**

Você também poderá denunciar um usuário que, após a denuncia, passará por uma análise e se comprovado qualquer forma de assédio/racismo/xenofobia/lgbtqia+fobia/machismo/entre outros, será banido de forma permanente não sendo possível a criação de outro perfil.

<br>

## 🫂 **Agradecimentos:**

<br>

Do fundo do meu coração, não há palavras que descreva o quanto sou grata ao que a {reprograma} me proporcionou. 
Aqui criei amizades que levarei para o resto da vida, confiança e uma determinação que não sabia que existia. 
<br>
<br>
Entrei uma sonhadora, que decidiu fazer uma transição de carreira em uma área que não conhecia absolutamente nada. 
<br>
<br>
E saio uma desenvolvedora, sabendo que sou capaz de chegar onde desejar e que tenho um grupo de apoio para todos os desafios que vierem a frente.
<br>
<br>
O conhecimento e a bagagem que adquiri em 4 meses do curso foi fundamental para a criação desse projeto.
<br>
<br>
A {reprograma} tem como objetivo reprogramar o mundo e diminuir a desigualdade de gênero na tecnologia, pra mim, a reprograma foi capaz de reprogramar a minha vida.
<br>
<br>
Agradeço a todas as pessoas envolvidas na iniciativa, a todas as alunas/parceiras da minha turma que me deram o gás necessário para continuar e a minha gata Pantera que, ao ronronar no meu colo em todas as aulas, me deu carinho para codar. 

<br>

<p align="center">
    <img width="400" src="https://i.pinimg.com/originals/bf/fb/42/bffb42a4c2aa6cfab645ea01d8690e4d.gif" alt="Friends Hug">
</p>

<br>


### Esse projeto está em constante atualização, sinta-se a vontade para voltar sempre que desejar!

Obrigada 💕👩🏻‍💻

<br>

<h2> The future
<br>
is female
<br>
<u>coders</u>.
</h2>