import SectionTitle from "../components/SectionTitle"

function Plans() {
   const data = {
    plans : [
        {
            id: 1,
            planTitle : 'Free Plan',
            planDescription : 'For Small teams or office',
            checks : [
                {
                    icon1: <i className="bi bi-check2"></i>,
                    icon2 : <i className="bi bi-x-circle"></i>,
                    text1 : 'Ultimate access to all course, exercises and assessments',
                    text2 : 'Free access for all kind of exercise corrections with downloads.',
                    text3 : 'Total assessment corrections with free download access system',
                    text4 : 'Unlimited download of courses on the mobile app contents',
                    text5 : 'Download and print courses and exercises in PDF'
                }
            ]
        },
        {
            id: 2,
            planTitle : 'Premium Plan',
            planDescription : 'For startup enterprise',
            recomended : 'Recomended',
            priceTitle : 'Starting from',
            price : '$29.99/mo',
            checks : [
                {
                    icon1: <i className="bi bi-check2"></i>,
                    icon2 : <i className="bi bi-check2"></i>,
                    text1 : 'Ultimate access to all course, exercises and assessments',
                    text2 : 'Free access for all kind of exercise corrections with downloads.',
                    text3 : 'Total assessment corrections with free download access system',
                    text4 : 'Unlimited download of courses on the mobile app contents',
                    text5 : 'Download and print courses and exercises in PDF'
                }
            ]
        }
    ]
   }

    return (
       <section id="plans" className="mb-6">
         <div className="container">
            <SectionTitle subtitle={"What's the function"} title={"Let's see how it works"} />
            <div className="row">
               {data.plans.map((plan) =>{
                return(
                 <div className={`col-md-6 item item-${plan.id}`} key={plan.id}>
                    <div className="box-plan-container">
                        <div className="plan-title">
                         <div className="first-title">
                            <h4>{plan.recomended ? plan.recomended : ''}</h4>
                            <h3>{plan.planTitle}</h3>
                            <p>{plan.planDescription}</p>
                         </div>
                          <div className="second-title">
                            <p>{plan.priceTitle ? plan.priceTitle : ''}</p>
                            <p>{plan.price ? plan.price : ''}</p>
                          </div>
                        </div>
                        <ul>
                            {plan.checks.map((item) =>{
                              return(
                                <div key={plan.id}>
                                <li><span>{item.icon1}</span>{item.text1}</li>
                                <li><span>{item.icon1}</span>{item.text2}</li>
                                <li><span>{item.icon1}</span>{item.text3}</li>
                                <li><span>{item.icon2}</span>{item.text4}</li>
                                <li><span>{item.icon2}</span>{item.text5}</li>
                                </div>
                              )
                            })}
                        </ul>
                        <div className="text-center">
                        <button className="btn section-btn">Sign Up</button>
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

export default Plans
