import { Humans } from "./Humans";
import { Orc } from "./Orc";
import { Elfe } from "./Elfe";
import { data } from "./mock";
import { creatCardCoice, switchPersonnage, updateCardGame, creatCardGame, classActiveToggle } from "./function";

let choicePersonage = document.querySelector('#choicePersonnage')
let gamePlay = document.querySelector('#gamePlay')




let cards, playerId, player, ia, cardPlayer, cardIa,  start = false
let arrPerso = []

data.forEach(el => {
    
    let card = creatCardCoice(el.name, el.imgSmall);
    choicePersonage.appendChild(card);
    cards =  document.querySelectorAll('.cards')
    arrPerso.push(el.name)
})
cards.forEach(card => {
    card.addEventListener('click', async (e) =>{
        playerId = e.target.id

        classActiveToggle(choicePersonage, gamePlay)

        player = switchPersonnage(playerId)

        arrPerso.find((el,index) => {
            if(el == playerId){
             arrPerso.splice(index,1)
            }
        })
        let randomPersonnageIa = Math.floor(Math.random() * arrPerso.length)
        ia = switchPersonnage(arrPerso[randomPersonnageIa])
        console.log(player.pouvoir[0]);


        let arrayMethodeIa = ia.arrayMethode;
        let arrayMethodePlayer = player.arrayMethode;


       
        cardPlayer = creatCardGame(player.name, player.force,player.endurence, player.xp, player.sante, player.level, player.imgBig, player.pouvoir[0],player.pouvoir[1])
        gamePlay.prepend(cardPlayer)

        cardIa = creatCardGame(ia.name, ia.force, ia.endurence, ia.xp,ia.sante,ia.level,ia.imgBig, ia.pouvoir[0], ia.pouvoir[1])
        gamePlay.append(cardIa)


        let btns = document.querySelectorAll('.btn')
        btns.forEach(btn => {
            btn.addEventListener('click',(e) =>{
                let target = e.target.value
                console.log( e.target.value);
                const methodePlayer = arrayMethodePlayer[target]
                const methodeIa = arrayMethodeIa[target]
                if(methodePlayer){
                    methodePlayer.call(player)
                }if(methodeIa){
                    methodeIa.call(ia)

                }
                console.log(methodeIa, methodePlayer);


                updateCardGame(player)
                console.log(player.endurence);
                updateCardGame(ia)
                
            })
        })
    })

})
