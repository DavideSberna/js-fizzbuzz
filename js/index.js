let squareLoop = 100;
const rowSquare = document.getElementById("row-square");





for(let i = 2; i < squareLoop; i++){
    rowSquare.innerHTML += `<div id="col-square" class="p-10 col">
                                <div class="square bg-blue">
                                    <p>${i}</p>
                                </div>
                            </div>`                     
                           
    if(i % 3 === 0){
        rowSquare.innerHTML += `<div id="col-square" class="p-10 col">
                                <div class="square bg-green">
                                    <p>FIZZ</p>
                                </div>
                            </div>`
       
    }
}





