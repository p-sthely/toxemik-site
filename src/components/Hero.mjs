const data = {
    title: 'Lorem Ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a nulla aliquam, consectetur nisl a, elementum neque. Nulla nec commodo neque, vitae viverra eros.'
}

const template = `
<div class="px-4 py-5 my-5 text-center">
    <h1 class="display-5 fw-bold">${ data.title }</h1>
    <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">${ data.text }</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <a href="blog.html" class="btn btn-primary btn-lg px-4 gap-3">Blog</a>
            <a href="#" class="btn btn-outline-secondary btn-lg px-4 disabled">More</a>
        </div>
    </div>
</div>
`

export default template
