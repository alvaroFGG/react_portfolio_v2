
const aboutMe = {
  name: "Álvaro Fuentenebro",
  age: "20",
  work: "Software Developer",
  description: "I am 20 years old and I am from Spain. I've been developing webs and other apps since I started a Vocational Training Course about Software Developement. I've worked for a couple of international companies like NTT Data as a junior programmer. I recently did a Bootcamp about Front-End where I learned how to use Angular, Node, React and other frameworks that helps me when I develop webs.",
}

const experiences = [
  {
    type: "work",
    name: "NTT Data Europe & LATAM",
    description: "Junior Developer",
    date: "2021 - PRESENT"
  },
  {
    type: "studies",
    name: "Cloud Computing Course, Upgrade Hub",
    description: "Cloud Computing with AWS and Azure",
    date: "05/2022 - PRESENT"
  },
  {
    type: "studies",
    name: "Frontend Development Bootcamp, Upgrade Hub",
    description: "Web Development W/ HTML, CSS, SASS, JS, Angular & React",
    date: "03/2022 - PRESENT"
  },
  {
    type: "studies",
    name: "Software Development Training Course (DAM)",
    description: "Centro Europeo de Estudios Profesionales",
    date: "2019 - 2021"
  },
  {
    type: "studies",
    name: "High School (Senior year)",
    description: "IES Profesor Máximo Trueba",
    date: "2017 - 2019"
  }
]


const projects = [
    {
      name: 'BMW Official Page',
      description:
        'This is a project that I made during the frontend bootcamp, I tried to replicate the BMW page',
      stack: ['HTML', 'SCSS', 'JavaScript'],
      sourceCode: 'https://github.com/alvaroFGG/BMW_Page',
    },
    {
      name: 'Poke API',
      description:
        'This was the final project of the JavaScript module, I used the Pokémon API to make a Pokedex. You can see a home page where the pokemons are shown, a seeker, and each pokemon card has a functionality that shows the stats.',
      stack: ['JavaScript', 'SCSS', 'HTML','API'],
      sourceCode: 'https://github.com/alvaroFGG/pokeapi'
    },
    {
      name: 'The Game Awards',
      description:
        'This was a group project, it is made with Angular, it has the home component where you can see all the nominated games, a podium where the best three games are shown and a management component. It also has a seeker, animations and routing.',
      stack: ['HTML', 'SCSS', 'Angular', 'TypeScript', 'JSON Server'],
      sourceCode: 'https://github.com/alvaroFGG/TheGameAwards-Angular'
    },
  ]

  const skills = [
    'HTML',
    'CSS',
    'SASS',
    'JavaScript',
    'TypeScript',
    'React',
    'Redux',
    'Angular',
    'MySQL',
    'MongoDB',
    'SQL/Oracle',
    'Git',
    'AWS',
  ]

export {aboutMe, experiences, projects, skills};