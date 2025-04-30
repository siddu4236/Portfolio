import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import c1 from '../assets/c1.png'
import c2 from '../assets/c2.png'
import c3 from '../assets/c33.png'
import c4 from '../assets/c4.png'

const CerSlide = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  height: auto;
  margin-bottom:70px;
`;


const Head = styled.div`
  font-size: 60px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: rgb(242, 243, 244);
`;

const Description = styled.p`
  font-size: 25px;
  text-align: center;
  color: rgb(177, 178, 179);
  margin: 20px auto 50px auto;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CertImage = styled.img`
  width: 100%;
  max-width: 1100px;
  max-height: 650px; // Increased height for a larger certificate
  height: auto;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
`;


const Certificate = () => {
  const certificates = [
    c1,
    c2,
    c3,
    c4,
  ];

  return (
    <CerSlide>
      <Head>Certifications</Head>
      <Description>My journey in learning and skill development has been enhanced by various certifications that have contributed to both my personal and professional growth. Below are the certificates I have earned:</Description>
      
      <Swiper
  modules={[Navigation]}
  spaceBetween={30}
  slidesPerView={2} // Always show only one certificate
  navigation
>
        {certificates.map((src, index) => (
          <SwiperSlide key={index}>
            <ImageWrapper>
              <CertImage src={src} alt={`Certificate ${index + 1}`} />
            </ImageWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </CerSlide>
  );
};

export default Certificate;
