// guys i have made it a id based application as this is how to works in real world
// there are only 2 easy to understand changes read the code carefully

// new function getProductByID() is created check it out

let products = [
    {
        id: 1,
        name: 'White Tshirt',
        size: 'L',
        color: 'white',
        price: 1200,
        image: 'project1.jpg',
        description: 'Good looking white tshirt',
    },
    {
        id: 2,
        name: 'Black Shirt',
        size: 'M',
        color: 'Black',
        price: 1500,
        image: 'project2.jpg',
        description: 'Good looking black shirt',
    },

    {
        id: 3,
        name: 'Kurta',
        size: 'S',
        color: 'Blue',
        price: 900,
        image: 'project3.jpg',
        description: 'Good looking Blue Kurta',
    },

    {
        id: 4,
        name: 'Red Checked Shirt',
        size: 'S',
        color: 'Red',
        price: 3000,
        image: 'project4.jpg',
        description: 'Good Looking Red Checked Shirt',
    },

    {
        id: 5,
        name: 'Green Sweatshirt',
        size: 'M',
        color: 'Dark Green',
        price: 1300,
        image: 'project5.jpg',
        description: 'Good looking Santa Sweatshirt',
    },

    {
        id: 6,
        name: 'Stripe Shirt',
        size: 'M',
        color: 'White, Grey & Pink',
        price: 1500,
        image: 'project6.jpg',
        description: 'Good looking Stripped Shirt',
    },

    {
        id: 7,
        name: 'Skinny Fit Low-Rise Mildly Distressed Heavy Fade Jeans',
        size: 'S',
        color: 'Blue',
        price: 1500,
        image: '7.png',
        description: 'Good Looking Blue Skinny Fit Jeans',
    },

    {
        id: 8,
        name: 'Slim Fit Chinos Trousers',
        size: 'M',
        color: 'Khaki',
        price: 2000,
        image: '8.png',
        description: 'Good looking Khaki Slim Fit Trousers',
    },

    {
        id: 9,
        name: 'Mildly Distressed Light Fade Jeans',
        size: 'L',
        color: 'Blue',
        price: 2500,
        image: '9.png',
        description: 'Good looking Blue Mildly Distressed Jeans',
    },
];

cart = [];

function displayProducts(productsData, who = 'productwrapper') {
    let productsString = '';

    productsData.forEach(function (product, index) {
        let { id, name, image, color, description, price, size } = product;

        if (who == 'productwrapper') {
            productsString += ` <div class="product">
          <div class="prodimg">
            <img src="productimages/${image}" width="100%" />
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}$</p>
          <p>Size : ${size}</p>
          <p>Color : ${color}</p>
          <p>${description}</p>
          <p>
            <button onclick="addToCart(${id})">Add to Cart</button>
          </p>
        </div>`;
        } else if (who == 'cart') {
            productsString += ` <div class="product">
          <div class="prodimg">
            <img src="productimages/${image}" width="100%" />
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}$</p>
          <p>Size : ${size}</p>
          <p>Color : ${color}</p>
          <p>${description}</p>
          <p>
            <button onclick="removeFromCart(${id})">Remove from Cart</button>
          </p>
        </div>`;
        }
    });

    document.getElementById(who).innerHTML = productsString;
}

displayProducts(products);

function searchProduct(searchValue) {
    let searchedProducts = products.filter(function (product, index) {
        let searchString =
            product.name + ' ' + product.color + ' ' + product.description;

        return (
            searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
        );
    });

    displayProducts(searchedProducts);
}

// this is a function to get a product based on id from a particular array
// @param 1 the array u want to get products from
// @param 2 the id u want to search

function getProductByID(productArray, id) {
    return productArray.find(function (product) {
        return product.id == id;
    });
}

function addToCart(id) {
    // getting the product
    let pro = getProductByID(products, id);

    //   putting in cart
    cart.push(pro);
    displayProducts(cart, 'cart');
}

function removeFromCart(id) {
    // getting the index based on id
    let index = cart.findIndex(function (product) {
        return product.id == id;
    });

    //   removing from cart based on index
    cart.splice(index, 1);
    displayProducts(cart, 'cart');
}
