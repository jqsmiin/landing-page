import SectionTitle from "../components/SectionTitle"
import time from '../images/time.svg'
import cup from '../images/cup.svg'
import upload from '../images/upload.svg'
import settings from '../images/settings.svg'
import boost from '../images/boost.svg'
import question from '../images/question.svg'


function QualityFeatures() {
    const data = {
        features : [
            {
                id : 1,
                title : 'Smart Features',
                paragraph : 'Get your blood tests delivered at let home collect sample from the victory of the managements.',
                icon : time
            },
            {
                id : 2,
                title : 'Fast Performance',
                paragraph : 'Get your blood tests delivered at let home collect sample from the victory of the managements.',
                icon : cup
            },
            {
                id : 3,
                title : 'Unlimited Content',
                paragraph : 'Get your blood tests delivered at let home collect sample from the victory of the managements.',
                icon : upload
            },
            {
                id : 4,
                title : 'Unlimited Customization',
                paragraph : 'Get your blood tests delivered at let home collect sample from the victory of the managements.',
                icon : settings
            },
            {
                id : 5,
                title : 'Boost Productivity',
                paragraph : 'Get your blood tests delivered at let home collect sample from the victory of the managements.',
                icon : boost
            }, 
            {
                id : 6,
                title : 'Customer Support',
                paragraph : 'Get your blood tests delivered at let home collect sample from the victory of the managements.',
                icon : question
            }
        ]
    }

    return (
      <section id="quality-features" className="mb-6">
        <div className="container">
            <SectionTitle subtitle={'Quality Features'} title={'Meet exciting feature of app'} />
            <div className="row">
                {data.features.map((item) =>{
                  return(
                    <div className="col-md-6 col-sm-6 col-lg-4 box-container" key={item.id}>
                        <div className="box-item">
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
                    </div>
                  )
                })}
            </div>
        </div>
      </section>
    )
}

export default QualityFeatures
