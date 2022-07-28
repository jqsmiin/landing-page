function Footer() {
   const data = {
    links : [
        {
            id : 1,
            title : 'About Us',
            list : [
                {
                    id : 1,
                    list1 : 'Support Center',
                    list2 : 'Customer Support',
                    list3 : 'About Us',
                    list4 : 'Copyright',
                    list5 : 'Popular Campaign',
                }
            ]
        },
        {
            id : 2,
            title : 'Our Information',
            list : [
                {
                    id : 2,
                    list1 : 'Return Policy',
                    list2 : 'Privacy Policy',
                    list3 : 'Terms & Conditions',
                    list4 : 'Site Map',
                    list5 : 'Store Hours',
                }
            ]
        },
        {
            id : 3,
            title : 'My Account',
            list : [
                {
                    id : 3,
                    list1 : 'Press inquiries',
                    list2 : 'Social media',
                    list3 : 'directories',
                    list4 : 'Images & B-roll',
                    list5 : 'Permissions',
                }
            ]
        },
        {
            id : 4,
            title : 'Policy',
            list : [
                {
                    id : 4,
                    list1 : 'Application security',
                    list2 : 'Software principles',
                    list3 : 'Unwanted software policy',
                    list4 : 'Responsible supply chain',
                    list5 : 'Popular Campaign',
                }
            ]
        }
    ]
   }

    return (
        <footer id="main-footer">
            <div className="container">
               <div className="row items">
                {data.links.map((link) =>{
                   return(
                    <div className="col-md-3 col-sm-6 col-6 item" key={link.id}>
                      <h3>{link.title}</h3>
                      <ul>
                        {link.list.map((item) =>{
                            return(
                                <div key={item.id}>
                                <li>{item.list1}</li>
                                <li>{item.list2}</li>
                                <li>{item.list3}</li>
                                <li>{item.list4}</li>
                                <li>{item.list5}</li>
                                </div>
                            )
                        })}
                      </ul>
                    </div>
                   )
                })}
                <div className="col-md-12 text-center item-2">
                    <p>All right reserved - Design & Developed byRedQ, Inc</p>
                </div>
               </div>
            </div>
        </footer>
    )
}

export default Footer
