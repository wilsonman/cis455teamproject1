import "./styles.css";

document.getElementById("app").innerHTML = `
<!--<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>-->

<p>Player 1: Chris</p>


`;

const para = document.querySelector("p");

para.addEventListener("click", updateName);

function updateName() {
  let name = prompt("Enter a new name");
  para.textContent = "Player 1: " + name;
}
