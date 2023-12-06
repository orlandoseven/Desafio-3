
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
let definirHeroi = new fichaHeroi("Mago-Negro",345,"Ninja")
definirHeroi.atacar()








