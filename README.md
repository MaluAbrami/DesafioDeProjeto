# Desafio De Projeto
Essse é um desefio de projeto(Classificador de Nível de Herói) proposto pela Dio.

# Sobre o Projeto
Esse projeto foi feito para cumprir com o solicitado durante o BootCamp da GFT na Dio. Porém, realizei algumas complementações próprias que achei legal de acrescentar para utilizar vários conhecimentos adquiridos até agora com o BootCamp e alguns outros conhecimentos aprendidos externamente.

## Solicitado pela Dio no Desafio
### O que deve ser utilizado
- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
### Objetivo
Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:
- Se XP for menor do que 1.000 = Ferro
- Se XP for entre 1.001 e 2.000 = Bronze
- Se XP for entre 2.001 e 5.000 = Prata
- Se XP for entre 5.001 e 7.000 = Ouro
- Se XP for entre 7.001 e 8.000 = Platina
- Se XP for entre 8.001 e 9.000 = Ascendente
- Se XP for entre 9.001 e 10.000= Imortal
- Se XP for maior ou igual a 10.001 = Radiante
### Saída
Ao final deve se exibir uma mensagem: "O Herói de nome **{nome}** está no nível de **{nivel}**"

# Minha Ideia para o Projeto
A minha ideia para tornar o projeto mais legal e dinâmico foi realizar um "joguinho" para poder determinar o nível do herói. 
Basicamente, funciona da seguinte maneira: 
- o herói começa com 0 de XP, no nível Ferro e com 10 vidas
- a cada rodada é lançado um dado de 6 lados e se tirar o número errado o herói ganha menos XP e ainda perde 1 vida
- cada nível tem números do dado necessários e ganhos de XP diferentes, por exemplo no nível Ferro que é o inicial, o único número que o usuário não pode tirar no dado é 6, ou seja, há 5 chances em 6 de conseguir um número bom, no caso de um número bom o ganho de XP é 200, porém se tirar o 6 então ganha apenas 100 de XP e ainda perde 1 vida do herói
- o "jogo" acaba quando o herói perde todas as suas 10 vidas ou caso ele chegue no último nível que seria o Radiante

# Explicação sobre meu código
- Além de todo o solicitado no desafio, eu ainda adicionei algumas ideias próprias para tentar deixar o desafio um pouco mais legal para mim
- Esclarecendo como o código funciona:
    - **Variáveis**
        - ```nomeHeroi``` = armazena o nome do herói assim como foi solicitado no documento do desafio
        - ```experienciaHeroi``` = armazena o XP do herói assim como foi solicitado no documento do desafio
        - ```nivelHeroi``` = armazena o nível em que o herói está. Inicializei como "Ferro", pois é o nível mais baixo(inicial)
        - ```dado``` = armazena um número aleatório entre 1 e 6, a ideia era simular um dado real de 6 lados
        - ```vidaDoHeroi``` = armazena a vida do herói. Atribui 10 para serem 10 vidas iniciais
        - ```rodada``` = armazena o número da rodada. A ideia é que a cada jogada do dado seja 1 rodada diferente, então no final consigo retornar até qual rodada o herói conseguiu chegar
    - **Mensagens para o Usuário**
        - Antes de iniciar o "jogo" é apresentado uma mensagem introdutória, para que o usuário tenha uma ideia de como funciona
        - Logo depois da mensagem introdutória é apresentada uma mensagem com o placar dos níveis, com seus repectivos ganhos de XP e números necessários do dado
        - A cada rodada é apresentado uma mensagem que mostra toda a situação do herói atual(nível, XP, vidas, qual rodada está)
        - A cada rodada também é apresentado qual o número do dado que caiu
        - No final é aprensetando uma mensagem de feedback para mostrar qual foi o nível final do herói, quantas rodadas ele sobreviveu e quanto de XP ele ganhou no total
    - **Estrutura While**
        - o __while__ só irá terminar quando as 10 vidas do herói acabarem ou caso o herói chegue ao nível Radiante, o qual eu garanti que as vidas sejam zeradas para que o while seja encerrado
        - dentro do __while__ eu verifico se o herói já está no nível radiante, se ele ainda não estiver então o dado é rolado e toda a jogada acontece normalmente. Além disso, é acrescentado mais 1 rodada a variável rodada, assim sempre temos a quantidade atual de rodadas para que o usuário possa acompanhar dinamicamente
    - **Estrutura Switch**
        - o __switch__ está dentro do __while__
        - ele depende da variável ```nivelHeroi```
        - cada __case__ é um nível de herói diferente
        - utilizei o switch para poder distribuir o XP de forma diferenciada para cada nível e também para tornar a chance de tirar um número bom no dado diferente para cada nível
        - basicamente em todos os __cases__ quando o número no dado não é bom, o herói ganha apenas metade do XP que deveria e perde 1 vida. Porém, no __case__ do nível Imortal, quando não cai o número 6 no dado, o herói perde 1 vida e não ganha nenhum XP, a ideia era tornar um pouco mais difícil chegar ao último nível
    - **Estrutura if-else**
        - também está dentro do __while__, mas vem depois da estrutura __switch__, pois a ideia é determinar o nível do herói depois de cada ganho de XP por rodada
        - utilizei vários if encadeados para poder determinar em qual nível o herói está de acordo com o seu XP
    - **Utilização do Math.random() e Math.floor()**
        - utilizei o ```Math.random()``` para gerar um número aleatório entre 1 e 6, para isso multipliquei ele por 6 e adicionei 1, pois assim eu determinei que ele iria iniciar do 1 e ir até o 6. Porém, esse método gera números decimais e é ai que entra o segundo método utilizado
        - utilizei o ```Math.floor()``` para arredondar o número gerado para baixo, ou seja, se for 1.79 vai para 1, ou se for 5.31 vai para 5 e assim por diante

#
[Site da Dio](https://www.dio.me/)
#####
[Meu Linkedin](www.linkedin.com/in/maria-luiza-abrami-617bab330)
#####
[Meu Perfil na Dio](https://www.dio.me/users/marialuizaabrami)