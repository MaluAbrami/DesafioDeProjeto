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

console.log(`
INTRODUÇÃO AO GAME:
\nAqui você testará a sua sorte e até que nível de herói ela permitirá que você chegue.
A cada rodada um dado de 6 lados será lançado e dependendo do seu nível atual o número que cair pode ou não te ajudar.
Se o número que cair for o que o seu nível de herói pede, então você ganhará a quantia de XP determinada pelo nível.
Porém, se o número que cair não for o que se espera no seu nível atual, você ganhará metade do XP padrão do seu nível e perderá 1 vida.
No fim, você saberá quantas rodadas seu herói sobreviveu, qual foi o nível final que ele atingiu e o total de XP ganho.
Te desejo boa sorte!
`);

while(vidaDoHeroi > 0){

    if(nivelHeroi != "Radiante"){
        rodada++;
        console.log("\nVocê está na rodada " + rodada + " e no nível " + nivelHeroi + ". No momento, " + nomeHeroi + " está com " + vidaDoHeroi + " de vida e com " + experienciaHeroi + " de XP.");
        dado = Math.floor(Math.random() * 6) + 1;
        console.log("O valor que caiu no dado foi " + dado);
    }

    switch(nivelHeroi){
        case "Ferro":{

        }
        case "Bronze":{

        }
        case "Prata":{

        }
        case "Ouro":{

        }
        case "Platina":{

        }
        case "Ascendente":{

        }
        case "Imortal":{

        }
        default:{

        }
    }
    
}