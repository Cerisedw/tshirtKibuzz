import $ from 'jquery';


const creaSelect = (arr) => {
  const select = $('<select></select>');
  for (const option of arr) {
    select.append(`<option>${option}</option>`);
  }
  return select;
};

const creaInputPrice = (arrnmb) => {
  const maxPrice = arrnmb.reduce((a, b) => Math.max(a, b));
  const minPrice = arrnmb.reduce((a, b) => Math.min(a, b));
  return $(`<input type='number' min='${minPrice}' max='${maxPrice}' >`);
};

export const creaNav = (array) => {
  const nav = $('.nav');
  const arrCat = [];
  const arrTaille = [];
  const arrPrice = [];
  for (const t of array) {
    if (!arrCat.includes(t.category)) { arrCat.push(t.category); }
    for (const size of t.size) {
      if (!arrTaille.includes(size)) { arrTaille.push(size); }
    }
    if (!arrPrice.includes(t.prix)) { arrPrice.push(t.prix); }
  }
  nav.append(creaSelect(arrCat));
  nav.append(creaSelect(arrTaille));
  nav.append(creaSelect(['M', 'F']));
  nav.append(creaInputPrice(arrPrice));
};
