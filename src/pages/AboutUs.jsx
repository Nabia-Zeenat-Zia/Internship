// import React, { useEffect, useState } from 'react';
// import './CSS Files/AboutUs.css';
// import ButtonPair from '../components/ButtonPair';
// import image1 from '../assets/Page1.png';
// import image2 from '../assets/Page2.png';
// import image3 from '../assets/Page3.png';
// import image4 from '../assets/Page4.png';
// import image5 from '../assets/Page5.png';
// import image6 from '../assets/Page6.png';
// import image7 from '../assets/Page7.png';
// import image8 from '../assets/Page8.png';

// const AboutUs = () => {
//   const slides = [
//     { id: 1, title: 'Novel Management System', content: 'Welcome to our company! We are dedicated to providing the best service possible. Our team is composed of experienced professionals who are passionate about what they do. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et ipsum justo. Morbi faucibus, dolor.', image: image1 },
//     { id: 2, title: 'Character Management', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et ipsum justo. Morbi faucibus, dolor et cursus scelerisque, lectus tellus ultricies orci, dapibus imperdiet elit tortor non magna. Ut a facilisis felis. Nulla ultrices et ex a scelerisque.', image: image2 },
//     { id: 3, title: 'Dynamic Notes and Planning <br/>Tools', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et ipsum justo. Morbi faucibus, dolor et cursus scelerisque, lectus tellus ultricies orci, dapibus imperdiet elit tortor.', image: image3 },
//     { id: 4, title: 'Character Relation <br/> Visualizer', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et ipsum justo. Morbi faucibus, dolor et cursus scelerisque, lectus tellus ultricies orci, dapibus imperdiet elit tortor.', image: image4 },
//     { id: 5, title: 'Story Building Assistance', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et ipsum justo. Morbi faucibus, dolor et cursus scelerisque, lectus tellus ultricies orci, dapibus imperdiet elit tortor non magna. Ut a facilisis felis. Nulla ultrices et.', image: image5 },
//     { id: 6, title: 'Integrated Writing and <br/> Editing Environment', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et ipsum justo. Morbi faucibus, dolor et cursus scelerisque, lectus tellus ultricies orci, dapibus imperdiet elit tortor.', image: image6 },
//     { id: 7, title: 'Novel Importing and Data<br/> Utilization', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et ipsum justo. Morbi faucibus, dolor et cursus scelerisque, lectus tellus ultricies orci, dapibus imperdiet elit tortor.', image: image7 },
//     { id: 8, title: 'Community Engagement <br/> through Word War', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et ipsum justo. Morbi faucibus, dolor et cursus scelerisque, lectus tellus ultricies orci, dapibus imperdiet elit tortor.', image: image8 }
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [slides.length]);

//   return (
//     <div className="about-us">
//       {slides.map((slide, index) => (
//         <div key={slide.id} className={`about-us-content-section ${index === currentSlide ? 'active' : ''}`}>
//           {index % 2 === 0 ? (
//             <>
//               <div className="left-side">
//                 <h1 dangerouslySetInnerHTML={{ __html: slide.title }} />
//                 <p>{slide.content}</p>
//                 <ButtonPair />
//               </div>
//               <div className="right-side">
//                 <img src={slide.image} alt={slide.title} />
//               </div>
//             </>
//           ) : (
//             <>
//               <div className="left-image-side">
//                 <img src={slide.image} alt={slide.title} />
//               </div>
//               <div className="right-content-side">
//                 <h1 dangerouslySetInnerHTML={{ __html: slide.title }} />
//                 <p>{slide.content}</p>
//                 <ButtonPair />
//               </div>
//             </>
//           )}
//         </div>
//       ))}

//       <div className="indicators">
//         {slides.map((_, index) => (
//           <span key={index} className={`indicator ${index === currentSlide ? 'active' : ''}`}></span>
//         ))}
//       </div>

