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
          As we all are at our home during this lock down period, Raxoweb is going to organize a webinar for those who want to learn new technologies and enhance their skills. We want that you all utilize your time during this lock down and be a professional developer.
       </p>
        <a href="https://forms.gle/3hCyC8FBRX4nvpNJ8" target="_blank" ><Button type="primary">Register now !</Button></a>
      </HomePageContentContainer>
      <HomePageContentContainer
        title="Benefits from this Webinar"
      >
        <BenifitsContainer />
      </HomePageContentContainer>
    </div>
  )
}

export default WebinarContainer
