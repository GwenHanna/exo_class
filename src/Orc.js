import { Personnage } from "./class";
import { data } from './mock'
import { updateCardGame } from "./function";

export class Orc extends Personnage{
    constructor(name,  mana){
        super(name,  mana)
        this.force = 80;
        this.endurence = 20;
        this.xp = 50;
        this.imgSmall = data[2].imgSmall
        this.imgBig = data[2].imgBig
        this.arrayMethode = {
            augment: this.augment,
            atack: this.atack
        }
        this.pouvoir = ['augment','atack']
        this.level
    }
    augment(){
        this.force += 10;
        if(this.force == 100){
            this.force = 0;
            this.level++;
        }
    }

    atack(name){
        name.sante -= 20;
    }
}