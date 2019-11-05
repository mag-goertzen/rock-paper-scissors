function computerPlay() {
    let myArray = [
        "Rock",
        "Paper",
        "Scissors"
    ];

    let randomItem = myArray[Math.floor(Math.random()*myArray.length)];
    return randomItem;
}