class Products {
    constructor() {
        this.classNameActive = 'products-element__button-active';
        this.labelAdd = 'Добавить в корзину';
        this.labelRemove = 'Удалить из корзины';
    }

    handleSetLocationStorage(element, id) {
        let { pushProduct, products } = localStorageUtil.putProducts(id);
        if (pushProduct) {
            element.classList.add(this.classNameActive)
            element.innerHTML = this.labelRemove;
        } else {
            element.classList.remove(this.classNameActive)
            element.innerHTML = this.labelAdd
        }
        headerPage.render(products.length)
    }
    render() {
        let productsStore = localStorageUtil.getProducts();
        let htmlCatalog = ' ';
        Catalog.forEach(({ id, name, img, mark, price }) => {
            let activeText = '';
            let activeClass = '';
            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd
            } else {
                activeClass = this.classNameActive
                activeText = this.labelRemove;
            }
            htmlCatalog += `
            <li class = "products-element">
            <span class="products-element__name">${name}</span>
            <img class="products-element__img" src ="${img}">
            <span class="products-element__mark">${mark}</span>
            <span class="products-element__price">🔥${price.toLocaleString()} RUB</span>
            <button class="products-element__button ${activeClass}" onclick = " productsPage.handleSetLocationStorage(this,'${id}')">${activeText}</button>
           </li>`

        })

        const html = `<ul class = "products-container">${htmlCatalog}</ul>`;

        Root_Products.innerHTML = html;
    }


}

const productsPage = new Products();

productsPage.render();