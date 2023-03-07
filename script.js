const colorCode = document.getElementById('color-code');
const btn = document.getElementById('btn');

const getColor = () => {
    // Hex Code generate
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    colorCode.innerText = randomCode;
    navigator.clipboard.writeText(randomCode);
}

btn.addEventListener("click", getColor);

getColor();