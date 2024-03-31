import './styles/style.css';
import generateJoke from "./generateJoke";
import laughing from './assets/laughing.svg';

const laughImg = document.getElementById('laughImg')

laughImg.src = laughing;
console.log(generateJoke());
console.log(1);