function rollDice() {
  const numDice = document.getElementById("textBox").value;
  const rollBtn = document.getElementById("rollBtn");
  const diceResult = document.getElementById("diceResult");
  const diceImg = document.getElementById("diceImg");

  const values = [];
  const images = [];

  for (let i = 0; i < numDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="img/${value}.png">`);
  }
  diceResult.textContent = `Dice: ${values.join(", ")}`;
  diceImg.innerHTML = images.join("");
}
