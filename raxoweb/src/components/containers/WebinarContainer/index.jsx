import React from 'react'
import WebinarFistPage from '@modules/WebinarFirstPage'
import HomePageContentContainer from "@containers/HomePageContentContainer";
import { Button } from 'antd'
import BenifitsContainer from '@containers/BenifitsContainer';
const WebinarContainer = () => {
  return (
    <div className="webinar-main-container">
      <WebinarFistPage />
      <HomePageContentContainer
        title="Register yourself for the Webinar"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, fugit aspernatur quo sint voluptatibus cum suscipit necessitatibus voluptates ducimus dolorum rerum dicta perspiciatis fugiat. Recusandae iure reiciendis similique illo dolore.
       </p>
        <Button type="primary">Know More</Button>
      </HomePageContentContainer>
      <HomePageContentContainer
        title="Benifits from this Webinar"
      >
        <BenifitsContainer />
      </HomePageContentContainer>
    </div>
  )
}

export default WebinarContainer
