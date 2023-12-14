// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.

// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.




// const play = document.querySelector("button")
// console.log('play', play, typeof play)

// let screen = false;
// play.addEventListener("click", function(){
//     screen.toogle;
//     const quatrato = document.querySelector('main > .container');
//     if(screen){
//         quatrato.innerHTML='';
//         screen = false
//     }
//     else{
//         generate(quatrato);
//         screen = true;
//     }
// })



// function generate(qualcosa) {
//     for (let i = 1; i <= 100; i++) {
//         const cell = document.createElement('div');
//         cell.classList.add('cell');
//         cell.innerHTML = i;
//         qualcosa.append(cell);
//         cell.addEventListener("click", function(){
//             console.log(this);
//             this.classList.toggle('active');
//             console.log(this.innerHTML)
//         })
//     }
    
// }

const play = document.querySelector("button")
console.log('play', play, typeof play)

const diff = document.getElementById('difficulty');

const container = document.querySelector('main > .grid-container')
    console.log('container', container, typeof container)

play.addEventListener('click', function(){
    const cellNumber = parseInt(diff.value);
    
    container.innerHTML= '';

    for (let i = 1; i <= cellNumber; i++){
        const cell = document.createElement('div');
        cell.innerHTML=  i ;
        cell.classList.add('cell');
        cell.classList.add('cell-' + cellNumber);
        cell.addEventListener('click', function(){
            this.classList.add('active');
            console.log(this.innerHTML);
        });
        container.append(cell);
     }
})