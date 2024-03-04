import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    meta,
    starbucks,
    tesla,
    shopify,
    react_portfolio,
    discord_ws,
    autocode_discordjs,
    threejs,
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
    {
        title: "React Developer",
        icon: mobile,
    },
    {
        title: "Back End Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
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
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Thanks to Edwin, our active users on Autocode had grown tremendously.",
        name: "Jacob Lee",
        designation: "former Co-founder and CTO",
        company: "Polybit Inc. (Autocode)",
        image: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/aitqwpqpyoqrwh2j8vct",
    },
    {
        testimonial:
            "I've never met a developer who truly cares about their clients' opinions like Edwin does.",
        name: "Keith William Horwood",
        designation: "Founder and CEO",
        company: "Polybit Inc. (Autocode)",
        image: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/u281tx4nn0upe08oeap3",
    },
    {
        testimonial:
            "Edwin went above and beyond! Literally walked me through everything, spent all nighters to finish my project, great work ethic, 100000% recommend!",
        name: "alanhuynh12",
        designation: "Client",
        company: "Fiverr",
        image: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/cb26d44749a0dc667d913e7b21f9731c-1561437993612/3ea6bbd8-eca4-41bf-a874-a6a03b1ec759.jpg",
    },
];

const projects = [
    {
        name: "React Portfolio",
        description:
            "A portfolio that is created using Next.js and styled with TailwindCSS. Integrates MongoDB to retrieve saved information and display it on the website when needed.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: react_portfolio,
        source_code_link: "https://github.com/",
    },
    {
        name: "Autocode Discord.js",
        description:
            "Extends Discord.js functionalities for Autocode users using Autocode's Discord Connector API from their self-built Standard Library.",
        tags: [
            {
                name: "lib",
                color: "blue-text-gradient",
            },
            {
                name: "Autocode",
                color: "green-text-gradient",
            },
            {
                name: "DiscordAPI",
                color: "pink-text-gradient",
            },
        ],
        image: autocode_discordjs,
        source_code_link: "https://github.com/",
    },
    {
        name: "Discord WebSocket",
        description:
            "Easily implement a gateway for Discord Bots without worrying about making your own event listeners.",
        tags: [
            {
                name: "DiscordAPI",
                color: "blue-text-gradient",
            },
            {
                name: "WebSocket",
                color: "green-text-gradient",
            },
        ],
        image: discord_ws,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };