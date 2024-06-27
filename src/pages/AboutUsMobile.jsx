import React from 'react';
import ButtonPair from '../components/ButtonPair';
import image1 from '../assets/Page1.png';
import image2 from '../assets/Page2.png'; 
import image3 from '../assets/Page3.png'; 
import image4 from '../assets/Page4.png'; 
import image5 from '../assets/Page5.png'; 
import image6 from '../assets/Page6.png'; 
import image7 from '../assets/Page7.png'; 
import image8 from '../assets/Page8.png'; 
import bgImage from '../assets/BackGround.png'; 

const slides = [
  {
    id: 1,
    title: 'Novel Management System',
    content: 'Welcome to our company! We are dedicated to providing the best service possible. Our team is composed of experienced professionals who are passionate about what they do. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et ipsum justo. Morbi faucibus, dolor.',
    image: image1,
    bgImage: bgImage
  },
  {
    id: 2,
    title: 'Character Management',
    content: 'We strive to innovate and lead in our industry. Our vision is to create a sustainable and efficient future through our solutions. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et ipsum justo. Morbi faucibus, dolor.',
    image: image2,
    bgImage: bgImage
  },
  { 
    id: 3, 
    title: 'Dynamic Notes and Planning Tools', 
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et ipsum justo. Morbi faucibus, dolor et cursus scelerisque, lectus tellus ultricies orci, dapibus imperdiet elit tortor.',
    image: image3,
    bgImage: bgImage
  },
  { 
    id: 4, 
    title: 'Character Relation <br/> Visualizer', 
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et ipsum justo. Morbi faucibus, dolor et cursus scelerisque, lectus tellus ultricies orci, dapibus imperdiet elit tortor.', 
    image: image4,
    bgImage: bgImage
  },
  { 
    id: 5, 
    title: 'Story Building Assistance', 
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et ipsum justo. Morbi faucibus, dolor et cursus scelerisque, lectus tellus ultricies orci, dapibus imperdiet elit tortor non magna. Ut a facilisis felis. Nulla ultrices et.', 
    image: image5,
    bgImage: bgImage
  },
  { 
    id: 6, 
    title: 'Integrated Writing and <br/> Editing Environment', 
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et ipsum justo. Morbi faucibus, dolor et cursus scelerisque, lectus tellus ultricies orci, dapibus imperdiet elit tortor.', 
    image: image6,
    bgImage: bgImage
  },
  { 
    id: 7, 
    title: 'Novel Importing and Data<br/> Utilization', 
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et ipsum justo. Morbi faucibus, dolor et cursus scelerisque, lectus tellus ultricies orci, dapibus imperdiet elit tortor.', 
    image: image7,
    bgImage: bgImage
  },
  { 
    id: 8, 
    title: 'Community Engagement <br/> through Word War', 
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et ipsum justo. Morbi faucibus, dolor et cursus scelerisque, lectus tellus ultricies orci, dapibus imperdiet elit tortor.', 
    image: image8,
    bgImage: bgImage
  }
];

const AboutUsMobile = () => {
  return (
    <div className="about-us-mobile">
      {slides.map(slide => (
        <div 
          key={slide.id} 
          className="about-us-mobile-slide" 
          style={{ backgroundImage: `url(${slide.bgImage})` }}
        >
          <img src={slide.image} alt={slide.title} className="about-us-mobile-image" />
          <div className="about-us-mobile-content">
            <h1 dangerouslySetInnerHTML={{ __html: slide.title }} />
            <p>{slide.content}</p>
            <ButtonPair />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutUsMobile;
