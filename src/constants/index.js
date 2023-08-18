import {
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    git,
    angular,
    dotnet,
    sql,
    docker,
    ispiral,
    alphabank,
    antoniadestravel,
    covidtracker,
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
        title: "Web Developer",
        icon: web,
    },
    // {
    //     title: "React Native Developer",
    //     icon: mobile,
    // },
    {
        title: "Backend Developer",
        icon: creator,
    },
    // {
    //     title: "Content Creator",
    //     icon: creator,
    // },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "Angular",
        icon: angular,
    },
    {
        name: "C# Dotnet",
        icon: dotnet,
    },
    {
        name: "SQL",
        icon: sql,
    },
    // {
    //     name: "React JS",
    //     icon: reactjs,
    // },
    // {
    //     name: "Redux Toolkit",
    //     icon: redux,
    // },
    // {
    //     name: "Tailwind CSS",
    //     icon: tailwind,
    // },
    // {
    //     name: "Node JS",
    //     icon: nodejs,
    // },
    // {
    //     name: "MongoDB",
    //     icon: mongodb,
    // },
    // {
    //     name: "Three JS",
    //     icon: threejs,
    // },
    {
        name: "git",
        icon: git,
    },
    // {
    //     name: "figma",
    //     icon: figma,
    // },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Business Analyst",
        company_name: "Alpha Bank",
        icon: alphabank,
        iconBg: "#383E56",
        date: "March 2019 - September 2020",
        points: [
            "In March 4, 2019, I seized my first professional opportunity at Alpha Bank Cyprus as a business analyst.",
            "I delved into an advanced project involving PSD2 (Payment Services Directive 2), a game-changing directive from the EU that could revolutionize online payments and information presentation during transactions.",
            "Leveraging my passion for software development, my role centered on guiding programmers to create top-notch API products for Third Party Providers (TPPs), ensuring Alpha Bank Cyprus delivers the best in the field.",
        ],
    },
    {
        title: "Software Developer",
        company_name: "I-SPIRAL",
        icon: ispiral,
        iconBg: "#E6DEDD",
        date: "Sept 2020 - Current",
        points: [
            "Developing and maintaining web applications using Angular, C# Dotnet and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    }
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Antoniades Travel",
        description:
            "An online platform enabling users to easily book distinctive excursions in Cyprus, coupled with comprehensive transportation services that span the entirety of the island.",
        tags: [
            {
                name: "html",
                color: "orange-text-gradient",
            },
            {
                name: "css",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "pink-text-gradient",
            },
        ],
        image: antoniadestravel,
        source_code_link: "https://antoniadestravel.com",
    },
    {
        name: "Covid-19 Tracker",
        description:
            "A web application empowering users to efficiently search and access in-depth analyses of global COVID-19 cases. Users can effortlessly retrieve information for individual countries, entire continents, and worldwide statistics.",
        tags: [
            {
                name: "html",
                color: "orange-text-gradient",
            },
            {
                name: "css",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "pink-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
        ],
        image: covidtracker,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };