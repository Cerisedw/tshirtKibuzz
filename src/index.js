import axios from 'axios';
import $ from 'jquery';
import { createArray, createCat } from './listTshirts';
import { affTfromArr } from './tshirt';
import { creaNav } from './nav';


axios.get('src\\data\\tshirts.json').then((reponse) => {
  const arr = createArray(reponse);
  console.log(arr);

  creaNav(arr);

  createCat(reponse);
  for (const tsh of arr) {
    if (tsh.category === 'meme') {
      $('.meme').append(affTfromArr(tsh));
    } else if (tsh.category === 'geek') {
      $('.geek').append(affTfromArr(tsh));
    }
  }
});
