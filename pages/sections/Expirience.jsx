import paypal from '../images/paypal.svg'
import google from '../images/google.svg'
import dropbox from '../images/dropbox.svg'
import phone from '../images/phone.png'

function Expirience() {

    const data = {
        title : 'Experience your ultimate mobile application',
        paragraph : 'Get your blood tests delivered at let home collect samplerom the victory of the managements that supplies best design system guidelines ever.'
    }

    return (

        <section id="home">
            <div className="container">
                <div className="row">
                <div className="col-sm-12 col-md-6 item-1 d-flex flex-column justify-content-center">
                  <h2>{data.title}</h2>
                  <p>{data.paragraph}</p>
                  <div className="button-container">
                    <button className="btn section-btn">Get Started</button>
                    <button className="btn watch-btn"><span><i className="bi bi-play-circle"></i></span> Watch Video</button>
                  </div>
                  <div className="sponsored">
                    <h4>Sponsored by :</h4>
                    <ul>
                        <li>
                            <picture>
                               <img src={paypal.src} alt="paypal" />
                            </picture>
                        </li>
                        <li>
                            <picture>
                               <img src={google.src} alt="google" />
                            </picture>
                        </li>
                        <li>
                            <picture>
                               <img src={dropbox.src} alt="dropbox" />
                            </picture>
                        </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 item-2">
                    <picture>
                        <img src={phone.src} alt="phone" />
                    </picture>
                </div>
                </div> 
            </div>
        </section>
    )
}

export default Expirience
