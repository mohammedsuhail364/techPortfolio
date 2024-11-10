export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'Dropper - Dropshipping Web',
      desc: 'Developed a comprehensive drop shipping web application using the MERN stack, which includes React for a dynamic frontend, Redox for state management, Node.js and Express.js for the backend, and MongoDB for data storage.The application features secure user authentication, real-time product catalog management and seamless payment gateway integration.It also includes an admin dashboard for managing users, products, orders, and analytics.',
      subdesc:
        'Built as a unique Software-as-a-Service app with React, Bootstrap CSS, javaScript, Node js, MongoDB is designed for optimal performance and scalability.',
      href: "https://github.com/mohammedsuhail364/Dropper",
      texture: '/textures/project/project1.mp4',
      logo: '/assets/dropship.webp',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'BootStrapCss',
          path: 'assets/bootstrap.jpeg',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/assets/javascript.webp',
        },
        {
          id: 4,
          name: 'NodeJs',
          path: '/assets/node js.jpeg',
        },
      ],
    },
    {
      title: 'ChatUs - Real-Time Chat Application',
      desc: 'Developed a real-time chat application using the MERN stack (MongoDB, Express.js, React.js, Node.js),Implemented Web Socket for live messaging, ensuring seamless communication between users,Integrated user authentication and authorization with JWT, enhancing security,Designed and optimized MongoDB schemas to handle large volumes of chat data efficiently. Emphasized responsive design and cross-platform compatibility',
      subdesc:
        'Built as a unique Software-as-a-Service app with React, TailWind CSS, javaScript, Node js, MongoDB is designed for real time chat and scalable databases.',
      href: 'https://github.com/mohammedsuhail364/Chat-Us',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/chat-app-logo-design-template-can-be-used-icon-chat-application-logo_605910-1724.avif',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/assets/javascript.webp',
        },
        {
          id: 4,
          name: 'NodeJs',
          path: '/assets/node js.jpeg',
        },
      ],
    },
    {
      title: 'QRCode - A QRCode Generator',
      desc: 'Developed a QR code generator using React, leveraging a QR code generation API for dynamic code creation. Implemented a user-friendly interface with real-time QR code generation, ensuring smooth and responsive performance.',
      subdesc:
        'With a focus on efficiency,QRCode Generator integrantes complex forms and generates qrcode, by using React Js, with the help of API that enhance operational workflows.',
      href: 'https://mohammedsuhail364.github.io/Qr_code_generator/',
      texture: '/textures/project/project3.mp4',
      logo: '/assets/qr-img-1.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/assets/javascript.webp',
        },
      ],
    },
    {
      title: 'Weather App - Generates current Weather',
      desc: 'Created a weather app using React and integrated a weather API for real-time data. The app features a responsive design, providing users with accurate weather forecasts and conditions based on their location or input.',
      subdesc:
        'Built with React Js, with the help of weather API, to integrate and generate the weather of the input location with the help of state management',
      href: 'https://mohammedsuhail364.github.io/weather_project/',
      texture: '/textures/project/project4.mp4',
      logo: '/assets/weather.avif',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/assets/javascript.webp',
        },
      ],
    },
    {
      title: 'Snake Game-Nostalgic Snake Game',
      desc: 'Built a classic Snake game using HTML, CSS, and JavaScript, featuring smooth controls and responsive gameplay. The game offers an intuitive user interface with dynamic movement and real-time score tracking. Optimized for performance across various devices, providing an engaging and nostalgic experience.',
      subdesc:
        'Built with HTML, CSS, Vanilla JavaScript ',
      href: 'https://mohammedsuhail364.github.io/SnakeGame/',
      texture: '/textures/project/project5.mp4',
      logo: '/assets/snake-day-FEATURED-desktop.png',
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'HTML',
          path: '/assets/html.png',
        },
        {
          id: 2,
          name: 'CSS',
          path: 'assets/css.png',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/assets/javascript.webp',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.1,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [17, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-34, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-15, -7, -10] : [-25, -13, -10],
      targetScale:isSmall?1:2
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Framer',
      pos: 'Lead Web Developer',
      duration: '2022 - Present',
      title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
      icon: '/assets/framer.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Figma',
      pos: 'Web Developer',
      duration: '2020 - 2022',
      title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
      icon: '/assets/figma.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Notion',
      pos: 'Junior Web Developer',
      duration: '2019 - 2020',
      title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
      icon: '/assets/notion.svg',
      animation: 'salute',
    },
  ];