const jobs = [
    {
        id: "1",
        title: "web developer",
        location: "France",
        region: "Paris",
        type: "Internship",
        categories: ["Frontend", "Design"],
        tags: ["php", "sql", "css", "js"],
        description: "2 POSTES À POURVOIR :        Développeur(se) – CDI      PROFIL RECHERCHÉ :      Vous avez de réelles compétences techniques en développement et de bonnes connaissances en html, css, php, mysql, javascript/jquery, expérience souhaitée.",
        applicationEmail: "rh@graph.com",
        minRate: "20$",
        maxRate: "100$",
        minSalary: "20000$",
        maxSalary: "50000$",
        companyId: "1"
    },
    {
        id: "2",
        title: "fullstack developer",
        location: "France",
        region: "Lyon",
        type: "full Time",
        category: ["Fullstack", "System"],
        tags: ["python", "mongodb", "js", "angular"],
        description: "Under direct supervision, assist in formulating system scope and objective through research and fact-finding to develop or modify a data processing application. Prepare detailed specifications from which programs will be written.",
        applicationEmail: "rh@bbva.com",
        minRate: "30$",
        maxRate: "120$",
        minSalary: "25000$",
        maxSalary: "60000$",
        companyId: "2"
    }
];

const companies = [
    {
        id: "1",
        name: "graph",
        website: "www.graph.com",
        tagline: "International web agency that creates scalables websites",
        twitterUsername: "@graph",
        logo: "companies/logos/travelsea.png",
        email: "contac@graph.com"
    },
    {
        id: "2",
        name: "bbva",
        website: "www.bbva.com",
        tagline: "Compass Bank dba BBVA Compass",
        twitterUsername: "@bbva",
        logo: "companies/logos/bbva.jpg",
        email: "contac@bbva.com"
    }
]

export { jobs, companies };