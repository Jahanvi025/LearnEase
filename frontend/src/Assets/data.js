const courses = {
  webDevelopment : [
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
    title: "Responsive Web Design with CSS Grid and Flexbox",
    description: "Create responsive websites using modern CSS Grid and Flexbox techniques.",
    rating: { value: 4.4, max: 5, reviews: 28976 },
    duration: { hours: 30, lectures: 110 },
    level: "All Levels",
    price: { current: "₹1,999", original: null },
    instructors: ["Traversy Media"],
    videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_18" title="Responsive Web Design with CSS Grid and Flexbox" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
],
leadership: [
    {
      title: "Dare to Lead: How to Become a Next Generation Leader",
      description: "Become a Next Generation Leader, Achieve More and Create Impact.",
      rating: { value: 4.3, max: 5, reviews: 584 },
      duration: { hours: 2, lectures: 44 },
      level: "All Levels",
      price: { current: "₹1,999", original: null },
      instructors: ["Susmita Dutta", "Ash Akshay Goel"],
      videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_1" title="Dare to Lead: How to Become a Next Generation Leader" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
      title: "Leadership: Practical Leadership Skills",
      description: "Master leadership skills and leadership techniques with this highly practical advice and training.",
      rating: { value: 4.7, max: 5, reviews: 84365 },
      duration: { hours: 3.5, lectures: 49 },
      level: "All Levels",
      price: { current: "₹3,099", original: null },
      instructors: ["Chris Croft"],
      videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_2" title="Leadership: Practical Leadership Skills" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
      title: "Transformational Leadership: Leadership Development Training",
      description: "Discover the hidden secrets of the world's best leaders with this leadership development and skills course.",
      rating: { value: 4.6, max: 5, reviews: 517 },
      duration: { hours: 5, lectures: 29 },
      level: "All Levels",
      price: { current: "₹2,499", original: null },
      instructors: ["Prof. Paul Cline, Ed.D", "Sandor Kiss"],
      videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_3" title="Transformational Leadership: Leadership Development Training" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
      title: "Leadership: You Can Speak Like a Leader",
      description: "Project authority and confidence, and demonstrate leadership every time you speak.",
      rating: { value: 4.5, max: 5, reviews: 2507 },
      duration: { hours: 29.5, lectures: 605 },
      level: "All Levels",
      price: { current: "₹3,699", original: null },
      instructors: ["TJ Walker", "Media Training Worldwide Digital"],
      videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_4" title="Leadership: You Can Speak Like a Leader" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
      title: "Emotional Intelligence for Leadership",
      description: "Learn how to lead with emotional intelligence, enhance self-awareness, and improve team dynamics.",
      rating: { value: 4.8, max: 5, reviews: 3456 },
      duration: { hours: 4, lectures: 32 },
      level: "All Levels",
      price: { current: "₹2,999", original: null },
      instructors: ["Robin Hills"],
      videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_5" title="Emotional Intelligence for Leadership" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }
],
dataScience: [
    {
      title: "The Data Science Course: Complete Data Science Bootcamp 2024",
      description: "Complete Data Science Training: Math, Statistics, Python, Advanced Statistics in Python, Machine and Deep Learning.",
      rating: { value: 4.6, max: 5, reviews: 143939 },
      duration: { hours: 32, lectures: 520 },
      level: "All Levels",
      price: { current: "₹3,699", original: null },
      instructors: ["365 Careers"],
      videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_1" title="The Data Science Course: Complete Data Science Bootcamp 2024" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
      title: "Python for Data Science and Machine Learning Bootcamp",
      description: "Learn how to use NumPy, Pandas, Seaborn, Matplotlib, Plotly, Scikit-Learn, Machine Learning, Tensorflow, and more!",
      rating: { value: 4.6, max: 5, reviews: 145484 },
      duration: { hours: 25, lectures: 165 },
      level: "All Levels",
      price: { current: "₹4,499", original: null },
      instructors: ["Jose Portilla", "Pierian Training"],
      videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_2" title="Python for Data Science and Machine Learning Bootcamp" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
      title: "R Programming A-Z™: R For Data Science With Real Exercises!",
      description: "Learn Programming In R And R Studio. Data Analytics, Data Science, Statistical Analysis, Packages, Functions, GGPlot2.",
      rating: { value: 4.6, max: 5, reviews: 54473 },
      duration: { hours: 10.5, lectures: 80 },
      level: "All Levels",
      price: { current: "₹4,499", original: null },
      instructors: ["Kirill Eremenko", "SuperDataScience Team", "Ligency Team"],
      videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_3" title="R Programming A-Z™: R For Data Science With Real Exercises!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
      title: "Data Science A-Z: Hands-On Exercises & ChatGPT Prize [2024]",
      description: "Learn Data Science step by step through real Analytics examples. Data Mining, Modeling, Tableau Visualization and more!",
      rating: { value: 4.6, max: 5, reviews: 34123 },
      duration: { hours: 21, lectures: 217 },
      level: "All Levels",
      price: { current: "₹3,699", original: null },
      instructors: ["Kirill Eremenko", "SuperDataScience Team", "Ligency Team"],
      videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_4" title="Data Science A-Z: Hands-On Exercises & ChatGPT Prize [2024]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
      title: "Advanced Machine Learning with TensorFlow and Keras",
      description: "Deep dive into advanced machine learning techniques using TensorFlow and Keras, focusing on neural networks, deep learning, and AI applications.",
      rating: { value: 4.7, max: 5, reviews: 22876 },
      duration: { hours: 40, lectures: 180 },
      level: "Intermediate to Advanced",
      price: { current: "₹5,499", original: null },
      instructors: ["Andrew Ng", "DeepLearning.ai"],
      videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_5" title="Advanced Machine Learning with TensorFlow and Keras" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }
],
communication: [
    {
      title: "The Complete Communication Skills Master Class for Life",
      description: "Communication Skills for Persuasion, Assertiveness, and All Business Communication Needs.",
      rating: { value: 4.5, max: 5, reviews: 28703 },
      duration: { hours: 31.5, lectures: 609 },
      level: "All Levels",
      price: { current: "₹3,099", original: null },
      instructors: ["TJ Walker"],
      videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_1" title="The Complete Communication Skills Master Class for Life" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
      title: "Communication Skills for Beginners",
      description: "Start Building Your Communication Skills Now.",
      rating: { value: 4.5, max: 5, reviews: 6824 },
      duration: { hours: 31.5, lectures: 615 },
      level: "Beginner",
      price: { current: "₹3,099", original: null },
      instructors: ["TJ Walker"],
      videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_2" title="Communication Skills for Beginners" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
      title: "Winning Communication Skills for Telephone, Conference Calls",
      description: "Improve Communication Skills - Use the Telephone Effectively! Avoid Phone Etiquette Blunders that Annoy.",
      rating: { value: 4.6, max: 5, reviews: 2900 },
      duration: { hours: 28.5, lectures: 607 },
      level: "All Levels",
      price: { current: "₹2,899", original: null },
      instructors: ["TJ Walker", "Media Training Worldwide Digital"],
      videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_3" title="Winning Communication Skills for Telephone, Conference Calls" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
      title: "Public Relations: Media Crisis Communications",
      description: "Public Relations: You Can Shape and Control Your Media Messages at The Worst Possible Times.",
      rating: { value: 4.5, max: 5, reviews: 2925 },
      duration: { hours: 2, lectures: 28 },
      level: "All Levels",
      price: { current: "₹2,899", original: null },
      instructors: ["TJ Walker", "Media Training Worldwide Digital"],
      videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_4" title="Public Relations: Media Crisis Communications" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
      title: "Mastering Non-Verbal Communication",
      description: "Learn how to effectively use body language, facial expressions, and gestures to enhance communication.",
      rating: { value: 4.7, max: 5, reviews: 10456 },
      duration: { hours: 12, lectures: 150 },
      level: "All Levels",
      price: { current: "₹3,299", original: null },
      instructors: ["Deborah Grayson Riegel"],
      videoEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_5" title="Mastering Non-Verbal Communication" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }
]
};

export default courses;