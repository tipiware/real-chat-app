import React from "react";
import { GrApple, GrAndroid } from "react-icons/gr";
import Image from "next/image";
import {
  DownloadContainer,
  DownloadContainer2,
  DownloadWrapper,
  Col1Row,
  Column1,
  TextWrapper,
  SubHeading,
  Heading,
  Paragraph,
  Col2Row,
  Column2,
  ImgWrap,
  TermsAndConditions,
  DownloadButtonWrapper,
  DownloadButtonIos,
  DownloadButtonAndroid,
} from "./Main_Body.elements";

const Main_Body = () => {

  return (
    <>
    <DownloadContainer>
      <DownloadWrapper>
        <Col1Row>
          <Column1>
            <TextWrapper>
              <SubHeading>Chat App</SubHeading>
              <Heading>Our services</Heading>
              <Paragraph>
                Welcome to ChatConnect, your ultimate messaging app for seamless communication with friends and loved ones. Stay connected, share moments, and express yourself in real-time with our user-friendly interface and cutting-edge features. Join our vibrant community and experience the future of chatting today!
              </Paragraph>
              <TermsAndConditions>Without any installation, you can now connect to anyone, anytime and anywhere.</TermsAndConditions>
            </TextWrapper>
          </Column1>
        </Col1Row>
        <Col2Row>
          <Column2>
            <ImgWrap>
              <Image src="https://i.imgur.com/BIPbN5D.jpg" height="500" width="500"/>
            </ImgWrap>
          </Column2>
        </Col2Row>
      </DownloadWrapper>
    </DownloadContainer>
    <DownloadContainer2>
        <DownloadWrapper>
          <Col1Row>
            <Column1>
              <TextWrapper>
                <Heading>Why us?!</Heading>
                <Paragraph>
                  Break free from words and embrace a new way of communicating with ChatLibre, the innovative text-free chat app. Express yourself through emojis, stickers, GIFs, voice messages, and even doodles, allowing your personality to shine in every conversation. Experience the joy of non-verbal interactions with friends and family, where a picture is worth a thousand words. Download ChatLibre now and unlock a world of creative and fun-filled conversations!
                </Paragraph>
              </TextWrapper>
            </Column1>
          </Col1Row>
          <Col2Row>
            <Column2>
              <ImgWrap>
                <Image src="https://i.imgur.com/BIPbN5D.jpg" height="500" width="500"/>
              </ImgWrap>
            </Column2>
          </Col2Row>
        </DownloadWrapper>
      </DownloadContainer2>
      </>
  );
};

export default Main_Body;