const cardArray=[

{
    name:"fries",
    img: "images/fries.png"
},
{
    name:"cheeseburger",
    img:"images/cheeseburger.png"
},
{
    name:"blank",
    img:"images/blank.png"
},
{
    name:"hotdog",
    img:"images/hotdog.png"
},
{
    name:"icecream",
    img:"images/ice-cream.png"
},
{
    name:"milkshake",
    img:"images/milkshake.png"
},
{
    name:"pizza",
    img:"images/pizza.png"
},
{
    name:"white",
    img:"images/white.png"
},
{
    name:"fries",
    img: "images/fries.png"
},
{
    name:"cheeseburger",
    img:"images/cheeseburger.png"
},
{
    name:"blank",
    img:"images/blank.png"
},
{
    name:"hotdog",
    img:"images/hotdog.png"
},
{
    name:"icecream",
    img:"images/ice-cream.png"
},
{
    name:"milkshake",
    img:"images/milkshake.png"
},
{
    name:"pizza",
    img:"images/pizza.png"
},
{
    name:"white",
    img:"images/white.png"
}



]
cardArray.sort(()=> 0.5-Math.random())

const gridDisplay=document.querySelector('#grid')
const resultsDisplay=document.querySelector('#result')
let cardChoosen=[]
let cardChoosenIds=[]
let cardsWon=[];
function createBoard(){
for( let i=0;i<cardArray.length;i++){
    const card =document.createElement('img')
     card.setAttribute('src','images/blank.png')
     card.setAttribute('data-id',i)
     card.addEventListener('click',flipCard)
     gridDisplay.appendChild(card);
}
}
createBoard()

function checkMatch(){
    const cards=document.querySelectorAll('img');
          console.log('check for a match')
    if(cardChoosen[0]==cardChoosen[1]){
        alert('you have got a match ');
       cards[cardChoosenIds[0]].setAttribute('src','images/white.png')
       cards[cardChoosenIds[1]].setAttribute('src','images/white.png')  
       cards[cardChoosenIds[0]].removeEventListener('click',flipCard)
       cards[cardChoosenIds[1]].removeEventListener('click',flipCard)
    
           cardsWon.push(cardChoosen);
    }
    else{
        cards[cardChoosenIds[0]].setAttribute('src','images/blank.png')
        cards[cardChoosenIds[1]].setAttribute('src','images/blank.png')
    }
    cardChoosen=[]
    cardChoosenIds=[]

    resultsDisplay.textContent=cardsWon.length;



        }

function flipCard(){
    const cardId=this.getAttribute('data-id');
    cardChoosen.push(cardArray[cardId].name)
    cardChoosenIds.push(cardId);
    console.log('clicked',cardId)
    console.log(cardChoosen)
    this.setAttribute('src',cardArray[cardId].img)
       if(cardChoosen.length===2){
         setTimeout(checkMatch,500)
       }

}