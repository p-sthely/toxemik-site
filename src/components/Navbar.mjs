const data = {
    style: {
        navbar: `
            background-color: transparent;
        `,
        navbarSupportedContent: `
            flex-grow: 0;
        `
    },
    class: {
        navbar: 'navbar navbar-expand-lg navbar-light bg-transparent'
    }
}

const template = `
<nav class="${ data.class.navbar }">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
        <img src="./src/assets/images/toxemik-logos_black.png" alt="" width="180" height="auto">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent" style="${ data.style.navbarSupportedContent }">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Accueil</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Guides</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Templates</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
`

export default template
