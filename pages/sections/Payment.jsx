import payment from '../images/payment.png'

const data = {
    subtitle : 'Payment Security',
    title : 'Secure Payment Transaction System with #1 Ranking',
    paragraph : 'Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever. Get your tests delivered at let home collect sample.',
}

function Payment() {
    return (
        <section id="payment" className="mb-6">
            <div className="container">
              <div className="row">
                <div className="col-md-6 item-1">
                   <picture>
                    <img className='w-100' src={payment.src} alt="payment" />
                   </picture>
                </div>
                <div className="col-md-6 custom-item-1">
                    <h3 className='subtitle'>{data.subtitle}</h3>
                    <h1 className='title'>{data.title}</h1>
                    <p className='paragraph'>{data.paragraph}</p>
                    <button className='btn section-btn'>Read More</button>
                </div>
              </div>
            </div>
        </section>
    )
}

export default Payment
