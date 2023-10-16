/*This is a function that can be used to generate the random quote"*/

let quote_area = document.getElementById("TheQuote");

let quoteMap = new Map([
    [1,"The only thing we have to fear is fear itself."],
    [2,"There's no place like home."],
    [3,"Three can keep a secret, if two of them are dead."]
]
);

let authorMap = new Map([
    [1,"Franklin D Roosevelt"],
    [2,"Dorothy"],
    [3,"Benjamin Franklin"]
]);
function genRandQuote(){
    var randomNo = Math.ceil(Math.random(0,1)*quoteMap.size)
    console.log(randomNo,typeof(quote_area))
    quote_area.innerHTML = `${quoteMap.get(randomNo)}~<span style=color:red>${authorMap.get(randomNo)}`;
}

genRandQuote();