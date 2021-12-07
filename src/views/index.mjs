import Navbar from '../components/Navbar.mjs'
import Footer from '../components/Footer.mjs'
import Hero from '../components/Hero.mjs'

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
            ${ Hero }
        </main>
        <div class="${ data.class.spacer }"></div>
        ${ Footer }
    </div>
`

export default template
