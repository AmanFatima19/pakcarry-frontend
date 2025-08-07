import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";

function FAQs() {
  return (
    <div>
      <h2
        className="text-4xl text-center"
        style={{ fontWeight: "700", marginBottom: "50px", marginTop: "22px" }}
      >
        Frequently Asked Questions
      </h2>
      <div className="flex justify-center">
        <div className="w-full max-w-2xl">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                What are the advantages of PakCarry service?
              </Accordion.Header>
              <Accordion.Body>
                PakCarry is a secure platform that helps to send parcels across
                Pakistan. It is beneficial for both senders and fellow
                travelers: senders enjoy fast, cheap, and simple delivery to any
                city in Pakistan, and fellow travelers earn during their trip.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Is it possible to use PakCarry through the app?
              </Accordion.Header>
              <Accordion.Body>
                Yes, PakCarry is currently accessible via the website, but we
                plan to launch a mobile app in the future for a more seamless
                experience. Stay tuned for updates!
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                How can I contact PakCarry customer support or share feedback?
              </Accordion.Header>
              <Accordion.Body>
                You need to open the PakCarry website and go to the "Contact"
                section and fill out the form.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>How are parcels sent?</Accordion.Header>
              <Accordion.Body>
                Parcels are sent through verified travelers who are matched
                based on their route and availability. Once a traveler accepts
                the request, they securely deliver the package to the
                destination, ensuring a safe and efficient process.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                Are there any delivery notifications?
              </Accordion.Header>
              <Accordion.Body>
                Yes, PakCarry provides real-time delivery notifications to keep
                senders and recipients informed. Users receive updates at key
                stages, including traveler acceptance, parcel pickup, and
                successful delivery.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                What items are prohibited for delivery via PakCarry?
              </Accordion.Header>
              <Accordion.Body>
                PakCarry strictly prohibits the delivery of illegal, hazardous,
                or restricted items. This includes weapons, explosives, drugs,
                counterfeit goods, perishable items, and any substances banned
                by city regulations. Users must comply with the destination
                city's legal requirements to ensure safe and lawful delivery.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>
                Can I send items internationally through PakCarry?
              </Accordion.Header>
              <Accordion.Body>
                NO.Currently, PakCarry focuses on domestic package delivery
                within Pakistan. International shipping may be considered in
                future updates.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>
                Can I send items on an urgent basis using PakCarry?
              </Accordion.Header>
              <Accordion.Body>
                The urgency of the weight-sharing arrangement depends on the
                available travelers during that time.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8">
              <Accordion.Header>
                How does PakCarry ensure the security and reliability of the
                process?
              </Accordion.Header>
              <Accordion.Body>
                PakCarry implements a rating and review system. This system
                allows senders to choose trustworthy travelers, ensuring the
                security and reliability of the weight-sharing process.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
