export type IProject = {
  name: string
  roles: string[]
  timeline: string
  description: string
  image_url?: string
  link?: string
  org?: {
    name: string
    website?: string
  }
}

const orgs = {
  celus: {
    name: 'Celus',
    website: 'https://celus.io',
  },
  blockStars: {
    name: 'Block-stars',
    website: 'https://block-stars.com',
  },
  librium: {
    name: 'Librium Tech Ltd',
    website: 'https://lopeer.com',
  },
}

const Celus: IProject[] = [
  {
    name: 'Supernova UI - Design Studiio',
    roles: ['Frontend Engineer'],
    timeline: 'June 2023',
    description: `## Implementation of auto-port addition
    \u2022 Discovery task to figure best UI/UX approach for port addition impplementation
    \u2022 Implementation of new features
    \u2022 Design canvas improvements
    \u2022 Auto-resizing functionality and performance improvement`,
    image_url: 'project/supernova-logo.png',
    org: orgs.celus,
  },
]

const Librium: IProject[] = [
  {
    name: 'Lopeer',
    roles: ['Blockchain', 'React Native', 'Typescript', 'ECMAScript'],
    timeline: 'May - June 2022',
    description: `## Cryptocurrency exchange and saving app
    \u2022 UI redesign
    \u2022 Completion of all UI flows
    \u2022 Instant messaging`,
    link: 'https://play.google.com/store/apps/details?id=com.lopeer.lopeer',
    org: orgs?.librium,
    image_url: 'project/lopeer-icon.png',
  },
]

const BlockStar: IProject[] = [
  {
    name: 'Metamask',
    roles: [
      'Browser extension',
      'Blockchain',
      'Reactjs',
      'Contract',
      'ECMAScript',
    ],
    timeline: 'May 2022',
    image_url: 'project/metamask-icon.png',
    description: `## Customization of Metamask Extension
    \u2022 Custom branding
    \u2022 Autoloading of custom tokens`,
    org: orgs?.blockStars,
  },
  {
    name: 'Coin Market API',
    roles: ['Backend Nodejs Engineer'],
    timeline: 'July 2022',
    description: `## Exchange API implementation
    \u2022 Research
    \u2022 API design and implementation
    \u2022 Implementation of an API distribution system
    \u2022 Documentation of API using Postman and Swagger
    `,
    image_url: 'node-js.png',
    org: orgs?.blockStars,
    // link: "https://coin.api.block-stars-dev.com/api/v1/docs",
  },
  {
    name: 'Cointc',
    org: orgs?.blockStars,
    roles: [
      'Project manager',
      'Nodejs',
      'Reactjs',
      'Blockchain',
      'ECMAScript',
      'PostgreSQL',
    ],
    timeline: 'Oct 2021 - Jan 2022',
    description: `## P2P Cryptocurrency Trading platform
    \u2022 UI design implementation
    \u2022 Crypto OTC/P2P functionality
    \u2022 API Integration
    \u2022 User and Admin dashboard`,
    // link: 'https://cointc.net',
    image_url: 'project/cointc-icon.png',
  },
]

const Others: IProject[] = [
  {
    name: 'Relaywash',
    roles: ['React Native', 'ECMAScript'],
    timeline: 'June 2022',
    description: `## On demand laundry delivery mobile app
    \u2022 Completion of all UI flows
    \u2022 UI functionality implementation
    `,
    link: 'https://play.google.com/store/apps/details?id=com.relaywash.com&pli=1',
    image_url: 'project/relaywash-icon.png',
  },
  {
    name: 'Perzsi',
    roles: [
      'React',
      'ECMAScript',
      'Next.js',
      'AWS',
      'TailwindCSS',
      'ChakraUI',
      'MongoDB',
    ],
    timeline: 'July - Aug 2021',
    description: `## Ecommerce product scraping app
      \u2022 Data scrapping
      \u2022 UI design implementation`,
    link: 'https://perzsi.com',
    image_url: 'project/perzsi-icon.png',
  },
  {
    name: 'Ordavo.nl',
    roles: ['Vue.js', 'Nuxt.js', 'ECMAScript'],
    timeline: 'Jan – Jun 2021',
    description: `## Ecommerce web app
      \u2022 SEO optimization
      \u2022 UI design implementation
      \u2022 Instant messaging
      \u2022 Internalization`,
    link: 'https://ordavonl.netlify.app',
    image_url: 'vue.svg',
  },
  {
    name: 'EGLogistics',
    roles: ['Vue.js', 'Nuxt.js', 'ECMAScript'],
    timeline: 'Oct 2021',
    description: `## Logistics web application
      \u2022 UI / UX
      \u2022 Payment integration
      \u2022 SEO optimization
      \u2022 Web application interface design
      \u2022 Custom Google Map Integration`,
    link: 'https://eglogistics-dev.netlify.app',
    image_url: 'vue.svg',
  },
]
export default [...Celus, ...BlockStar, ...Librium, ...Others]
