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
            company: "Turbine Games",
            title: "Cloud Solutions & DevOps Engineer",
            date: "June, 2015 - present",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum dictum accumsan. Vestibulum accumsan, ipsum quis viverra porta, massa mauris eleifend nisi, sit amet cursus quam ligula in odio. Mauris eget ex eros. Vestibulum at arcu in dui rhoncus lacinia sit amet sed ex. Curabitur malesuada porta tempus. Nam id dictum augue, iaculis consequat lorem."
        },
        {
            company: "Whole Foods Market",
            title: "Signmaker / Graphic Artist",
            date: "August, 2009 - August, 2012",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum dictum accumsan. Vestibulum accumsan, ipsum quis viverra porta, massa mauris eleifend nisi, sit amet cursus quam ligula in odio. Mauris eget ex eros. Vestibulum at arcu in dui rhoncus lacinia sit amet sed ex. Curabitur malesuada porta tempus. Nam id dictum augue, iaculis consequat lorem."
        },
    ],
    education: [
      {
        school: "MassBay",
        date: "Fall 2012 - Fall 2015"
      },
      {
        school: "Academy if Art University",
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
