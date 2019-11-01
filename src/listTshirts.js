import $ from 'jquery';


export const createCat = (rep) => {
  const cat = [];
  for (const t of rep.data['t-shirts']) {
    if (!cat.includes(t.category)) {
      cat.push(t.category);
    }
  }
  for (const c of cat) {
    const row = $('<div class="container-fluid"></div>');
    const divH = $('<div class="row"></div>');
    const divImg = $(`<div class="row ${c}"></div>`);
    divH.append(`<h2>${c}</h2>`);
    row.append(divH);
    row.append(divImg);
    $('.listT').append(row);
  }
};


export const createArray = (rep) => {
  const arr = [];
  const id = [];
  console.log(rep.data['t-shirts']);
  for (const tsh of rep.data['t-shirts']) {
    if (!id.includes(tsh.productId)) {
      id.push(tsh.productId);
    }
  }
  id.forEach((e) => {
    const obj1 = {
      id: e, category: '', gender: 'M', size: [], url: '', prix: 0,
    };
    const obj2 = {
      id: e, category: '', gender: 'F', size: [], url: '', prix: 0,
    };
    arr.push(obj1, obj2);
  });
  for (const x of arr) {
    for (const ts of rep.data['t-shirts']) {
      if (ts.productId === x.id && ts.gender === x.gender) {
        if (!x.size.includes(ts.size)) {
          x.size.push(ts.size);
        }
        x.prix = ts.price;
        x.url = ts.imageUrl;
        x.category = ts.category;
      }
    }
  }
  console.log(arr);
  return arr;
};
