import SectionTitle from "../components/SectionTitle"
import Accordion from 'react-bootstrap/Accordion';

function AccordionSection() {
    return (
        <section id="acordion" className="mb-6">
          <div className="container">
            <SectionTitle subtitle={'Get your question answer'} title={'Frequently asked question'} />
              <Accordion alwaysOpen defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>How to contact with riders emergency ?</Accordion.Header>
                  <Accordion.Body>
                    Get your website ads tests delivered at let collect sample from the victory of the managements that supplies best design system which guidelines ever with multiple features.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>App installation failed, how to update system information?</Accordion.Header>
                  <Accordion.Body>
                    Rhino skin maybe thick but it can be quite sensitive to sunburns and insect bites which is why they like wallow so much when the mud dries it acts as protection from the sunburns and insects.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Website response taking time, how to improve?</Accordion.Header>
                  <Accordion.Body>
                    Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>New update fixed all bug and issues</Accordion.Header>
                  <Accordion.Body>
                    If you re looking to hunt a unicorn, but dont know where to begin, try Lake Superior State University in Sault Ste. Marie, Michigan. Since 1971, the university has issued permits to unicorn questers.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
          </div>
        </section>
    )
}

export default AccordionSection
