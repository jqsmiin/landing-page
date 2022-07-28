import Head from "next/head"
import Navbar from './Navbar'
import Expirience from "../sections/Expirience"
import Features from "../sections/Features"
import CoreFeatures from "../sections/CoreFeatures"
import QualityFeatures from "../sections/QualityFeatures"
import Feature from "../sections/Feature"
import HowItWorks from "../sections/HowItWorks"
import Testimonial from '../sections/Testimonial'
import Payment from "../sections/Payment"
import Plans from "../sections/Plans"
import AccordionSection from "../sections/Accordion"
import Footer from "../sections/Footer"

function Layout() {
    return (
        <>
        <Head>
        <title>Startup Landing</title>
        </Head>
          <Navbar />
          <Expirience />
          <Features />
          <CoreFeatures />
          <QualityFeatures />
          <Feature />
          <HowItWorks />
          <Testimonial />
          <Payment />
          <Plans />
          <AccordionSection />
          <Footer />
        </>
    )
}

export default Layout
