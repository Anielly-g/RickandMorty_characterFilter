# Filtro de Personagens do Universo Rick and Morty
## Instruções de Instalação e Execução:

### 1. Instalação do Node.js e npm:

Certifique-se de ter o Node.js instalado em seu sistema. Você pode baixar a versão mais recente do site oficial: [Node.js Downloads](https://nodejs.org/en/download/).

### 2. Opcional: Instalação do Yarn (caso prefira):

Se preferir usar o Yarn, você pode instalá-lo globalmente em seu sistema. Encontre as instruções de instalação no site oficial do Yarn: [Yarn Installation](https://classic.yarnpkg.com/en/docs/install/).

### 3. Iniciando o Servidor de Desenvolvimento:

No diretório do projeto, execute um dos seguintes comandos no terminal:

```bash
npm run dev
# or
yarn dev

```

Abra [http://localhost:3000](http://localhost:3000) com seu navegador para visualizar o resultado.


## Premissas Assumidas:

1. **Utilização de Next.js:**  Foi decidido utilizar Next.js como framework de desenvolvimento devido à sua eficiência na construção de aplicações web, além de oferecer suporte para SSR (Server-Side Rendering) e CSR (Client-Side Rendering), o que é adequado para este projeto.

2. **Comunicação com API Externa:** Assumiu-se que a aplicação se comunicará com a API externa do Rick and Morty para obter os dados necessários dos personagens.

3. **Responsividade do Layout:** Seguir o protótipo fornecido, garantindo que o layout da aplicação seja responsivo para fornecer uma experiência consistente em diferentes dispositivos e tamanhos de tela.


## Decisões de Projeto:

1. **Arquitetura de Componentes:** Optou-se por uma arquitetura de componentes bem estruturada, dividindo a aplicação em componentes reutilizáveis para facilitar a manutenção e escalabilidade do código.

2. **Primeira Página Desenvolvida:** Foi desenvolvida a página principal de listagem dos personagens, onde os cards são exibidos.

3. **Gerenciamento de Estado:** Foi utilizado o Context API do React para o gerenciamento de estado da aplicação, garantindo um fluxo de dados eficiente e compartilhamento de estado entre os componentes conforme necessário.

4. **Paginação de Personagens:** Implementou-se a funcionalidade de paginação para permitir a navegação entre diferentes páginas de personagens, otimizando o carregamento e a visualização dos dados.

5. **Página de Detalhes do Personagem:** Foi desenvolvida a página de detalhes do personagem, para a qual os cards redirecionam ao serem clicados.

6. **Estilização:** Fez-se uso de CSS modularizado para estilizar os componentes de forma coesa e modular, garantindo a responsividade do site, seguindo as diretrizes de design do protótipo.

7. **Adição de elemento:** Foi adicionado o elemento de pesquisa de personagem pelo nome.



## Melhorias Futuras:

1. **Ferramenta de Pesquisa:** A função de pesquisa será ajustada para que o resultado apareça na primeira página, visto que atualmente apenas faz a procura do nome do personagem por página.

2. **Personagens Relacionados:** Também será adicionada na página do personagem uma seção de personagens relacionados, facilitando a navegação entre os personagens dentro do universo de Rick and Morty.