//       {/* Navigation bar for screens less than 280px */}
//       {windowWidth < 280 && (
//         <div className="navbar">
//           <div className="navbar-left">
//             {/* Logo or site name */}
//             <div className="logo">
//               <img src="/path/to/logo.png" alt="Logo" />
//             </div>
//           </div>
//           <div className="navbar-right">
//             {/* Profile section */}
//             <div className="profile">
//               <button className="profile-button" onClick={() => console.log('Profile clicked')}>
//                 Profile
//               </button>
//               {/* Dropdown menu for navigation links */}
//               <div className="dropdown-content">
//                 {slides.map((slide) => (
//                   <a key={slide.id} href="#">{slide.title}</a>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AboutUs;
// import React, { useEffect, useState } from 'react';
// import './CSS Files/AboutUs.css';
// import ButtonPair from '../components/ButtonPair';
// import image1 from '../assets/Page1.png';
// import image2 from '../assets/Page2.png';
// import image3 from '../assets/Page3.png';
// import image4 from '../assets/Page4.png';
// import image5 from '../assets/Page5.png';
// import image6 from '../assets/Page6.png';
// import image7 from '../assets/Page7.png';
// import image8 from '../assets/Page8.png';

// const AboutUs = () => {
//   const slides = [
//     { id: 1, title: 'Novel Management System', content: 'Welcome to our company! We are dedicated to providing the best service possible. Our team is composed of experienced professionals who are passionate about what they do. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et ipsum justo. Morbi faucibus, dolor.', image: image1 },
//     { id: 2, title: 'Character Management', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et ipsum justo. Morbi faucibus, dolor et cursus scelerisque, lectus tellus ultricies orci, dapibus imperdiet elit tortor non magna. Ut a facilisis felis. Nulla ultrices et ex a scelerisque.', image: image2 },
//     { id: 3, title: 'Dynamic Notes and Planning <br/>Tools', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et ipsum justo. Morbi faucibus, dolor et cursus scelerisque, lectus tellus ultricies orci, dapibus imperdiet elit tortor.', image: image3 },
//     { id: 4, title: 'Character Relation <br/> Visualizer', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et ipsum justo. Morbi faucibus, dolor et cursus scelerisque, lectus tellus ultricies orci, dapibus imperdiet elit tortor.', image: image4 },
//     { id: 5, title: 'Story Building Assistance', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et ipsum justo. Morbi faucibus, dolor et cursus scelerisque, lectus tellus ultricies orci, dapibus imperdiet elit tortor non magna. Ut a facilisis felis. Nulla ultrices et.', image: image5 },
//     { id: 6, title: 'Integrated Writing and <br/> Editing Environment', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et ipsum justo. Morbi faucibus, dolor et cursus scelerisque, lectus tellus ultricies orci, dapibus imperdiet elit tortor.', image: image6 },
//     { id: 7, title: 'Novel Importing and Data<br/> Utilization', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et ipsum justo. Morbi faucibus, dolor et cursus scelerisque, lectus tellus ultricies orci, dapibus imperdiet elit tortor.', image: image7 },
//     { id: 8, title: 'Community Engagement <br/> through Word War', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et ipsum justo. Morbi faucibus, dolor et cursus scelerisque, lectus tellus ultricies orci, dapibus imperdiet elit tortor.', image: image8 }
//   ];

//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <div className="about-us">
//       {slides.map((slide) => (
//         <div key={slide.id} className="about-us-content-section">
//           {slide.id % 2 === 1 ? (
//             <>
//               <div className="left-side">
//                 <h1 dangerouslySetInnerHTML={{ __html: slide.title }} />
//                 <p>{slide.content}</p>
//                 <ButtonPair />
//               </div>
//               <div className="right-side">
//                 <img src={slide.image} alt={slide.title} />
//               </div>
//             </>
//           ) : (
//             <>
//               <div className="left-side">
//                 <img src={slide.image} alt={slide.title} />
//               </div>
//               <div className="right-side">
//                 <h1 dangerouslySetInnerHTML={{ __html: slide.title }} />
//                 <p>{slide.content}</p>
//                 <ButtonPair />
//               </div>
//             </>
//           )}
//         </div>
//       ))}

