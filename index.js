
class fichaHeroi{
    constructor(nome,idade,tipo,){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    
    atacar(){
        let recebeTipo = this.tipo
        let menssage = ""
       switch(recebeTipo){
        case "Mago":
            menssage = "Magia";
            break;
        case "Guerreiro":
            menssage ="Espada";
            break; 
        case "Monge":
            menssage = "Artes Marciais";
            break;
        case "Ninja":
            menssage = "Shuriken";
            break;
        default:
            console.log("Não foi definido um tipo")
            break;        

       }
       console.log(`O ${this.tipo} atacou usando ${menssage}`)
    }
}
let heroiA = new fichaHeroi("Mago-Negro",345,"Mago")
let heroiB = new fichaHeroi("Samurai-x",30,"Guerreiro")
let heroiC = new fichaHeroi("Shaolin",103,"Monge")
let heroiD = new fichaHeroi("Kakashi",50,"Ninja")

heroiA.atacar()
heroiB.atacar()
heroiC.atacar()
heroiD.atacar()







