import {
    mobile,
    backend,
    web,
    javascript,
    html,
    reactjs,
    tailwind,
    threejs,
    py,
    boot,
    c,
    css,
    java,
    dj,
    sql,
    iris,
    arbitrage,
    fisbook,
    github,
    mail,
    insta
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [

    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
        title: "Machine Learning Engineer",
        icon:backend,
    },
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "2D Game Developer",
        icon:backend,
    },
    {
        title: "Data Analyst",
        icon:backend,
    }
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
   
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Python",
      icon:py,
    },
    {
      name:"CSS",
      icon:css,
    },
    {
      name:"Bootstrap",
      icon:boot,
    },
    {
      name:"Django",
      icon:dj,
    },
    {
      name: "MySQL",
      icon:sql,
    },
    {
      name: "C",
      icon:c,
    },
    {
      name: "Java",
      icon:java,
    }
  ];
  
  const projects = [
    {
      name: "Arbitrage Analysis",
      description:
        "Rudimentary application of Bellman-Ford's algorithm to find negative cycles in forex.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "BeautifulSoup",
          color: "green-text-gradient",
        },
      ],
      image: arbitrage, 
      source_code_link: "https://colab.research.google.com/drive/1oQMZ-K3p7f_IfobKzNbguXPIccPUgNMQ",
    },
    {
      name: "FISBook",
      description:
        "Web application designed for schools, facilitates inter-student and student-teacher communication along with event planning and scheduling. Streamlines the process of club (forum) creation",
      tags: [
        {
          name: "Django",
          color: "blue-text-gradient",
        },
        {
          name: "Ajax",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "Three JS",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        }
      ],
      image: fisbook,
      source_code_link: "https://github.com/Sausageexpert/FISBook-SubmittableMaybe",
    },
    {
      name: "Iris Machine Learning",
      description:
        "Basic support vector regression on the iris dataset from Kaggle.",
      tags: [
        {
          name: "python",
          color: "green-text-gradient",
        },
      ],
      image: iris,
      source_code_link: "https://colab.research.google.com/drive/17L_lxa78FE5qAJ-dMpeS546sRzFG5e1L",
    },
  ];

  const achievements=[
    {
      title: "IPA Abacus",
      date: "2019",
      description: "Rank 2 in state (Karnataka)",
    },
    {
      title:"FIITJEE",
      date: "2020",
      description: "100 percent merit based scholarship for the three year STEM coaching program",
    },
    {
      title:"IEO (International English Olympiad)",
      date: "2020",
      description: "International rank 10, medal of distinction"
    },
    {
      title:"NSO (National Science Olympiad)",
      date: "2020",
      description: "Zonal medal of distinction"
    },

    {
      title:"IMO (International Mathematics Olympiad)",
      date: "2020",
      description: "Zonal medal of distinction"
    },
    {
      title: "AP Scholar",
      date: "2023",
      description: "5 in APs: Chemistry, Calculus AB, Physics C: Mechanics"
    },
    {
      title: "JEE Mains",
      date: "2024",
      description: "99.37 percentile"
    },
    {
      title: "Highest Scorer Award",
      date: "2024",
      description: "School certificates for highest overall performance in Physics, Mathematics and Computer Science"
    },
    {
      title: "AP Scholar with Distinction",
      date: "2024",
      description: "5 in APs: Chemistry, Calculus AB, Physics C: Mechanics, Calculus BC, Physics C: Electricity and Magnetism, Computer Science A"
    }
  ]

  const contacts = [
    {
      name: 'GitHub',
      icon: github,
      link: 'https://github.com/yourusername',
    },
    {
      name: 'Email',
      icon: mail,
      link: 'mailto:your.email@example.com',
    },
    {
      name: 'Instagram',
      icon: insta,
      link: 'https://instagram.com/yourusername',
    },
  ];
  
  export { services, technologies, projects, achievements, contacts };