# Folha de respostas

## Javascript Questão 2:

### a) No import da api do google maps no index.html, para que servem as tags async e defer?
R: Defer informa ao navegador que ele deve continuar trabalhando com a página, carrega o script “em segundo plano” e, em seguida, executa o script quando for carregado.
   Async atributo significa que um script é completamente independente, ou seja,  se tivermos vários scripts async, eles podem ser executados em qualquer ordem. O que quer que carregue primeiro é executado primeiro.

### b) Para que serve o parâmetro &callback=initMap na url da api do google maps?
R: Esse callback serve para ele executar, em resposta, outra função que pra ele é atribuída pela initMap, que serve para randerizar o mapa do Google Maps conforme está configurado na função initMap, da página index.js

### c) O que acontece quando removemos o parâmetro &callback=initMap da url da api do google maps? Explique o porque.
R: O carregamento assíncrono melhora os tempos de carregamento. Uma função callback tem a opção de função de escuta e isso possibilita que a função tenha uma resposta mais eficaz no quesito de tempo de resposta.

### d) Descreva pelo menos uma forma de como podemos fazer com que a aplicação funcione corretamente mesmo sem este parâmetro.
R: Para carregar o mapa sem um callback, remover o async defer e em seguida chamar função initMap no evento de carregamento.

### e) Explique para que servem as seguintes tags do index.html: 
  ` 
  <meta name="theme-color" content="">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">`

R: Eles servem para caso o usuário acesse o site pelo navegador no celular, ele possa instalar no aparelho iOS ele vai ter a barra com a cor preta.

### f) Está aplicação pode ser considerada um PWA? Em caso negativo, explique o que falta para que seja.
R: Não, porque mesmo havendo a chamada do arquivo manifest, o arquivo não existe no diretório.


## Angular Questão 4:

### a) Para que serve o método ngOnInit, quais são os outros métodos do Angular lifecycle hooks e para que servem?
R:

### b) Neste projeto, estamos usando os componentes gráficos da versão 4 da biblioteca gráfica do Ionic. Nesta versão, os componentes são Web Components. Explique o que são Web Components e explique quais são as vantagens deles.
R: 

### c) Para que serve a tag ngFor do angular?
R:


### d) O que o codigo abaixo representa no arquivo list.page.ts?
`legends: Array<string> = []`
R

### e) Como funciona a api Events do Ionic? Para que serve?
R: 

### f) O que é flexbox? Para que servem as tags ion-grid, ion-row, ion-col? Quais as vantagens em utilizálas?
R: 

## Angular Questão 6:

### a) Quais foram os problemas que você identificou?
R:

### b) Ordene os problemas por ordem de criticidade, ou seja, liste todos os problemas encontrados na ordem de quais deveriam ser corrigidos primeiro em um cenário onde devessemos priorizar as correções.
R:

### c) Justifique a ordem proposta no item anterior em termos de impacto para os usuários e dificuldade para corrigir o problema.
R: 

### d) Para que servem os comandos async e await, encontrados na função presentLoading do arquivo home.page.ts?
R:

### e) Quais as vantagens de utilizar async/await em códigos javascript/typescript?
R:

### f) Explique para que serve a seguinte lib encontrada no arquivo home.page.ts import * as _ from 'lodash';
R:
