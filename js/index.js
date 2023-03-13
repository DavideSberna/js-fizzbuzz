


let squareLoop = 100;

for(let i = 1; i <= squareLoop; i++){
    
    const container = document.getElementById("container");
    const rowSquare = document.createElement("div");
    const colSquare = document.createElement("div");
    const text = document.createElement("p");

        
    rowSquare.classList.add("p-10");
    colSquare.classList.add("p-10", "col", "d-flex", "items-center");
    container.appendChild(rowSquare);
    rowSquare.appendChild(colSquare);
    colSquare.appendChild(text);
    

    if(i % 3 === 0 && i % 5 === 0){
        text.append("FIZZBUZZ")
        colSquare.classList.add("bg-red");
    } else if(i % 3 === 0){
        text.append("FIZZ"); 
        colSquare.classList.add("bg-green");
    } else if(i % 5 === 0) {
        text.append("BUZZ");
        colSquare.classList.add("bg-yellow");
    } else {
        text.append(`${i}`);
        colSquare.classList.add("bg-blue");
    }


}
