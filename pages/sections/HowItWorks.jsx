import SectionTitle from "../components/SectionTitle"

function HowItWorks() {
    const data = {
        works : [
            { 
                id : '01',
                title : 'Set disbursement Instructions',
                paragraph : 'Get your blood tests delivered at home collect a sample from the your blood tests.'
            },
            { 
                id : '02',
                title : 'Assembly retrieves funds from your account',
                paragraph : 'Get your blood tests delivered at home collect a sample from the your blood tests.'
            },  { 
                id : '03',
                title : 'Assembly initiates disbursement',
                paragraph : 'Get your blood tests delivered at home collect a sample from the your blood tests.'
            },
            { 
                id :'04',
                title : 'Customer receives funds payment',
                paragraph : 'Get your blood tests delivered at home collect a sample from the your blood tests.'
            }
        ]
    }

    return (
       <section id="works" className="mb-6">
         <div className="container">
            <SectionTitle subtitle={'Whats the function'} title={"Let's see how it works"} />
            <div className="row">
                {data.works.map((data) =>{
                    return(
                        <div className="col-lg-3 col-sm-6 col-md-6 item" key={data.id}>
                            <h1>{data.id}</h1>
                            <h3>{data.title}</h3>
                            <p>{data.paragraph}</p>
                        </div>
                    )
                })}
            </div>
         </div>
       </section>
    )
}

export default HowItWorks
