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

export const myProjects = [
    {
        title: 'Purely Ecological - Product Preview Site',
        desc: 'Purely Ecological is an innovative e-commerce platform dedicated to offering eco-friendly and sustainable products. By partnering with carefully selected vendors, it ensures a wide range of high-quality organic goods, promoting a greener and healthier lifestyle.',
        subdesc:
            'Built as a custom web application using pure HTML, CSS, and JavaScript, Purely Ecological is crafted to deliver a smooth user experience with a focus on simplicity, responsiveness, and performance.',
        href: 'https://pur.md/',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/project-logo1.png',
        logoStyle: {
            backgroundColor: '#1C2A16',
            border: '0.2px solid #424B25',
            boxShadow: '0px 0px 60px 0px #1C2A16',
        },
        spotlight: '/assets/spotlight1.png',
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
                path: '/assets/javascript.png',
            },
        ],
    },
    {
        title: 'Delicy - Online Food Ordering Platform',
        desc: 'Delicy is a modern app for discovering and ordering delicious meals online. Users can browse a variety of dishes, place orders quickly, and find detailed information about the company and its food offerings.',
        subdesc:
            'Built using HTML, CSS, and JavaScript, Delicy delivers a fast, lightweight, and responsive user experience, ensuring smooth functionality.',
        href: 'https://delicy.vercel.app/Acasa.html',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/project-logo2.png',
        logoStyle: {
            backgroundColor: '#473720',
            border: '0.2px solid #FFA92F',
            boxShadow: '0px 0px 60px 0px #8A6939',
        },
        spotlight: '/assets/spotlight2.png',
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
                path: '/assets/javascript.png',
            },
        ],
    },
    {
        title: 'Cătălin Țurcanu - Designer Portfolio',
        desc: 'Cătălin Țurcanu is a modern website dedicated to showcasing the work of a designer. Users can explore various projects, view details about the designer\'s skills and style, and navigate through a smooth and interactive design.',
        subdesc:
            'Built using React, TailwindCSS, and Framer Motion, Cătălin Țurcanu delivers a fast, lightweight, and responsive user experience, ensuring dynamic functionality and subtle animations that enhance navigation.',
        href: 'https://project-portfolio-neon.vercel.app/',
        texture: '/textures/project/project3.mp4',
        logo: '/assets/project-logo3.png',
        logoStyle: {
            backgroundColor: '#504E4C',
            border: '0.2px solid white',
            boxShadow: '0px 0px 60px 0px gray',
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
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'React',
        pos: 'Web Developer',
        duration: '01/05/2024 – 31/07/2024',
        title: "Developed a website using ReactJS, Tailwind CSS, and Framer Motion based on a provided design. Gained hands-on experience, solved technical issues, implemented innovative solutions, and enhanced teamwork and communication skills.",
        icon: '/assets/react.svg',
        animation: 'clapping',
    },
    {
        id: 2,
        name: 'HTML/CSS/JS',
        pos: 'Web Developer',
        duration: '01/06/2023 – 01/07/2023',
        title: "During this period, I honed my skills in HTML, CSS, and JavaScript by working on real-world web development projects. I build responsive and user-friendly web interfaces. My workflow included writing clean, maintainable code.",
        icon: '/assets/htmlcssjs.png',
        animation: 'salute',
    },
];