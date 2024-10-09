function ageGuess() {
    let age = prompt("Enter your age: ");
    if (age <= 12) {
        alert("You are a child.");
    } else if (age <= 19) {
        alert("You are a teenager.");
    } else {
        alert("You are an adult.");
    }
}
