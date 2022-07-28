import logo2 from '../images/logo2.svg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useRouter } from 'next/router'

function NavbarComponent() {
        if (typeof window !== "undefined") {
            window.addEventListener('scroll', () =>{
                const navbar = document.querySelector('#nav');
                const nav = document.querySelector('.navbar')
                let scrollPosition = window.pageYOffset || window.scrollY || document.body.scrollTop || document.documentElement.scrollTop;
                if(scrollPosition > 50){
                    navbar.classList.add('scroll')
                    nav.classList.add('scroll')
                }else{
                  navbar.classList.remove('scroll')
                  nav.classList.remove('scroll')
                }
            })
        }

        const router = useRouter()

        const pathMatchRoute = (e) =>{
          console.log(router.asPath);
          e.preventDefault()
          let name = e.target.textContent.toLowerCase()
          router.push(`#${name}`)
        }

    return (
        <>
        <nav className='cg-ds2' id="nav">
            <div className="container">
                <div className="row">
                <div className="col-md-4 ">
                    <div className="content d-flex">
                    <picture>
                    <img className='logo' src={logo2.src} layout='fill' alt="logo" />
                    </picture>
                    </div>
                </div>
                <div className="col-md-6">
                    <ul className="d-flex links">
                        <li>
                          <a onClick={pathMatchRoute} href='#home'>Home</a>
                        </li>
                        <li>
                          <a onClick={pathMatchRoute} href='#features'>Features</a>
                        </li>
                        <li>
                          <a onClick={pathMatchRoute} href='#testimonial'>Testimonial</a>
                        </li>
                        <li>
                          <a onClick={pathMatchRoute} href='#payment'>Payment</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <button className="btn nav-btn">Get Started</button>
                </div>
                </div>
            </div>
        </nav>
        {/* ---------------- */}

        {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 navbar d-none">
          <Container fluid>
            <Navbar.Brand href="#">
              <picture>
                <img className='logo' src={logo2.src} layout='fill' alt="logo" />
              </picture>
            </Navbar.Brand>
            <div className="button-container">
            <button className="btn section-btn">Get Started</button>
            </div>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}>
              <h3>
               <i className="bi bi-list"></i>
              </h3>
            </Navbar.Toggle>

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
             
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link onClick={pathMatchRoute} href="#home">Home</Nav.Link>
                  <Nav.Link onClick={pathMatchRoute} href="#features">Features</Nav.Link>
                  <Nav.Link onClick={pathMatchRoute} href="#testimonial">Testimonial</Nav.Link>
                  <Nav.Link onClick={pathMatchRoute} href="#payment">Payment</Nav.Link>
                </Nav>

                <ul className='navbar-list'>
                  <li>
                    <a href="#"><i className="bi bi-facebook"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="bi bi-github"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="bi bi-dribbble"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="bi bi-twitter"></i></a>
                  </li>
                </ul>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
        </>
    )
}

export default NavbarComponent
