import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SectionTitle from "../components/SectionTitle";
import person1 from '../images/person1.png'
import person2 from '../images/person2.png'
import person3 from '../images/person3.png'
import person4 from '../images/person5.png'

function Testimonial() {
    const data = {
        testimonials : [
            {
                id : 1,
                stars : [
                    {
                       icon1 : <i className="bi bi-star-fill"></i>,
                       icon2 : <i className="bi bi-star-fill"></i>,
                       icon3 : <i className="bi bi-star-fill"></i>,
                       icon4 : <i className="bi bi-star-fill"></i>,
                       icon5 : <i className="bi bi-star-fill"></i>,
                    },
                ],
                title : 'Layout and organized layers',
                paragraph : 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
                profileImg : person1,
                name : 'Denny Hilguston',
                info : '@denny.hil'
            },
          {
              id : 2,
              stars : [
                {
                   icon1 : <i className="bi bi-star-fill"></i>,
                   icon2 : <i className="bi bi-star-fill"></i>,
                   icon3 : <i className="bi bi-star-fill"></i>,
                   icon4 : <i className="bi bi-star-fill"></i>,
                   icon5 : <i className="bi bi-star"></i>,
                },
            ],
              title : 'Modern look & trending design',
              paragraph : 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
              profileImg : person2,
              name : 'Denny Hilguston',
              info : '@denny.hil'
          },
          {
              id : 3,
              stars : [
                {
                   icon1 : <i className="bi bi-star-fill"></i>,
                   icon2 : <i className="bi bi-star-fill"></i>,
                   icon3 : <i className="bi bi-star-fill"></i>,
                   icon4 : <i className="bi bi-star-fill"></i>,
                   icon5 : <i className="bi bi-star-fill"></i>,
                },
            ],
              title : 'Modern look & trending design',
              paragraph : 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
              profileImg : person3,
              name : 'Denny Hilguston',
              info : '@denny.hil'
          },
          {
              id : 4,
              stars : [
                {
                   icon1 : <i className="bi bi-star-fill"></i>,
                   icon2 : <i className="bi bi-star-fill"></i>,
                   icon3 : <i className="bi bi-star-fill"></i>,
                   icon4 : <i className="bi bi-star-fill"></i>,
                   icon5 : <i className="bi bi-star"></i>,
                },
            ],
              title : 'Design Quality & performance',
              paragraph : 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
              profileImg : person4,
              name : 'Denny Hilguston',
              info : '@denny.hil'
          }
        ]
    }

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
    return (
        <section id="testimonial" className="mb-6">
            <div className="container">
                <SectionTitle subtitle={'Testimonial'} title={'Meet Client Satisfaction'} />
                <Carousel
                additionalTransfrom={0}
                arrows={true}
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container"
                dotListClass=""
                draggable={true}
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={responsive}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable>
                   {data.testimonials.map((item) =>{
                    return(
                        <div className="item" key={item.id}>
                            <ul>
                                {item.stars.map((star) =>{
                                    return(
                                        <div key={item.id}>
                                        <li>{star.icon1}</li>
                                        <li>{star.icon2}</li>
                                        <li>{star.icon3}</li>
                                        <li>{star.icon4}</li>
                                        <li>{star.icon5}</li>
                                        </div>
                                    )
                                })}
                            </ul>
                            <h3>{item.title}</h3>
                            <p className="paragraph">{item.paragraph}</p>
                            <div className="review-info">
                                <div className="photo">
                                    <picture>
                                       <img src={item.profileImg.src} alt={item.name} />
                                    </picture>
                                </div>
                                <div className="text-content">
                                    <h4>{item.name}</h4>
                                    <p className="text-info">{item.info}</p>
                                </div>
                            </div>
                        </div>
                    )
                   })}
                </Carousel>
            </div>
        </section>
    )
}

export default Testimonial
