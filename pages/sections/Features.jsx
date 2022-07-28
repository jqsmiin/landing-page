import SectionTitle from "../components/SectionTitle"
import vector from '../images/vector-editing.svg'
import monitoring from '../images/monitoring.svg'
import short from '../images/short-period.svg'

const data = {
 features : [
    {
        id : 1,
        image : vector,
        title : 'Vector Editing',
        subtitle : 'Get your blood tests delivered at home collect a sample from the your blood tests.'
    },
    {
        id : 2,
        image : monitoring,
        title : 'Customize & Monitoring',
        subtitle : 'Get your blood tests delivered at home collect a sample from the your blood tests.'
    },
    {
        id : 3,
        image : short,
        title : 'Quality & Short-period',
        subtitle : 'Get your blood tests delivered at home collect a sample from the your blood tests.'
    }
 ]
}

function Features() {
    return (
       <section id="features">
         <div className="container">
            <SectionTitle subtitle={'Quality Features'} title={'Meet exciting feature of app'} />
            <div className="row">
                {data.features.map((feature) =>{
                    return(
                        <div className="col-md-4 col-sm-6 item" key={feature.id}>
                        <picture>
                          <img src={feature.image.src} alt={feature.title} />
                        </picture>
                          <h2>{feature.title}</h2>
                          <p>{feature.subtitle}</p>
                      </div>
                    )
                })}
            </div>
         </div>
       </section>
    )
}

export default Features
