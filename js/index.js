let squareLoop = 100;
const rowSquare = document.getElementById("row-square");
const colSquare = document.getElementById("col-square");






for(let i = 2; i < squareLoop +1; i++){
                    

   

    if(i % 3 === 0 && i % 5 === 0){
        rowSquare.innerHTML += `<div id="col-square" class="p-10 col">
                            <div class="square bg-red">
                                <p>${i} FIZZBUZZ</p>
                            </div>
                        </div>`

    } else if(i % 3 === 0) {
        rowSquare.innerHTML += `<div id="col-square" class="p-10 col">
                                <div class="square bg-green">
                                    <p>${i} FIZZ</p>
                                </div>
                            </div>`                  
    } else if (i % 5 === 0){
        rowSquare.innerHTML += `<div id="col-square" class="p-10 col">
        <div class="square bg-yellow">
            <p>${i} BUZZ</p>
        </div>
    </div>`
    } else {
        rowSquare.innerHTML += `<div id="col-square" class="p-10 col">
        <div class="square bg-blue">
            <p>${i}</p>
        </div>
    </div>`
    }



    
}





