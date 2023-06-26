import { Personnage } from "./class";
import { data } from './mock'


export class Elfe extends Personnage{
    constructor(name,  mana){
        super(name, mana)
        this.force = 100;
        this.endurence = 100;
        this.xp = 90;
        this.imgSmall = data[1].imgSmall
        this.imgBig = data[1].imgBig
        this.arrayMethode = {
            lune: this.lune,
            vole: this.vole
        }
        this.pouvoir = ['lune','vole']

    }
    lune(){
        this.endurence += 10;
        this.xp += 10;
    }
    vole(name){
        name.sante -= 20;
        this.sante += 20
    }
}