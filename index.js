//Declarei a constante 'nomeHeroi' para armazenar o nome do meu herói que nesse caso chamei de Killjoy
const nomeHeroi = "Killjoy"; 
//Declarei as variáveis necessárias para o Desafio e atribui valores iniciais minímos
let experienciaHeroi = 0;
let nivelHeroi = "Ferro";

// Declarei a variável 'dado' para poder armazenar o número aleatório entre 1 e 6 que simule um dado de 6 lados real
let dado;
//Declarei a variável 'vidaDoHeroi' para por tornar o "joguinho" mais dinâmico e também para utilizá-lo como condição de parada na minha estrutura de repetição 'while'
let vidaDoHeroi = 10;
//Declarei a variável 'rodada' para armazenar a quantidade de rodadas totais que ocorrerem durante o 'while' e acompanhar a rodada atual a cada repetição
let rodada = 0;

//Aqui utilizei o console.log() para exibir uma mensagem introdutória ao usuário, para explicar como funciona a dinâmica do "jogo"
console.log(`
INTRODUÇÃO AO GAME:
\nAqui você testará a sua sorte e até que nível de herói ela permitirá que você chegue.
A cada rodada um dado de 6 lados será lançado e dependendo do seu nível atual o número que cair pode ou não te ajudar.
Se o número que cair for o que o seu nível de herói pede, então você ganhará a quantia de XP determinada pelo nível.
Porém, se o número que cair não for o que se espera no seu nível atual, você ganhará metade do XP padrão do seu nível e perderá 1 vida.
No fim, você saberá quantas rodadas seu herói sobreviveu, qual foi o nível final que ele atingiu e o total de XP ganho.
Te desejo boa sorte!
`);

//Utilizei um 'while' para garantir que a distribuição de XP para o herói só encerrasse quando suas 10 vidas iniciais acabassem
while(vidaDoHeroi > 0){

    if(nivelHeroi != "Radiante"){ //Se o herói já está no último nível, então não é necessário rolar o dado mais uma vez e nem atualizar a rodada 
        rodada++; //atualizando a rodada atual

        console.log("\nVocê está na rodada " + rodada + " e no nível " + nivelHeroi + ". No momento, " + nomeHeroi + " está com " + vidaDoHeroi + " de vida e com " + experienciaHeroi + " de XP.");
        
        //Utilizei o Math.random() para gerar um número aleatório entre 1 e 6, por isso multipliquei ele po 6 e acrescentei 1, assim determino que seu inicio é em 1 e vai até 6
        //Utilizei o Math.floor() para garantir que o número gerado não seja um decimal(Já que o random gera números decimais), arredondando o número para baixo
        dado = Math.floor(Math.random() * 6) + 1;
        console.log("O valor que caiu no dado foi " + dado);
    }

    //Utilizei um 'switch' para garantir uma distribuição de XP diferente para cada nível do herói
    //Cada nível pode solicitar números do dado específicos e diferentes dos outros níveis
    //Além disso, a cada nível do herói as chances de conseguir tirar o número no dado diminuem
    switch(nivelHeroi){
        case "Ferro":{
            experienciaHeroi += (dado <= 5) ? 200 : 100; //Utilizei funções lambdas para deixar meu código mais conciso e limpo
            (dado <= 5) ? console.log("+200XP") : (console.log("+100XP\t-1 vida"), vidaDoHeroi--); 
            break;
        }
        case "Bronze":{
            experienciaHeroi += (dado <= 4) ? 400 : 200;
            (dado <= 4) ? console.log("+400XP") : (console.log("+200XP\t-1 vida"), vidaDoHeroi--);
            break;
        }
        case "Prata":{
            experienciaHeroi += (dado <= 3) ? 600 : 300;
            (dado <= 3) ? console.log("+600XP") : (console.log("+300XP\t-1 vida"), vidaDoHeroi--);
            break;
        }
        case "Ouro":{
            experienciaHeroi += (dado >= 4) ? 800 : 400;
            (dado >= 3) ? console.log("+800XP") : (console.log("+400XP\t-1 vida"), vidaDoHeroi--);
            break;
        }
        case "Platina":{
            experienciaHeroi += (dado >= 5) ? 1000 : 500;
            (dado >= 5) ? console.log("+1000XP") : (console.log("+500XP\t-1 vida"), vidaDoHeroi--);
            break;
        }
        case "Ascendente":{
            experienciaHeroi += (dado <= 2) ? 1000 : 500;
            (dado <= 2) ? console.log("+1000XP") : (console.log("+500XP\t-1 vida"), vidaDoHeroi--);
            break;
        }
        case "Imortal":{
            experienciaHeroi += (dado == 6) ? 1000: 0;
            (dado == 6) ? console.log("+1000XP") : (console.log("+0XP\t-1 vida"), vidaDoHeroi--);
            break;
        }
        default:{
            console.log("Parabéns! Você chegou ao último nível! Então agora é um Radiante!");
            vidaDoHeroi = 0; //Aqui eu zero a vida do heroi(caso ainda reste alguma) para encerrar o nosso 'while'
            break;
        }
    }

    //Utilizei vários if encadeados para verificar qual o nível atual do herói de acordo com seu total de XP
    if(experienciaHeroi <= 1000)
        nivelHeroi = "Ferro";
    else if(experienciaHeroi <= 2000)
        nivelHeroi = "Bronze";
    else if(experienciaHeroi <= 5000)
        nivelHeroi = "Prata";
    else if(experienciaHeroi <= 7000)
        nivelHeroi = "Ouro";
    else if(experienciaHeroi <= 8000)
        nivelHeroi = "Platina";
    else if(experienciaHeroi <= 9000)
        nivelHeroi = "Ascendente";
    else if(experienciaHeroi <= 10000)
        nivelHeroi = "Imortal";
    else
        nivelHeroi = "Radiante";

}

//Feedback para o usuário saber quantas rodadas foram, nível final do seu herói e quanto XP ele fez no total
console.log("\n\nApós " + rodada + " rodadas, o nível final de " + nomeHeroi + " é " + nivelHeroi + " com " + experienciaHeroi + " de XP.");