
import React from "react";
import Image from "next/image";
import {
  BodyContainer0,
  BodyContainer,
  Col1Row,
  Col2Row,
  BodyWrapper,
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrap,
  ImgWrap0,
  Subtitle,
  TextWrapper,
} from "./Minor_Body.elements";
import { SubHeading } from "./Minor_Body.elements";

const Minor_Body = () => {
  return (
    <>
    <BodyContainer0>
      <BodyWrapper>
        <TextWrapper>
          <Heading>About us</Heading>
          <Subtitle>
            Welcome to Chat App, a revolutionary chat app that redefines the way we communicate and connect with others. Our mission is to provide a platform where users can express themselves freely, creatively, and effortlessly, transcending the limitations of traditional text-based conversations. Founded in 2023, our team of passionate developers and designers came together with a shared vision to break barriers and make communication more engaging and enjoyable for everyone. We recognized that words alone couldn't always capture the depth of emotions and expressions we wanted to convey, and thus, ChatLibre was born.
          </Subtitle>
          <Subtitle>

          What sets chat app apart is our commitment to empowering users with a diverse range of communication tools. From expressive emojis and animated stickers to lively GIFs and voice messages, we provide a rich palette of non-verbal options to make conversations come alive. Whether you're sharing your excitement, telling a joke, or simply expressing your love, ChatLibre ensures your messages resonate with authenticity.Join our vibrant and growing community of ChatLibre users today and experience the joy of communicating without limits. Your conversations will never be the same again as you embark on a journey of creativity, connection, and freedom. Together, let's paint the world with emotions, one chat at a time!
          </Subtitle>
          <ImgWrap0>
            <Image src="https://i.imgur.com/BIPbN5D.jpg" height="800" width="800"/>
          </ImgWrap0>
            
        </TextWrapper>
      </BodyWrapper>
    </BodyContainer0>
    <BodyContainer>
      <BodyWrapper>
        <TextWrapper>
          <Heading>Our mission</Heading>
          <Subtitle>
          Our mission is to revolutionize the way people communicate and connect, empowering them to express themselves authentically and creatively without boundaries. We believe that traditional text-based conversations can sometimes fall short in capturing the depth of human emotions and expressions. Therefore, we are committed to providing a platform that transcends words and embraces the power of non-verbal communication.
          </Subtitle>
          <Subtitle>
            <ul>
              <li>Enhance Expression: We aim to enrich conversations by offering a diverse array of communication tools such as emojis, stickers, GIFs, voice messages, and doodles. By tapping into this vibrant spectrum of expression, users can communicate with greater clarity and convey their feelings more effectively.</li>
              <li>Foster Connection: We understand the significance of human connections in an increasingly digital world. ChatLibre is designed to bridge distances, strengthen relationships, and cultivate meaningful interactions. Our app enables users to feel closer to their loved ones, regardless of geographical barriers.</li>
              <li>Inspire Creativity: Creativity is at the heart of communication, and we encourage users to express themselves in novel and imaginative ways. By providing a canvas for creativity, ChatLibre empowers users to communicate uniquely and discover new facets of their personalities.</li>
              <li>Prioritize Privacy: We take the privacy and security of our users seriously. Our commitment to safeguarding their data and maintaining a safe environment for interaction is unwavering. We believe that trust is the foundation of any successful communication platform.</li>
              <li>Embrace Inclusivity: ChatLibre is for everyone. We celebrate diversity and inclusivity, ensuring that our app is accessible to people of all ages, cultures, and backgrounds. We aspire to create an environment where every user feels welcomed and valued.</li>
              <li>Evolve with Innovation: We constantly strive to stay ahead of the curve by embracing technological advancements and user feedback. By continuously refining our features and user experience, we aim to provide a chat app that remains relevant and indispensable.</li>
            </ul>
          </Subtitle>
        </TextWrapper>
      </BodyWrapper>
    </BodyContainer>
  );
    </>
  );
};

export default Minor_Body;