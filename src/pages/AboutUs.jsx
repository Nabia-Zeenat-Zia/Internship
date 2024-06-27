import React from 'react';
import './CSS Files/AboutUs.css';
import ButtonPair from '../components/ButtonPair';
import image1 from '../assets/Page1.png';
import image2 from '../assets/Page2.png';
import image3 from '../assets/Page3.png';
import image4 from '../assets/Page4.png';
import image5 from '../assets/Page5.png';
import background from '../assets/BackGround.png';

const LeftImageRightContent = ({ title, content, image, background }) => {
  return (
    <div className="about-us-content-section" style={{ backgroundImage: `url(${background})` }}>
      <div className="left-side">
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        <p>{content}</p>
        <ButtonPair />
      </div>
      <div className="right-side">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

const RightImageLeftContent = ({ title, content, image, background }) => {
  return (
    <div className="about-us-content-section" style={{ backgroundImage: `url(${background})` }}>
      <div className="side-image-left">
        <img src={image} alt={title} />
      </div>
      <div className="right-side-content">
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        <p>{content}</p>
        <ButtonPair />
      </div>
    </div>
  );
};

const AboutUs = () => {
  const slides = [
    {
      id: 1,
      title: 'Novel Management System',
      content: 'Welcome to our company! We are dedicated to providing the best service possible. Our team is composed of experienced professionals who are passionate about what they do. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et ipsum justo. Morbi faucibus, dolor.',
      image: image1,
      background: background
    },
    {
      id: 2,
      title: 'Character Management',
      content: 'We strive to innovate and lead in our industry. Our vision is to create a sustainable and efficient future through our solutions. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et ipsum justo. Morbi faucibus, dolor.',
      image: image2,
      background: background
    },
    {
      id: 3,
      title: 'Dynamic Notes and Planning Tools',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et ipsum justo. Morbi faucibus, dolor et cursus scelerisque, lectus tellus ultricies orci, dapibus imperdiet elit tortor.',
      image: image3,
      background: background
    },
    {
      id: 4,
      title: 'Character Relation <br/> Visualizer',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et ipsum justo. Morbi faucibus, dolor et cursus scelerisque, lectus tellus ultricies orci, dapibus imperdiet elit tortor.',
      image: image4,
      background: background
    },
    {
      id: 5,
      title: 'Story Building Assistance',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et ipsum justo. Morbi faucibus, dolor et cursus scelerisque, lectus tellus ultricies orci, dapibus imperdiet elit tortor non magna. Ut a facilisis felis. Nulla ultrices et.',
      image: image5,
      background: background
    },
  ];

  return (
    <div className="about-us">
      <LeftImageRightContent
        title={slides[0].title}
        content={slides[0].content}
        image={slides[0].image}
        background={slides[0].background}
      />
      <RightImageLeftContent
        title={slides[1].title}
        content={slides[1].content}
        image={slides[1].image}
        background={slides[1].background}
      />
      <LeftImageRightContent
        title={slides[2].title}
        content={slides[2].content}
        image={slides[2].image}
        background={slides[2].background}
      />
      <RightImageLeftContent
        title={slides[3].title}
        content={slides[3].content}
        image={slides[3].image}
        background={slides[3].background}
      />
      <LeftImageRightContent
        title={slides[4].title}
        content={slides[4].content}
        image={slides[4].image}
        background={slides[4].background}
      />
    </div>
  );
};

export default AboutUs;
