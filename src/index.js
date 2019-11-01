import axios from 'axios';
import $ from 'jquery';
import { createArray, createCat } from './listTshirts';
import { affTfromArr } from './tshirt';


axios.get('src\\data\\tshirts.json').then((reponse) => {
  const arr = createArray(reponse);
  createCat(reponse);
  for (const tsh of arr) {
    if (tsh.category === 'meme') {
      $('.meme').append(affTfromArr(tsh));
    } else if (tsh.category === 'geek') {
      $('.geek').append(affTfromArr(tsh));
    }
  }
});
