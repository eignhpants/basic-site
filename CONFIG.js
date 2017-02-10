var config = {};

config.name = "basic";
config.header = "Ian Cullinane";
config.timeline = {
    user: {
        name: "Ian Cullinane",
        contact: "ian.cullinane@gmail.com",
        about: "I like stuff.",
        skills: ['Python','Javascript','HTML/CSS','Linux']
    },
    work_history: [
      {
          company: "Aligned Software",
          title: "Software Engineer - Consultant at Turbine Games",
          date: "June 2015 - April 2016",
          description: "Continued building the tools I created during my internship at Turbine.",
          bullets: [
            "Wrote command line tooks for Linux (Debian, RHEL)",
            "Created and deployed web based tools to automate deployments",
            "Built and deployed services via Jenkins",
            "Extensive use of Docker"
          ]
      },
        {
            company: "Turbine Games",
            title: "Cloud Solutions & DevOps Intern",
            date: "June 2015 - April 2016",
            description: "Assisted in making web and system based tools for monitoring and cost reduction of an AWS Web Services cloud environment. Helped manage cloud formation and network wide maintenance scripts.",
            bullets: [
              "Wrote command line tooks for Linux (Debian, RHEL)",
              "Created and deployed web based tools to automate deployments",
              "Built and deployed services via Jenkins",
              "Extensive use of Docker"
            ]
        },
        {
            company: "Whole Foods Market",
            title: "Signmaker / Graphic Artist",
            date: "October, 2009 - August, 2012",
            description: "During this time I worked as a store level signmaker/graphic artists. I created hand made displays as well as materials produced using Adobe software. ",
            bullets: [
              "A bullet",
              "Another bullet"
            ]
        },
    ],
    education: [
      {
        school: "MassBay Community College",
        date: "Fall 2012 - Fall 2015"
      },
      {
        school: "Academy if Art University San Francisco",
        date: "Spring 2004 - Fall 2006"
      },
      {
        school: "Massachusetts College of Art",
        date: "Fall 2002 - Spring 2003"
      }
    ]
};
config.default_stuff =  ['red','green','blue','apple','yellow','orange','politics'];
config.port = process.env.DEPLOY_PORT || 3334;

module.exports = config;
