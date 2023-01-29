let shop = document.getElementById('shop');

let shopItemsData = [{
    id:"val",
    name:"Casual Wear",
    price: 50,
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing",
    img:"download1.jpg"
},
{ id:"val2",
name:"Casual two",
price: 60,
desc:"Lorem ipsum dolor sit amet consectetur adipisicing",
img:"images1.jpg"},
{ id:"val3",
name:"Casual three",
price: 70,
desc:"Lorem ipsum dolor sit amet consectetur adipisicing",
img:"download2.jpg"},
{ id:"val4",
name:"Casual four",
price: 80,
desc:"Lorem ipsum dolor sit amet consectetur adipisicing",
img:"images4.jpg"}
];

let basket = [];


let generateShop =() => {
    return (shop.innerHTML = shopItemsData
        .map((x) => {
            let {id, name, price, desc, img} =x
        return `
        <div id=product-id-${id} class="item">
        <img width="222" src=${img} alt="">
        <div class="details">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="price-quantity">
                <h2>${price}</h2>
                <div class="buttons">
                    <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                    <div id=${id} class="quantity">0</div>
                    <i onclick="increment(${id})" class="bi bi-plus-lg"></i>    
                </div>
            </div>
        </div>
    </div>
        `
    }).join(" "));
}

generateShop();

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id)

    if(search === undefined){ basket.push({
        id: selectedItem.id,
        item: 1,
    });
}
else {
    search.item +=1;
}

//console.log(basket);
update(selectedItem.id);

  
};
let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id)

    if(search.item === 0) return;
else {
    search.item -=1;
}


//console.log(basket);
update(selectedItem.id);

};
let update = (id) => {
    let search = basket.find((x)=>x.id === id);
    console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
};

let calculation =() => {}