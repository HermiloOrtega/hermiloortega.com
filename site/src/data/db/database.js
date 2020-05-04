import Mock from "../mock";

const database = {
  information: {
    name: 'Hermilo Ortega',
    aboutContent: "I am a Full Stack Software Developer with 6+ years of experience."+
                  " helping companies to reduce time, costs and effort automating processes through high-performance"+
                  " web technologies and implementing advanced methodologies to manage business according to their needs.",
                  //" Team player with a will-do attitude and strong user focus.",
    //age: 28,
    phone: '(236) 979 0254',
    //nationality: 'Mexican',
    language: 'English, Spanish',
    email: 'hermilo.jh@gmail.com',
    address: '4615 West 10th Avenue, Vancouver, BC',
    //freelanceStatus: 'Available',
    socialLinks: {
      github:     'https://github.com/hermiloortega',
      linkedin:   'https://linkedin.com/in/hermilomartinez',
      facebook:   'https://www.facebook.com/josehermilo1',
      twitter:    'https://twitter.com/Hermilo_O_Mtz',
      pinterest:  '',
      behance:    '',
      dribbble:   '',
    },
    brandImage:   '/images/Hermilo-Ortega.png',
    aboutImage:   '/images/about-image.png',
    aboutImageLg: '/images/about-image-lg.png',
    cvfile:       '/files/empty.pdf'
  },
  services: [
    { title: "Software Development",  icon: 'code',   details: "" },
    { title: "Web Development",       icon: 'code',   details: "" },
    { title: "Mobile Application",    icon: 'mobile', details: "" }
  ],
  reviews: [
    { id: 1, content: "Hermilo help me with the Web design and marketing of my website and is amazing! He is very kind and always work very hard",
      author: { name: 'Fernando Aguilar', designation: 'CEO Working4U' }
    },
    { id: 2, content: "I start to work with hermilo since January with the develop of my website and the social media marketing and thanks him I increase my sell's, I love the website and the work that he do.",
      author: { name: 'Cristela Berenice', designation: 'Inlab Owner' }
    },
    { id: 3, content: "I love my website and nowadays I'm still working with hermilo building a new e-commerce, he is very reliable, always working on time. ",
      author: { name: 'Paulo Cesar Ortiz', designation: 'English and Tours Owner' }
    }
  ],
  skills: [
    { title: "C#"                       , value: 95 },
    { title: "SQL Server, MySQL"        , value: 95 },
    { title: "HTML5, CSS3"              , value: 85 },
    { title: "JavaScript, jQuery"       , value: 70 },
    { title: "ReactJS, Angular"         , value: 70 },
    { title: "Node.js, Laravel, Django" , value: 60 }
  ],
  portfolios: [
    { id: 1, title: "Jucod"                           , subtitle: "Web and Mobile App Development website.",
      imageUrl: "/images/portfolio-image-1.png",
      largeImageUrl: ["/images/portfolio-image-1-lg.png"],
      url: 'https://jucod.com'
    },
    { id: 2, title: "English and Tours"               , subtitle: "Awesome travel agency.",
      imageUrl: "/images/portfolio-image-2.png",
      largeImageUrl: ["/images/portfolio-image-2-lg.png"],
      url: 'https://englishandtours.com'
    },
    { id: 3, title: "Servicios DAESA"                 , subtitle: "Professional Industrial engineer.",
      imageUrl: "/images/portfolio-image-3.png",
      largeImageUrl: ["/images/portfolio-image-3-lg.png"],
      url: 'https://serviciosdaesa.com'
    },
    { id: 4, title: "Working4U"                       , subtitle: "",
      imageUrl: "/images/portfolio-image-4.png",
      largeImageUrl: ["/images/portfolio-image-4-lg.png"],
      url: 'https://working4ubc.ca'
    },
    { id: 5, title: "Simply Recruiting Inc."          , subtitle: "",
      imageUrl: "/images/portfolio-image-5.png",
      largeImageUrl: ["/images/portfolio-image-5-lg.png"],
      url: 'https://simplyrecruitinginc.com'
    },
    { id: 6, title: "Fundacion Taraji"                , subtitle: "",
      imageUrl: "/images/portfolio-image-6.png",
      largeImageUrl: ["/images/portfolio-image-6-lg.png"],
      url: 'https://fundaciontaraji.org'
    },
    { id: 7, title: "Inlab - Insumos para laboratorio", subtitle: "",
      imageUrl: "/images/portfolio-image-7.png",
      largeImageUrl: ["/images/portfolio-image-7-lg.png"],
      url: 'https://inlabmexico.com'
    },
    { id: 8, title: "Mr. Nails"                       , subtitle: "",
      imageUrl: "/images/portfolio-image-8.png",
      largeImageUrl: ["/images/portfolio-image-8-lg.png"],
      url: 'https://mrnails.com.mx'
    },
    { id: 9, title: "Mr Cachuchero"                   , subtitle: "",
      imageUrl: "/images/portfolio-image-9.png",
      largeImageUrl: ["/images/portfolio-image-9-lg.png"],
      url: 'https://mrcachuchero.com'
    },
    { id: 10, title: "LineUP Boutique"                , subtitle: "",
      imageUrl: "/images/portfolio-image-10.png",
      largeImageUrl: ["/images/portfolio-image-10-lg.png"],
      url: 'https://lineupboutique.com'
    }
  ],
  experience: {
    workingExperience: [
      {id: 1, year: "Jan 2019 – Present",   position: "Full Stack Software Developer",            company: "Jucod IT Company",
        details: "• Help companies to reduce time, costs and effort automating processes through high-performance web technologies and implementing advanced methodologies to manage business according to their needs."
      },
      {id: 2, year: "May 2019 – Present",   position: "Team Manager",                             company: "Spanish Bank East Concession",
        details: "•	Improve the operations time with the implementation of new methodologies in the front desk, kitchen and storage, increase the productivity of employees and teamwork, reducing time lost and disorganization."
                //•	Implemented new methodologies with the management of the food, beverages and products.\
                //•	Attention to customers and suppliers to answer questions and solve any complaints."
      },
      {id: 3, year: "Aug 2019 – Dec 2019",  position: "Full Stack Software Developer",            company: "10 Star",
        details: "•	Improve the management and control of contracts, events and budgets of the company developing a high-quality internal web application implementing new frameworks and methodologies in the process."
                //•	Complete planning, analysis, design, development and execution of the system.\
                //•	Design and programming of Query used in the database using the best practices."
      },
      {id: 4, year: "Jun 2013 – Dec 2018",  position: "Full Stack Software Developer",            company: "Altos Hornos de México",
        details: "•	Reduced the time of operations, enforce and money lost of different departments of the company developing more than 10 high-quality and reliable internal software in different platforms. "
                //•	Improved the performance of 10 additional internal software previously developed by other developers, implementing new methodologies and algorithms which help in the processing of the information.\
                //•	Design and programming of Query used in the database using the best practices.\
                //•	Complete planning, analysis, design, development and execution of the system.\
                //•	Creation and coordination of reports, policies, formats, system manuals, and meetings.\
                //•	End-user support and training to answer questions or solve any issue about systems."
      },
      {id: 5, year: "Jun 2011 – Dec 2011",  position: "Internship as Junior Software Developer",  company: "Altos Hornos de México",
        details: "•	Helped create and improve efficient and reliable internal website to show the agreements and benefits to employees with city businesses"
                //•	End-user support and training to answer questions or solve any issue about systems."
      }
    ],
    educationExperience: [
      {id: 1, year: "2016 - 2017", graduation: "Master´s Degree in Software Engineer",          university: "Instituto de Estudios Universitarios"//,
        //details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      },
      {id: 2, year: "2014 - 2016", graduation: "Master´s Degree in Leadership and Management",  university: "Universidad Autónoma del Noreste"//,
        //details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      },
      {id: 3, year: "2009 - 2013", graduation: "Bachelor´s Degree in Computer Science",         university: "Instituto Tecnológico Superior de Monclova"//,
        //details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      }
    ]
  },
  blogs: [
    { id: 1, title: 'Markdown & Html supported blog.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/markdown-html-supported-blog.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    { id: 2, title: 'Installing NodeJS on your device.',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/installing-nodejs-on-your-device.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    }
  ],
  contactInfo: {
    phoneNumbers: ['236-979-0254'],
    emailAddress: ['hermilo.jh@gmail.com'],
    address: "4615 West 10th Avenue, Vancouver, BC"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});
Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});
Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});
Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});
Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});
Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});
Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});
Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});