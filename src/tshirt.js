import $ from 'jquery';


export const affTfromArr = (tshirt) => {
  const div = $('<div class="col tshirt"></div>');
  div.append(`<img src="${tshirt.url}"/>`);
  div.append(`<p>${tshirt.gender}</p>`);
  div.append(`<p>${tshirt.prix}&euro;</p>`);
  const select = $('<select></select>');
  for (const s of tshirt.size) {
    select.append(`<option>${s}</option>`);
  }
  div.append(select);
  return div;
};
