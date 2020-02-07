let sqButton = document.getElementById('sq-button');
let container = document.getElementById('div-container');
sqButton.addEventListener('click',rollDice);

function rollDice(){
    let rollDiceVal = randomVal(1,6);
    console.log(rollDiceVal);
}


class Die {
    constructor(value){
        //this.value = value;
        this.div = document.createElement('div');   //DOM to create div (could have used jQuery)
        this.div.classlist.add('square');    //this is adding a css class called square
        this.rollDice();
        container.appendChild(this.div);
    }

    rollDice(){
        let rollDiceVal = randomVal(1,6);
        this.div.value = rollDiceVal;
    }
}



function randomVal(min,max){
    return Math.floor(Math.random() * (max-min) + min)
}

