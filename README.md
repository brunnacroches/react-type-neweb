# Getting Started with Create React App


### `npx create-react-app my-app --template=typescript`


### `npm install`

### INSTALAR BIBLIOTECAS DE ESTILIZAÇÃO E ROTEAMENTO 

### react router dom `npm install react-router-dom ` 
- para parametrizar as rotas do projeto para conseguir manipular e fazer com que o usuario transite entre uma pagina e outra.

https://v5.reactrouter.com/web/guides/quick-start

### INSTALAR BIBLIOTECAS DE ESTILIZAÇÃO 

### styled-components `npm install --save styled-components` 
-
https://styled-components.com/
____________________________________________

### styled-system `npm i styled-system styled-components`  
https://styled-system.com/getting-started/
- da algumas funçoes, algumas constantes que a gente consegue customizar e passar parametros 
customizáveis em nossos componentes
____________________________________________

### INSTALAR BIBLIOTECAS DE DESENVOLVIMENTO 
`npm install -D @types/styled-system @types/styled-components @types/react-dom`  
- são tipagens das bibliotecas em TypeScript
-como a gente esta no ambiente em TypeScript  é muito importante essas tipagens pq é muito comum 
a comunidade o pessoal subir o pacote da biblioteca e outro pacote da tipagem para ficar mais leve porque 
nem todo mundo trabalha com TypeScript 
____________________________________________

### CRIANDO AS PASTAS
-PUBLIC
    -index.html
- SRC
 # -ASSETS
    -icons
    -img
#  -COMPONENTES
    -Title
      -index.tsx
      -style.css
#  -CONTAINERS
    -NFTCard
      -index.tsc
      -style.css
#  -PAGES
    -Home
      -index.tsc
      -style.css
#  -TYPES
    -index.d.ts

-global.css
-index.tsx
_______________________________________________________________________________

#  -COMPONENTES
uma parte do código que é utilizado e não tem lógica nenhuma
é como se fosse os dedos da mãos
#  -CONTAINERS
o containers renderiza os componentes
é como se fosse as mãos pq ele junta todos os dedos(componentes)
#  -PAGES
tem controle total da aplicação
requisão para o Back End
#  -TYPES
#  -GLOBAL.CSS / INDEX.TSX


  =====================>>> MUI COMPONENTES <<<=========================

## INSTALAR BIBLIOTECAS DE DESENVOLVIMENTO DO MUI
`npm install @mui/material @emotion/react @emotion/styled`
- salvar nas dependencias do package.json

## USANDO O STYLE-COMPONENTS COMO UM MOTOR DE ESTILIZAÇÃO
`npm install @mui/material @emotion/react @emotion/styled`
- salvar nas dependencias do package.json

## Fonte Roboto
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

## Ícones de fonte
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

# Ícones SVG
// usando npm
`npm install @mui/icons-material`

// usando yarn
`yarn add @mui/icons-material`


  =====================>>> MUI COMPONENTES <<<=========================

_________________________________________________________________________
  =============================>>> <<<=================================
### Explicando o CÓDIGO ==> COMPONENTES <==
 aqui basicamente: 

###  ==> IMPORTAÇÃO <==
  - XXX > importa o react.
  - XXX > importa o slyle dentro desta pasta Components.

###  ==> ARRAY INTERFACE TITLEPROPS <==
  - XXX > cria uma array(interface TitleProps) onde vai ser atribuida as propriedades(text:string).
  - XXX > cira uma constante chamada Title .
  - XXX > instancia dentro da const Title  o <TitleProps>.
  - XXX > a const Title recebe depois da instancia <TitleProps> O react com (FC) Function componente.
  - XXX > e o React.FC vi recebe como propriedade o ({text}).

###  ==> RETURN DO TITLEPROPS <==
  - XXX > retorna o H1 (Titulo) com a classe className="title"
  - XXX   > recebendo como propriedade {text} 

###  ==> EXPORTAÇÃO DO TITLE <==
  - XXX > Depois exporta um componente React do Title que vai ser o <TitleProps>.
  =============================>>> <<<=================================


###  ==> STYLE DO  | XXX | | XXX | XXX | 
  - XXX > Estilizar no (syle.css) o  ==> .xxx <==
  - XXX >   width / height / font-size 


  =============================>>> <<<=================================


