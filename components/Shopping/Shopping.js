class Shopping {
    render() {
        let productsStore = localStorageUtil.getProducts();
        let htmlCatalog = ' ';
        Catalog.forEach(({ id, name, price }) => {
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                <p>🔥${name} ${price}</p>
              `;
            } else {
                htmlCatalog = 'Error...'
            }
        })

        let html = `<!-- Button trigger modal -->        
        <div id="exampleModalPopovers" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalPopoversLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalPopoversLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div class="modal-body">
              <h1>kek</h1>
            ${htmlCatalog}
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
     
        `
        Root_Shopping.innerHTML = html
    }
}

let shopping = new Shopping();

shopping.render();