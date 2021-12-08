const data = {

}

const template = `
    <h1 class="mb-5">Derniers articles</h1>
    <div class="row row-cols-1 row-cols-lg-2 gy-4">
        <div class="col d-flex flex-column justify-content-center">
            <div class="py-5 px-2 px-md-5 rounded-3 border">
                <h1 class="fs-3"><a href="#" class="link-dark text-decoration-none" onclick="renderMarkdownFile('guide_web_es.md');" data-bs-toggle="modal" data-bs-target="#markdownModal">Guide de développement Web - HTML, CSS, JavaScript, Hugo, Netlify, Forestry</a></h1>
                <p class="fw-lighter">Un guide pour démarrer la création de pages statiques avec JavaScript</p>
            </div>
        </div>
        <div class="col d-flex flex-column justify-content-center">
            <div class="py-5 px-2 px-md-5 rounded-3 border">
                <h1 class="fs-3"><a href="#" class="link-dark text-decoration-none" onclick="renderMarkdownFile('lorem_ipsum.md');" data-bs-toggle="modal" data-bs-target="#markdownModal">Lorem ipsum dolor sit amet</a></h1>
                <p class="fw-lighter">consectetur adipiscing elit. Phasellus ac sollicitudin urna. Sed tempor dignissim neque. Duis vulputate nulla quis justo venenatis varius. Maecenas a sapien a tortor sodales tincidunt et a tortor</p>
            </div>
        </div>
        <div class="col d-flex flex-column justify-content-center">
            <div class="py-5 px-2 px-md-5 rounded-3 border">
                <h1 class="fs-3"><a href="#" class="link-dark text-decoration-none" onclick="renderMarkdownFile('aenean_egestas.md');" data-bs-toggle="modal" data-bs-target="#markdownModal">Aenean egestas, quam vel venenatis interdum, augue magna maximus dolor</a></h1>
                <p class="fw-lighter">vel mollis ipsum ligula consectetur purus. Proin vehicula non sapien eget rhoncus. Pellentesque volutpat libero at interdum sollicitudin</p>
            </div>
        </div>
        <div class="col d-flex flex-column justify-content-center">
            <div class="py-5 px-2 px-md-5 rounded-3 border">
                <h1 class="fs-3"><a href="#" class="link-dark text-decoration-none" onclick="renderMarkdownFile('vivamus_mi_turpis.md');" data-bs-toggle="modal" data-bs-target="#markdownModal">Vivamus mi turpis, interdum id aliquam vel, bibendum non augue. Phasellus tincidunt</a></h1>
                <p class="fw-lighter">arcu sit amet tristique mattis, odio tellus porttitor orci, interdum tincidunt quam lorem nec leo. Nunc vel aliquam turpis. Ut tincidunt nisi id pulvinar dictum. Curabitur in lectus metus</p>
            </div>
        </div>
    </div>
`

export default template