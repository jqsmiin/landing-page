import analytics from '../images/analytics.png'
import suitcase from '../images/suitcase.svg'
import crown from '../images/crown.svg'


function CoreFeatures() {
    const data = {
        subtitle : 'Core Features',
        title : 'Smart Jackpots that you may love this anytime & anywhere',
        content : [
            {
                id : 1,
                title : 'Smart Features',
                paragraph : 'Get your blood tests delivered at let home collect sample from the victory of the managements. your blood tests.',
                icon : suitcase
            },
            {
                id : 2,
                title : 'Secure Contents',
                paragraph : 'Get your blood tests delivered at let home collect sample from the victory of the managements. your blood tests.',
                icon : crown
            }
        ]
    }

    return (
        <section id="core-features" className='mb-6'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6 item-1">
                     <picture>
                        <img src={analytics.src} alt='analytics' />
                     </picture>
                    </div>
                    <div className="col-md-6 col-sm-6 item-2">
                      <h3 className='subtitle'>{data.subtitle}</h3>
                      <h1 className='title'>{data.title}</h1>
                      <div className="box-container">
                        {data.content.map((item) =>{
                            return(
                             <div className='box-item' key={item.id}>
                                <div className="icon">
                                    <picture>
                                        <img src={item.icon.src} alt={item.title} />
                                    </picture>
                                </div>
                                <div className="text-content">
                                    <h3>{item.title}</h3>
                                    <p>{item.paragraph}</p>
                                </div>
                             </div>
                            )
                        })}
                      </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CoreFeatures
