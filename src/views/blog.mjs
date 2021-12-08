import Navbar from '../components/Navbar.mjs'
import Posts from '../components/Posts.mjs'
import Footer from '../components/Footer.mjs'

const data = {
    style: {
        container: `
            min-height: 100vh;
        `
    },
    class: {
        container: 'container-fluid d-flex flex-column',
        spacer: 'flex-grow-1'
    }
}

const template = `
    <div class="${ data.class.container }" style="${ data.style.container }">
        ${ Navbar }
        <main>
            <div class="modal" id="markdownModal" tabindex="-1" aria-labelledby="markdownModalLabel" aria-hidden="true">
                <div class="modal-dialog m-0">
                    <div class="modal-content">
                        <div class="modal-header sticky-top bg-light">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div id="markdown" class="modal-body"></div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            ${ Posts }
        </main>
        <div class="${ data.class.spacer }"></div>
        ${ Footer }
    </div>
`

export default template
