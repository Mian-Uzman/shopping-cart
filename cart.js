const cartProductCounter = document.querySelector('#counter');
const productList = document.querySelector('#productList');
const productListInCart = document.querySelector('#productListInCart');
const totalPrice = document.querySelector('#totalPrice');


let productsInCart = 0;
let totalAmount = 0;

if (productList) {
    productList.addEventListener('click', e => {
        if (e.target.classList.contains('addToCartBtn')) {
            const product = e.target.parentElement;
            const product_name = product.children[0].textContent;
            const product_price = product.children[1].textContent;
            const product_image = product.previousElementSibling.attributes.src.value;
            // console.log(product, product_name, product_price, product_image)
            addProductToCart(product_name, product_price, product_image);

        }
    });
}



const addProductToCart = (product_name, product_price, product_image) => {
    cartProductCounter.textContent = ++productsInCart;

    totalAmount += parseInt(product_price.replace('$', '').trim());
    totalPrice.innerText = `Total Amount = ${totalAmount}$`;
    console.log(totalAmount)
    const product = document.createElement('li');
    product.className = 'd-flex justify-content-between align-items-center my-3';
    product.innerHTML = `
                        <h6 class="product_name">${product_name}</h2>
                        <h6 class="product_price ">${product_price}</h6>
                        <i class="bi bi-trash-fill mb-2"></i>`;

    productListInCart.append(product);

    const removeItem = product.querySelector('i.bi-trash-fill');
    removeItem.addEventListener('click', () => {
        product.remove();
        cartProductCounter.textContent = --productsInCart;

        totalAmount -= parseInt(product_price.replace('$', '').trim());

        totalPrice.innerText = `Total Amount = ${totalAmount}$`;
    })
}

