import { Personnage } from "./class";
import { data } from './mock'
import { updateCardGame } from "./function";

export class Humans extends Personnage{
    constructor(name, mana){
        super(name, mana)
        this.force = 80;
        this.endurence = 120;
        this.xp = 100;
        this.imgSmall = data[0].imgSmall
        this.imgBig = data[0].imgBig
        this.arrayMethode = {
            soigned: this.soigned,
            furie: this.furie
        }
        this.pouvoir = ['soigned','furie']
    }

    soigned(){
        this.sante += 10;
        console.log('ok');

    }
    furie(){
        this.level++
    }
}

