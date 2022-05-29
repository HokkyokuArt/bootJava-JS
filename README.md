![logo_TIAcademy](https://user-images.githubusercontent.com/83440836/168492026-0c1f96c4-7128-4a32-8299-3c992922f19a.png)<h1 align="center"> Bootcamp Java - Curso TI Academy </h1> 
<h2 align="center">JS</h2>

<br>

<h2>Sobre</h2>

Autor: Jean Artico

Descrição: Exercícios e desafios referente ao conteúdo de JavaScript do boot camp java da TI Academy.

<br>

<h2>Desafios</h2>

## • Desafio 1 - Painel de login:

Descrição: Ao digitar os dados de usuário e clicar no botão 'ENTRAR', o algoritmo verifica se o nome de usuário e a senha coincidem com dados de login pré cadastrados. Embora o algoritmo não faça ligação com um servidor externo, ele simula uma requisição e aguarda uma resposta para só então autorizar ou barrar a entrada do usuário no painel de controle (conforme imagem). Caso os dados de login estiverem corretos, redireciona para o painel de controle (Desafio 2)

![usuario_ou_senha_incorreta](https://user-images.githubusercontent.com/83440836/170887148-0e523037-ceeb-4b07-950d-211726856df1.jpg)

<br> 

## • Desafio 2 - Painel de controle:

Descrição: No menu, ao clicar em algum item, algoritmo gera dinamicamente um formulário que apresenta respectivamente Clientes, Produtos ou Pedidos. Em cada formulário, tem um botão 'X' para fechar o formulário. Ao clicar em outro item do menu, fecha o formulário aberto e abre o novo.

![painel_de_controle](https://user-images.githubusercontent.com/83440836/170888513-24650a83-30f6-46b5-acbb-0aff99953f22.jpg)

### Clientes:
Descrição: Ao clicar em 'Clientes', apresenta alguns clientes pré cadastrados. 
Há dois botões (roxos) para navegar pelos registros dos clientes.
Ao clicar em 'Novo', é gerado um novo id permitindo cadastrar um novo cliente na data atual (conforme imagem), e ao clicar em 'Salvar', esse registro é criado.

![form_clientes](https://user-images.githubusercontent.com/83440836/170888078-a61173e2-9cbd-461e-a407-d9284c81ac3a.jpg)

### Produtos:
Descrição: Semelhante ao formulário de clientes, ao clicar em 'Produtos', há dois botões para navegação dos registros, botão 'Novo' para cadastro de outro produto e o botão 'Salvar' para de fato salvar o cadastro (conforme imagem).

![form_produtos](https://user-images.githubusercontent.com/83440836/170888101-bc07be02-2bd1-460c-8491-40802af3b1f1.jpg)

### Pedidos:

Descrição: Ao clicar em 'Pedidos', deve-se preencher o campo com o código do cliente e ao clicar no proximo campo, carrega o respectivo nome do cliente com aquele ID.
Deve-se preencher o campo ID em 'Localizar produto' e ao clicar no proximo campo, carrega o respectivo nome e preço do produto com aquele ID. Deve-se selecionar a quantidade desejada daquele produto e ao clicar no botão 'Lançar no pedido', o item é adicionado na lista logo abaixo. 

Não poderá adicionar o produto se: ele não for encontrado; a quantidade inserida for inválida ou menor que 1 (0 ou números negativos);  a quantidade inserida for maior que a quantidade em estoque; esse item já tiver sido adicionado na lista. 

A coluna 'Sub total' calcula o preço que será gasto naquele produto. O total do valor do pedido aparece em vermelho e atualiza conforme novos itens forem adicionados (conforme imagem).  

![form_pedidos](https://user-images.githubusercontent.com/83440836/170888473-5b181bd8-ad2c-434f-bd0f-236d84ff85b3.jpg)

<br>

<h2 align=center>:)</h2>
