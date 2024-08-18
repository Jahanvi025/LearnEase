const courses = {
javascript: [
    {
    title: "JavaScript for Beginners",
    description: "Learn JavaScript from scratch.",
    rating: { value: 4.2, max: 5, reviews: 1784 },
    duration: { hours: 2, lectures: 21 },
    level: "All Levels",
    price: { current: "₹1,499", original: null },
    instructors: ["PROPER DOT INSTITUTE"],
    videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_1" title="JavaScript For Beginners Complete Course" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
    title: "The Complete JavaScript Course 2024: From Zero to Expert!",
    description: "The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory.",
    rating: { value: 4.7, max: 5, reviews: 211010 },
    duration: { hours: 68.5, lectures: 321 },
    level: "All Levels",
    price: { current: "₹4,099", original: null },
    instructors: ["Jonas Schmedtmann"],
    videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_2" title="The Complete JavaScript Course 2024: From Zero to Expert!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
    title: "The Complete Full-Stack JavaScript Course",
    description: "Learn full-stack web development using JavaScript (ReactJS, NodeJS, LoopbackJS, Redux and Material-UI)!",
    rating: { value: 4.4, max: 5, reviews: 4173 },
    duration: { hours: 24.5, lectures: 96 },
    level: "All Levels",
    price: { current: "₹2,699", original: null },
    instructors: ["Joseph Delgadillo", "Nick Germaine"],
    videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_3" title="The Complete Full-Stack JavaScript Course" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
    title: "Master JavaScript from Basics to Advanced",
    description: "A perfect JavaScript course for all those who want to learn and master JavaScript programming skills right from scratch.",
    rating: { value: 4.5, max: 5, reviews: 4471 },
    duration: { hours: 10, lectures: 87 },
    level: "Beginner",
    price: { current: "₹2,299", original: null },
    instructors: ["EdYoda for Business", "Qaifi Khan"],
    videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_4" title="Master JavaScript from Basics to Advanced" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
    title: "Complete Javascript & jQuery Course with Bonus Vue JS Intro",
    description: "Learn Javascript, jQuery and Ajax from the start + Bonus Intro to Vue JS 3. Incudes complete written course material!",
    rating: { value: 4.4, max: 5, reviews: 2670 },
    duration: { hours: 17, lectures: 98 },
    level: "All Levels",
    price: { current: "₹2,899", original: null },
    instructors: ["Ivan Lourenço Gomes", "Learn IT University", "Andrii Piatakha"],
    videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_5" title="Complete Javascript & jQuery Course with Bonus Vue JS Intro" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }
],
react: [
    {
    title: "React - The Complete Guide 2024 (incl. Next.js, Redux)",
    description: "Dive in and learn React.js from scratch! Learn React, Hooks, Redux, React Router, Next.js, Best Practices and way more!",
    rating: { value: 4.6, max: 5, reviews: 215995 },
    duration: { hours: 68.5, lectures: 696 },
    level: "All Levels",
    price: { current: "₹3,699", original: null },
    instructors: ["Academind by Maximilian Schwarzmüller", "Maximilian Schwarzmüller"],
    videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_6" title="React - The Complete Guide 2024 (incl. Next.js, Redux)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
    title: "Modern React with Redux [2024 Update]",
    description: "Master React and Redux. Apply modern design patterns to build apps with React Router, TailwindCSS, Context, and Hooks!",
    rating: { value: 4.7, max: 5, reviews: 87084 },
    duration: { hours: 76, lectures: 685 },
    level: "All Levels",
    price: { current: "₹4,099", original: null },
    instructors: ["Stephen Grider"],
    videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_7" title="Modern React with Redux [2024 Update]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
    title: "React JS- Complete Guide for Frontend Web Development",
    description: "Become an expert React JS Developer. Learn HTML, CSS, JavaScript, ES6, React JS and jQuery.",
    rating: { value: 4.4, max: 5, reviews: 5462 },
    duration: { hours: 22, lectures: 202 },
    level: "All Levels",
    price: { current: "₹2,699", original: null },
    instructors: ["EdYoda for Business", "Qaifi Khan", "Mavludin Abdulkadirov"],
    videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_8" title="React JS- Complete Guide for Frontend Web Development" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
    title: "Complete React Developer (w/ Redux, Hooks, GraphQL)",
    description: "Updated! Become a Senior React Developer. Build a massive E-commerce app with Redux, Hooks, GraphQL, Stripe, Firebase",
    rating: { value: 4.6, max: 5, reviews: 28415 },
    duration: { hours: 42.5, lectures: 346 },
    level: "All Levels",
    price: { current: "₹4,099", original: null },
    instructors: ["Andrei Neagoie", "Yihua Zhang"],
    videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_9" title="Complete React Developer (w/ Redux, Hooks, GraphQL)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
    title: "Next.js Projects - 5 NextJS 14 projects (Instagram, Google.)",
    description: "Next.js 14 (reactjs framework) Projects. 5 NextJS 14 projects. IMDB, Instagram, X-Twitter, Google clone using Next js 14",
    rating: { value: 4.4, max: 5, reviews: 805 },
    duration: { hours: 54, lectures: 77 },
    level: "All Levels",
    price: { current: "₹3,299", original: null },
    instructors: ["Dr. Sahand Ghavidel"],
    videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_10" title="Next.js Projects - 5 NextJS 14 projects (Instagram, Google.)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }
],
html: [
    {
    title: "HTML and CSS for Beginners - Build a Website & Launch ONLINE",
    description: "HTML and CSS for Beginners course will give you all the knowledge you need to master HTML and CSS easily and quickly.",
    rating: { value: 4.5, max: 5, reviews: 36420 },
    duration: { hours: 6, lectures: 49 },
    level: "All Levels",
    price: { current: "₹3,699", original: null },
    instructors: ["Edwin Diaz", "Coding Faculty Solutions"],
    videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_11" title="HTML and CSS for Beginners - Build a Website & Launch ONLINE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
    title: "Build Responsive Real-World Websites with HTML and CSS",
    description: "Learn modern HTML5, CSS3 and web design by building a stunning website for your portfolio! Includes flexbox and CSS Grid",
    rating: { value: 4.7, max: 5, reviews: 108318 },
    duration: { hours: 37.5, lectures: 149 },
    level: "All Levels",
    price: { current: "₹4,099", original: null },
    instructors: ["Jonas Schmedtmann"],
    videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_12" title="Build Responsive Real-World Websites with HTML and CSS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
    title: "HTML, CSS, & JavaScript - Certification Course for Beginners",
    description: "A Comprehensive Guide for Beginners interested in learning HTML, CSS, & JavaScript to Build Interactive Web Pages.",
    rating: { value: 4.3, max: 5, reviews: 9297 },
    duration: { hours: 5.5, lectures: 113 },
    level: "Beginner",
    price: { current: "₹2,499", original: null },
    instructors: ["YouAccel Training"],
    videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_13" title="HTML, CSS, & JavaScript - Certification Course for Beginners" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
    title: "HTML5 and CSS3 Fundamentals",
    description: "Build your very own website with HTML5 from scratch using HTML5 and CSS3 - designed for complete beginners",
    rating: { value: 4.3, max: 5, reviews: 19687 },
    duration: { hours: 5, lectures: 35 },
    level: "Beginner",
    price: { current: "₹799", original: null },
    instructors: ["Stone River eLearning"],
    videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_14" title="HTML5 and CSS3 Fundamentals" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }
],
css: [
    {
    title: "CSS3 and Bootstrap for Absolute Beginners : 4 courses in 1",
    description: "Learn CSS3, Bootstrap from Scratch using step by step process",
    rating: { value: 4.3, max: 5, reviews: 1769 },
    duration: { hours: 3, lectures: 40 },
    level: "All Levels",
    price: { current: "₹799", original: null },
    instructors: ["Creative Online School"],
    videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_15" title="CSS3 and Bootstrap for Absolute Beginners : 4 courses in 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
    title: "Advanced CSS and Sass: Flexbox, Grid, Animations",
    description: "Learn CSS and Sass to create stunning and modern web layouts using Flexbox, Grid, and Animations.",
    rating: { value: 4.6, max: 5, reviews: 34281 },
    duration: { hours: 35, lectures: 195 },
    level: "All Levels",
    price: { current: "₹2,999", original: null },
    instructors: ["Jonas Schmedtmann"],
    videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_16" title="Advanced CSS and Sass: Flexbox, Grid, Animations" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
    title: "CSS Masterclass: Advanced Techniques",
    description: "Become a CSS master with advanced techniques including transitions, animations, and responsive design.",
    rating: { value: 4.7, max: 5, reviews: 19850 },
    duration: { hours: 25, lectures: 132 },
    level: "Intermediate",
    price: { current: "₹2,499", original: null },
    instructors: ["Creative Tim"],
    videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_17" title="CSS Masterclass: Advanced Techniques" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
    title: "Responsive Web Design with CSS Grid and Flexbox",
    description: "Create responsive websites using modern CSS Grid and Flexbox techniques.",
    rating: { value: 4.4, max: 5, reviews: 28976 },
    duration: { hours: 30, lectures: 110 },
    level: "All Levels",
    price: { current: "₹1,999", original: null },
    instructors: ["Traversy Media"],
    videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_18" title="Responsive Web Design with CSS Grid and Flexbox" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
    title: "CSS and Sass: Create Modern Responsive Websites",
    description: "Master CSS and Sass to build modern, responsive websites with ease.",
    rating: { value: 4.5, max: 5, reviews: 15873 },
    duration: { hours: 28, lectures: 100 },
    level: "All Levels",
    price: { current: "₹2,299", original: null },
    instructors: ["Academind"],
    videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_19" title="CSS and Sass: Create Modern Responsive Websites" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }
]
};

export default courses;