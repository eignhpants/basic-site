var config = {};

config.name = "basic";
config.header = "Ian Cullinane";
config.timeline = {
    user: {
        name: "Ian Cullinane",
        contact: "ian.cullinane@gmail.com",
        skills: ['Python','Javascript','HTML/CSS','Linux']
    },
    work_history: [
      {
          company: "Aligned Software",
          title: "Software Engineer - Consultant at Turbine Games",
          date: "March 2016 - Present",
          description: "Continued building the tools I created during my internship at Turbine. In addition I worked on the deployment and monitoring of said tools in Amazon Web Services.",
          bullets: [
            "> Built, deployed, and automated services via Jenkins",
            "> Extensive use of Docker for application development, testing, and deployment",
            "> Maintenance and monitoring of Cloud infrastructure",
            "> Assisted in creation of Cloud Introspection and Workflow tool"
          ]
      },
        {
            company: "Turbine Games",
            title: "Cloud Solutions & DevOps Intern",
            date: "June 2015 - April 2016",
            description: "Developed web and system based tools for monitoring and cost reduction of an Amazon Web Services cloud environment. Helped manage cloud formation and network wide maintenance scripts.",
            bullets: [
              "> Wrote system tooks for Linux (Debian, RHEL) to monitor performance metrics",
              "> Built web based tools to automate application deployments",
              "> Created ChatBots which allowed teams to use chat tools for operations tasks"

            ]
        },
        {
            company: "Whole Foods Market",
            title: "Signmaker / Graphic Artist",
            date: "October, 2009 - August, 2012",
            description: "Planned and executed visual style for store level marketing. Created a combination of hand made displays as well as materials produced using Adobe software. In addition I created materials used in region-wide campaigns used throughout Southern California.",
            bullets: [
              "> Extensive use of Adobe Create Suite",
              "> Planned marketing campaigns and identity development",
              "> Created materials used in regions wide promotions",
              "> Collected data used provide customers insight into price comaparisons with competitors"
            ]
        },
    ],
    education: [
      {
        school: "MassBay Community College",
        concentration: "Computer Science",
        date: "Fall 2012 - Fall 2015"
      },
      {
        school: "Academy of Art University San Francisco",
        concentration: "Motion Pictures & Television",
        date: "Spring 2004 - Fall 2006"
      },
      {
        school: "Massachusetts College of Art",
        concentration: "Illustration",
        date: "Fall 2002 - Spring 2003"
      }
    ]
};
config.default_stuff =  ['red','green','blue','apple','yellow','orange','politics'];
config.port = process.env.DEPLOY_PORT || 3334;

module.exports = config;