//       {/* Navigation bar for screens less than 280px */}
//       {windowWidth < 280 && (
//         <div className="navbar">
//           <div className="navbar-left">
//             {/* Logo or site name */}
//             <div className="logo">
//               <img src="/path/to/logo.png" alt="Logo" />
//             </div>
//           </div>
//           <div className="navbar-right">
//             {/* Profile section */}
//             <div className="profile">
//               <button className="profile-button" onClick={() => console.log('Profile clicked')}>
//                 Profile
//               </button>
//               {/* Dropdown menu for navigation links */}
//               <div className="dropdown-content">
//                 {slides.map((slide) => (
//                   <a key={slide.id} href="#">{slide.title}</a>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AboutUs;
// import './CSS Files/AboutUs.css';
// import ButtonPair from '../components/ButtonPair';
// import image1 from '../assets/Page1.png';
// import image2 from '../assets/Page2.png';

// const AboutUs = () => {
//     const slide = [
//         {
//           id: 1,
//           title: 'Novel Management System',
//           content: 'Welcome to our company! We are dedicated to providing the best service possible. Our team is composed of experienced professionals who are passionate about what they do. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et ipsum justo. Morbi faucibus, dolor.',
//           image: image1
//         },
//         {
//           id: 2,
//           title: 'Our Vision',
//           content: 'We strive to innovate and lead in our industry. Our vision is to create a sustainable and efficient future through our solutions. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et ipsum justo. Morbi faucibus, dolor.',
//           image: image2
//         }
//       ];

  
//   return (
//     <div className="about-us">
//         <div  className="about-us-content-section">
//             <div className="left-side">
//                 <h1 dangerouslySetInnerHTML={{ __html: slide.title }} />
//                 <p>{slide.content}</p>
//                 <ButtonPair />
//             </div>
//             <div className="right-side">
//                 <img src={slide.image} alt={slide.title} />
//             </div>
//       </div>

//       <div className="about-us-content-section">
//             <div className="right-side">
//                 <img src={slide[1].image} alt={slide[1].title} />
//             </div>
//             <div className="left-side">
//                 <h1 dangerouslySetInnerHTML={{ __html: slide[1].title }} />
//                 <p>{slide[1].content}</p>
//                 <ButtonPair />
//             </div>
//       </div>
      
//     </div>
//   );
// };

// export default AboutUs;
import './CSS Files/AboutUs.css';
import ButtonPair from '../components/ButtonPair';
import image1 from '../assets/Page1.png';
import image2 from '../assets/Page2.png'; 
import image3 from '../assets/Page3.png'; 
import image4 from '../assets/Page4.png'; 
import image5 from '../assets/Page5.png'; 
import image6 from '../assets/Page6.png'; 
import image7 from '../assets/Page7.png'; 
import image8 from '../assets/Page8.png'; 

import { useState } from 'react';

