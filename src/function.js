import { Elfe } from "./Elfe";
import { Humans } from "./Humans";
import { Orc } from "./Orc";

export function creatCardGame(name, force, endurence, xp, sante, level, img, atack1, atack2){
    let card = document.createElement('div')
    let imgCard = document.createElement('img');
    
    let contenu = document.createElement('div')

    let title = document.createElement('h3');

    let p = document.createElement('p');

    let forceCard = document.createElement('p');
    let endurenceCard = document.createElement('p');
    let xpCard = document.createElement('p');
    let santeCard = document.createElement('p');
    let levelCard = document.createElement('p');
    let span = document.createElement('span')
    

    title.textContent = name;
    contenu.insertAdjacentElement('afterbegin',title)

    forceCard.textContent = "Force :"+force;
    forceCard.setAttribute('id',"force-"+name)
    contenu.append(forceCard)
    
    endurenceCard.textContent = 'Endurence :'+endurence;
    endurenceCard.setAttribute('id',"endurence-"+name)
    contenu.append(endurenceCard)
    
    xpCard.textContent = 'Xp :'+xp;
    xpCard.setAttribute('id',"xp-"+name)
    contenu.append(xpCard)
    
    santeCard.textContent = 'Santé :'+sante;
    santeCard.setAttribute('id',"santer-"+name)
    contenu.append(santeCard)
    
    
    levelCard.textContent = 'Level :'+level;
    levelCard.setAttribute('id',"level-"+name)
    contenu.append(levelCard)
    

    imgCard.setAttribute('src',img)
    card.append(imgCard)
    card.append(contenu)
    card.classList.add(name.toLowerCase())
    card.append(creatBtnAtack(atack1,atack2))

    return card

}
export function updateCardGame(player) {
    const forceElement = document.getElementById("force-"+player.name);
    const santeElement = document.getElementById("santer-"+player.name);
    const endurenceElement = document.getElementById('endurence-'+player.name);
    const xpElement = document.getElementById('xp'+player.name);
    const levelElement = document.getElementById('level-'+player.name);
    console.log(endurenceElement, forceElement);
  
    if (forceElement) {
      forceElement.textContent = 'Force: ' + player.force;
      
    }
    if (santeElement) {
        santeElement.textContent = 'Santé: ' + player.sante;
        
    }
    if (endurenceElement) {
        endurenceElement.textContent = 'endurence: ' + player.endurence;
    }
    if (xpElement) {
        xpElement.textContent = 'xp: ' + player.xp;
      }
  
    if (levelElement) {
      levelElement.textContent = 'Level: ' + player.level;
      console.log(player.level);
    }
}

export function creatCardCoice(name, imgSrc){
    let card = document.createElement('div')
    card.classList.add('cards')

    let title = document.createElement('h3');
    
    let img = document.createElement('img');
    img.setAttribute('src',imgSrc)
    img.setAttribute('id',name)
    
    title.textContent = name;
    card.append(title)

    card.append(img)

    return card

}

export function switchPersonnage(name){

    switch (name) {
        case 'Humain':
            return new Humans(name, 10)
            break;
        case 'Elfe':
            return new Elfe(name, 10)
            break;
        case 'Orc':
            return new Orc(name, 10)
            break;
        default:
            break;
    }
}

function creatBtnAtack(atk1,atk2){
    let btn1 = document.createElement('input')
    let btn2 = document.createElement('input')
    let container = document.createElement('div')
    btn1.classList.add('btn')
    btn2.classList.add('btn')

    btn1.setAttribute('type','button')
    btn2.setAttribute('type','button')

    btn1.value = atk1
    btn2.value = atk2
    container.append(btn1)
    container.append(btn2)

    return container
}


export function classActiveToggle(el1, el2){

    el1.classList.remove("active")
    el1.classList.add("in-active")
    el2.classList.remove("in-active")
    el2.classList.add("active")
}