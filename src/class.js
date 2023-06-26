
export class Personnage{
    constructor(name, force, mana, endurence, xp, imgSmall, imgBig){
        this.name = name;
        this.force = force;
        this.mana = mana;
        this.endurence = endurence
        this.xp = xp;
        this.level = 1
        this.sante = 100;
        this.imgSmall = imgSmall;
        this.imgBig = imgBig;
    }

    afficher(){
        console.log(`${this.name} a une force de ${this.force} une endurence de ${this.endurence} un xp de ${this.xp} et une santer de ${this.sante} ${this.imgBig}`);
console.log();

    }
}