class Footer {
    render() {
        let html = `<!-- Footer -->
        <footer class="page-footer font-small blue">
          
          <!-- Copyright -->
          <div class="footer-copyright text-center py-3">© 2020 Copyright:
            <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
          </div>
          <!-- Copyright -->
        
        </footer>
        <!-- Footer -->`


        Root_Footer.innerHTML = html
    }

}


let footer = new Footer()

footer.render();