const AboutUs = () => {
  const slides = [
    {
      id: 1,
      title: 'Novel Management System',
      content: 'Welcome to our company! We are dedicated to providing the best service possible. Our team is composed of experienced professionals who are passionate about what they do. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et ipsum justo. Morbi faucibus, dolor.',
      image: image1
    },
    {
      id: 2,
      title: 'Character Management',
      content: 'We strive to innovate and lead in our industry. Our vision is to create a sustainable and efficient future through our solutions. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et ipsum justo. Morbi faucibus, dolor.',
      image: image2
    },
    { 
      id: 3, 
      title: 'Dynamic Notes and Planning Tools', 
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et ipsum justo. Morbi faucibus, dolor et cursus scelerisque, lectus tellus ultricies orci, dapibus imperdiet elit tortor.',
      image: image3 
    },
    { id: 4, title: 'Character Relation <br/> Visualizer', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et ipsum justo. Morbi faucibus, dolor et cursus scelerisque, lectus tellus ultricies orci, dapibus imperdiet elit tortor.', image: image4 },
    { id: 5, title: 'Story Building Assistance', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et ipsum justo. Morbi faucibus, dolor et cursus scelerisque, lectus tellus ultricies orci, dapibus imperdiet elit tortor non magna. Ut a facilisis felis. Nulla ultrices et.', image: image5 },
    { id: 6, title: 'Integrated Writing and <br/> Editing Environment', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et ipsum justo. Morbi faucibus, dolor et cursus scelerisque, lectus tellus ultricies orci, dapibus imperdiet elit tortor.', image: image6 },
    { id: 7, title: 'Novel Importing and Data<br/> Utilization', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et ipsum justo. Morbi faucibus, dolor et cursus scelerisque, lectus tellus ultricies orci, dapibus imperdiet elit tortor.', image: image7 },
    { id: 8, title: 'Community Engagement <br/> through Word War', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et ipsum justo. Morbi faucibus, dolor et cursus scelerisque, lectus tellus ultricies orci, dapibus imperdiet elit tortor.', image: image8 }
  ];

  const [currentSlide] = useState(0);

//   const changeSlide = (slideId) => {
//     setCurrentSlide(slideId - 1); // Adjusting to array index
//   };

  return (
    <div className="about-us">
      <div className="about-us-content-section section-one">
        <div className="left-side">
          <h1 dangerouslySetInnerHTML={{ __html: slides[currentSlide].title }} />
          <p>{slides[currentSlide].content}</p>
          <ButtonPair />
        </div>
        <div className="right-side">
          <img src={slides[currentSlide].image} alt={slides[currentSlide].title} />
        </div>
      </div>

      <div className="about-us-content-section section-two">
        <div className="side-image-left">
          <img src={slides[1].image} alt={slides[1].title} />
        </div>
        <div className="right-side-content">
          <h1 dangerouslySetInnerHTML={{ __html: slides[1].title }} />
          <p>{slides[1].content}</p>
          <ButtonPair />
        </div>
      </div>

      <div className="about-us-content-section section-three">
        <div className="left-side">
          <h1 dangerouslySetInnerHTML={{ __html: slides[2].title }} />
          <p>{slides[2].content}</p>
          <ButtonPair />
        </div>
        <div className="right-side">
          <img src={slides[2].image} alt={slides[2].title} />
        </div>
      </div>


      <div className="about-us-content-section section-four">
        <div className="side-image-left">
          <img src={slides[3].image} alt={slides[3].title} />
        </div>
        <div className="right-side-content">
          <h1 dangerouslySetInnerHTML={{ __html: slides[3].title }} />
          <p>{slides[3].content}</p>
          <ButtonPair />
        </div>
      </div>

      <div className="about-us-content-section section-five">
        <div className="left-side">
          <h1 dangerouslySetInnerHTML={{ __html: slides[4].title }} />
          <p>{slides[4].content}</p>
          <ButtonPair />
        </div>
        <div className="right-side">
          <img src={slides[4].image} alt={slides[4].title} />
        </div>
      </div>

      <div className="about-us-content-section section-six">
        <div className="side-image-left">
          <img src={slides[5].image} alt={slides[5].title} />
        </div>
        <div className="right-side-content">
          <h1 dangerouslySetInnerHTML={{ __html: slides[5].title }} />
          <p>{slides[5].content}</p>
          <ButtonPair />
        </div>
      </div>

      <div className="about-us-content-section section-seven">
        <div className="left-side">
          <h1 dangerouslySetInnerHTML={{ __html: slides[6].title }} />
          <p>{slides[6].content}</p>
          <ButtonPair />
        </div>
        <div className="right-side">
          <img src={slides[6].image} alt={slides[6].title} />
        </div>
      </div>

      <div className="about-us-content-section section-eight">
        <div className="side-image-left">
          <img src={slides[7].image} alt={slides[7].title} />
        </div>
        <div className="right-side-content">
          <h1 dangerouslySetInnerHTML={{ __html: slides[7].title }} />
          <p>{slides[7].content}</p>
          <ButtonPair />
        </div>
      </div>


    </div>
  );
};

export default AboutUs;
