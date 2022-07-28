import feature from '../images/feature.png'


function Feature() {
    const data = {
        subtitle : 'Core Features',
        title : 'Smart Jackpots that you may love this anytime & anywhere',
        paragraph : 'Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever. Get your tests delivered at let home collect sample.',
    }
    return (
       <section id="feature" className='mb-6'>
         <div className="container">
            <div className="row">
            <div className="col-md-6 custom-item-1">
                <h3 className='subtitle'>{data.subtitle}</h3>
                <h1 className='title'>{data.title}</h1>
                <p className='paragraph'>{data.paragraph}</p>
                <button className='btn section-btn'>Get Started</button>
            </div>
            <div className="col-md-6 item-2">
                <picture>
                    <img className='w-100' src={feature.src} alt="feature" />
                </picture>
            </div>
            </div>
         </div>
       </section>
    )
}

export default Feature
