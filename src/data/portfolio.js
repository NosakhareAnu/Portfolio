export const profile = {
  name: 'Nosakhare Festus-Olagbende',
  shortName: 'Nosakhare',
  title: 'Software Developer',
  introduction:
    "I build full-stack web and mobile applications, working on React interfaces, backend services, APIs, databases, and the application logic that connects them. I'm also developing deeper experience in AI and machine learning, and my background in product design helps me build software around how people actually use it.",
  heroProfile:
    "Computer Science graduate focused on software development, with frontend and full-stack internship experience. I'm currently building deeper skills in AI and machine learning.",
  location: 'Texas, USA',
  workAuthorization: 'No visa sponsorship required',
  about: [
    "I'm a Computer Science graduate focused on software development. Most of my experience is in frontend and full-stack work: React applications, backend services, REST APIs, authentication, databases, and mobile development with React Native.",
    "I'm also building deeper skills in artificial intelligence and machine learning, mainly through Python and applied projects.",
    "I've worked in product design too, and it still shapes how I build. It makes me think about user flows, information hierarchy, and usability before I start writing code. Software engineering, though, is the main direction of my career.",
  ],
  education: {
    institution: 'Pan-Atlantic University',
    qualification: 'B.Sc. Computer Science',
  },
};

export const defaultTitle = `${profile.name} — ${profile.title}`;

export const contactLinks = [
  {
    id: 'email',
    label: 'Email',
    actionLabel: 'Email me',
    display: 'nosakhareda@gmail.com',
    href: 'mailto:nosakhareda@gmail.com',
    external: false,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    actionLabel: 'LinkedIn',
    display: 'linkedin.com/in/nosakhareanu',
    href: 'https://www.linkedin.com/in/nosakhareanu/',
    external: true,
  },
  {
    id: 'github',
    label: 'GitHub',
    actionLabel: 'GitHub',
    display: 'github.com/NosakhareAnu',
    href: 'https://github.com/NosakhareAnu',
    external: true,
  },
];

export const experience = [
  {
    role: 'Full-Stack Web Development Intern',
    company: 'OyaSync',
    employmentType: 'Internship',
    dates: 'Jul 2025 – Dec 2025',
    duration: '6 months',
    location: 'Lagos, Nigeria · Remote',
    highlights: [
      'Contributed to team development projects using React, Tailwind CSS, Firebase, and REST APIs across frontend and backend features.',
      'Implemented authentication flows, data handling, and responsive interface components as part of product development tasks.',
      'Collaborated with senior developers and mentors during sprint reviews, applying feedback to improve code structure, functionality, and implementation quality.',
    ],
  },
  {
    role: 'Product Design Intern',
    company: 'Cyncra Technologies',
    employmentType: 'Internship',
    dates: 'Jul 2025 – Sep 2025',
    duration: '3 months',
    location: 'Lagos, Nigeria · Remote',
    highlights: [
      'Designed and refined web and mobile interface layouts in Figma while contributing to shared design systems.',
      'Contributed to a website redesign, aligning interface decisions with updated brand and user experience goals.',
      'Participated in design reviews, team meetings, and collaborative ideation sessions to refine product interfaces and maintain consistency.',
    ],
  },
  {
    role: 'Frontend Web Development Intern',
    company: 'OyaSync',
    employmentType: 'Internship',
    dates: 'Jul 2024 – Sep 2024',
    duration: '3 months',
    location: 'Lagos, Nigeria · Remote',
    highlights: [
      'Assisted in developing and maintaining responsive web interfaces using React, HTML, and CSS.',
      'Translated design requirements into functional, user-friendly interface components.',
      'Collaborated with team members during implementation and code reviews, applying feedback to improve consistency and performance.',
    ],
  },
];

export const pendingLinks = {
  resume: null,
  productionUrl: 'https://www.nosakhare.online/',
};

export const navigation = [
  { label: 'Experience', hash: 'experience' },
  { label: 'Capabilities', hash: 'capabilities' },
  { label: 'Work', hash: 'selected-work' },
  { label: 'About', hash: 'about' },
  { label: 'Contact', hash: 'contact' },
];

export const projects = [
  {
    slug: 'trackchow',
    name: 'TrackChow',
    subtitle: 'Food Tracking Designed Around Nigerian Meals',
    classification: 'Built Product',
    disciplines: ['Full-Stack Development', 'Mobile Development', 'Product Design'],
    stackLabel: 'Built with',
    stack: ['React Native', 'Expo', 'Node.js', 'Express.js', 'Supabase', 'PostgreSQL'],
    featured: true,
    context: 'Flagship project',
    cardDescription:
      'A mobile food-tracking application designed to make nutrition logging more practical for Nigerian users through familiar foods, realistic serving units, faster meal entry, and clear calorie and macronutrient feedback.',
    intro: [
      'TrackChow is a mobile food-tracking application I designed and developed to address a simple problem: many existing nutrition apps are not built around the way Nigerian users actually eat.',
      'The project focuses on local meal support, familiar portion measurements, faster logging, and nutrition information that is easy to understand and use consistently.',
    ],
    projectDetails: [
      { label: 'Project type', value: 'Built Product' },
      { label: 'Role', value: 'Product Designer & Full-Stack Developer' },
      {
        label: 'Core technologies',
        value: 'React Native · Expo · Node.js · Express.js · Supabase · PostgreSQL · Figma',
      },
    ],
    sections: [
      {
        id: 'problem',
        heading: 'Making food tracking fit the user',
        paragraphs: [
          'Most mainstream food-tracking applications are built around Western food databases and standardized measurements such as cups, ounces, and grams. For Nigerian users, this can make something as simple as logging a meal unnecessarily difficult.',
          'Common local foods may be missing, familiar serving sizes may not be available, and users may need to estimate quantities using measurements that do not reflect how their meals are normally served.',
          'The challenge was not simply to build another calorie tracker. It was to create a logging experience that felt more natural for the people it was designed for.',
        ],
      },
      {
        id: 'role',
        heading: 'From product decisions to implementation',
        paragraphs: [
          'I worked across both the product and engineering sides of TrackChow. I designed the user flows and interface, structured the meal-logging experience, developed the mobile application, implemented the backend API, and connected the product to its database.',
          'Working across the full product gave me the ability to make design decisions with implementation in mind. Instead of treating the interface and the underlying system as separate problems, I could refine both together as the application developed.',
        ],
        listLabel: 'Responsibilities',
        bullets: [
          'Product and interaction design',
          'Mobile interface development',
          'Backend API development',
          'Database design and integration',
          'Food logging and nutrition calculations',
          'Offline behavior and synchronization',
          'Functional and usability testing',
        ],
      },
      {
        id: 'product-decisions',
        heading: 'Reducing the effort required to log a meal',
        introduction: 'The core design decisions focused on removing friction from repeated daily use.',
        items: [
          {
            title: 'Use familiar serving units',
            description:
              'Instead of forcing every meal into grams or Western household measurements, TrackChow supports practical units that users are more likely to recognize in everyday meals, including plates, bowls, wraps, bottles, scoops, serving spoons, and takeaway packs.',
          },
          {
            title: 'Design around Nigerian foods',
            description:
              'Local meals are treated as a core part of the product rather than an edge case. Users can search for Nigerian foods and add them directly to their diary with calorie and macronutrient information.',
          },
          {
            title: 'Make repeated logging faster',
            description:
              'Recent meals and reusable meal templates reduce the amount of work required when users eat similar foods regularly. The goal was to avoid making every meal entry feel like starting from scratch.',
          },
          {
            title: 'Keep nutrition feedback understandable',
            description:
              'Calories and macronutrients are summarized in the diary so users can understand how individual meals contribute to their daily goals without navigating through multiple screens.',
          },
        ],
      },
      {
        id: 'functionality',
        heading: 'A food diary built for everyday use',
        items: [
          {
            title: 'Meal logging',
            description:
              'Users can search for foods, choose a practical serving quantity, and add meals to breakfast, lunch, dinner, or snacks.',
          },
          {
            title: 'Daily nutrition summary',
            description: "The diary provides calorie and macronutrient feedback against the user's daily goals.",
          },
          {
            title: 'Templates and recent meals',
            description:
              'Frequently logged meals can be reused to reduce repetitive entry and make daily tracking faster.',
          },
          {
            title: 'Profiles and nutrition goals',
            description:
              'Users can maintain profile information and calorie goals that shape the daily tracking experience.',
          },
          {
            title: 'Streaks',
            description: 'Logging streaks provide lightweight feedback around consistency.',
          },
          {
            title: 'Offline support',
            description:
              'Local device storage allows important logging behavior to continue when connectivity is unavailable, with synchronization handled when possible.',
          },
          {
            title: 'Missing-food fallback',
            description:
              'When a food is unavailable in the existing data, the application includes an AI-assisted fallback for obtaining nutrition information rather than leaving the user at a dead end.',
          },
        ],
      },
      {
        id: 'engineering',
        heading: 'Building the product behind the interface',
        paragraphs: [
          'The mobile application was built with React Native and Expo, with a Node.js and Express.js backend handling application logic and API requests. Supabase PostgreSQL provides persistent data storage for users, foods, diary entries, and related application data.',
          'Nutrition calculations are based on the selected food, serving information, and quantity before the results are presented back to the user in the diary.',
          'Because food logging is a repeated everyday action, the implementation also accounts for interrupted connectivity. Local device storage supports offline behavior, while synchronization allows data to be reconciled when connectivity returns.',
        ],
      },
      {
        id: 'screenshots',
        heading: 'Product screens',
        introduction: 'Screenshot slots are prepared for the final application captures.',
        screenshotSlots: [
          'Diary / daily overview',
          'Food search',
          'Meal quantity / serving selection',
          'Meal logging result / nutrition summary',
          'Templates or recent meals',
          'Profile / goals / streak functionality',
        ],
      },
      {
        id: 'testing-outcome',
        heading: 'Testing the complete experience',
        paragraphs: [
          'TrackChow was evaluated through functional testing, API testing, nutrition calculation checks, offline-sync testing, and usability evaluation.',
          'Eight student participants used the application during usability testing. The average meal-logging time was approximately 16 seconds, and the product received an average user rating of 4.5 out of 5.',
          'The testing was useful not only for checking whether features worked, but also for evaluating whether the central idea of the product — making food tracking quicker and more understandable — translated into the actual experience.',
        ],
        stats: [
          { value: '16 sec', label: 'Average meal logging time' },
          { value: '4.5 / 5', label: 'Average user feedback' },
          { value: '8', label: 'Usability testing participants' },
        ],
      },
      {
        id: 'reflection',
        heading: 'What I learned',
        paragraphs: [
          'TrackChow reinforced how closely product design and engineering decisions influence each other.',
          'A technically correct nutrition system is not particularly useful if entering a meal takes too much effort. Likewise, a clean interface cannot solve the problem if the underlying food data and serving model do not reflect the user’s context.',
          'Building the application end-to-end pushed me to think about both sides of that relationship: how information should be structured in the system and how little of that complexity the user should have to think about.',
        ],
      },
    ],
  },
  {
    slug: 'agrion',
    name: 'Agrion',
    subtitle: 'Facility Management Dashboard',
    classification: 'Design Exploration',
    disciplines: ['Product Design', 'UI/UX Design', 'Dashboard Design', 'Figma'],
    stackLabel: 'Designed in',
    stack: ['Figma'],
    cardNote: 'Design only. Not developed or deployed.',
    featured: false,
    context: 'Self-directed design exploration',
    cardDescription:
      'A product design exploration focused on organizing properties, bookings, earnings, notifications, and operational information into a clear dashboard experience for facility owners.',
    intro: [
      'Agrion is a self-directed product design exploration for a facility-management platform.',
      'The concept explores how facility owners managing multiple locations could monitor their properties, bookings, earnings, notifications, and day-to-day activity from a single interface without overwhelming them with information.',
    ],
    implementationNote:
      'This is a design exploration. It was not developed, deployed, commissioned by a client, or tested with real users.',
    projectDetails: [
      { label: 'Project type', value: 'Design Exploration' },
      { label: 'Role', value: 'Product Designer' },
      { label: 'Tool', value: 'Figma' },
    ],
    sections: [
      {
        id: 'design-challenge',
        heading: 'Making operational information easier to scan',
        paragraphs: [
          'Facility-management dashboards can contain a large amount of information at once. Properties, bookings, earnings, account status, and notifications may all require attention, but giving every item equal visual weight can make the interface difficult to navigate.',
          'The design challenge for Agrion was to organize these different tasks into a dashboard that allowed important information to be understood quickly while keeping deeper actions accessible when needed.',
        ],
      },
      {
        id: 'information-architecture',
        heading: 'Organizing the product around recurring tasks',
        paragraphs: [
          'The main navigation was organized around a small set of recurring activities: Dashboard, My Facility, Bookings, Earnings, and Profile.',
          'This gives each major task a predictable location while allowing the dashboard itself to act as an overview rather than becoming the only place where users perform every action.',
          'The supporting notification experience provides another way to surface activity that may require attention without permanently adding more information to the main dashboard.',
        ],
      },
      {
        id: 'interface-decisions',
        heading: 'Creating hierarchy in a data-heavy interface',
        items: [
          {
            title: 'Surface the important numbers first',
            description:
              'Summary cards bring high-level information such as earnings, managed properties, and progress toward goals to the top of the experience before users reach more detailed records.',
          },
          {
            title: 'Separate overview from detail',
            description:
              'The dashboard provides an operational snapshot, while dedicated facility, booking, earnings, and notification views allow users to move into more detailed tasks without overcrowding the home view.',
          },
          {
            title: 'Use status as a scanning aid',
            description:
              'Statuses, progress indicators, and compact visual treatments help users distinguish successful, failed, pending, or attention-worthy activity without relying on long blocks of text.',
          },
          {
            title: 'Keep actions close to context',
            description:
              'Booking controls, property actions, record details, and notification actions are positioned near the information they affect so users do not have to move through unrelated screens to continue a task.',
          },
        ],
      },
      {
        id: 'key-screens',
        heading: 'Designing the core workflow',
        items: [
          {
            title: 'Dashboard Overview',
            description:
              'A high-level operational view combining property information, activity, account progress, and other information requiring quick attention.',
          },
          {
            title: 'Facility Owner Dashboard',
            description: 'A management view for reviewing facilities and associated operational information.',
          },
          {
            title: 'Booking Form',
            description: 'A focused booking workflow combining facility information, scheduling, and date selection.',
          },
          {
            title: 'Notifications',
            description:
              'A centralized view for reviewing recent activity and responding to items that require action.',
          },
          {
            title: 'Earnings Overview',
            description:
              'A financial dashboard presenting total earnings, property performance, progress toward targets, and transaction records.',
          },
        ],
      },
      {
        id: 'visual-direction',
        heading: 'A restrained interface for frequent use',
        paragraphs: [
          'The interface uses a consistent dark-green navigation system against light content surfaces, allowing the navigation and primary actions to remain recognizable without competing with the data.',
          'Cards, tables, progress indicators, status treatments, and spacing establish hierarchy across the different dashboard views. The visual system was kept relatively restrained because the product is intended to support frequent operational tasks rather than behave like a marketing interface.',
        ],
      },
      {
        id: 'reflection',
        heading: 'What this exploration taught me',
        paragraphs: [
          'Agrion was an exercise in designing for information density.',
          'The project pushed me to think beyond individual screens and consider how navigation, hierarchy, status, and repeated interface patterns work together across a larger product.',
          'It also reinforced the importance of deciding what information deserves immediate attention and what can remain available one level deeper in the interface.',
        ],
      },
    ],
  },
];

// `tier` sets visual weight: primary (main focus), developing (active growth area), supporting (complementary).
export const capabilities = [
  {
    tier: 'primary',
    title: 'Full-stack development',
    summary:
      'Responsive interfaces, backend services, REST APIs, authentication flows, and database-backed features, built end to end.',
    groups: [
      { label: 'Frontend', items: ['JavaScript', 'React', 'Next.js', 'HTML', 'CSS'] },
      { label: 'Mobile', items: ['React Native'] },
      { label: 'Backend', items: ['Node.js', 'Express', 'REST APIs'] },
      { label: 'Data', items: ['PostgreSQL', 'Supabase', 'Firebase'] },
      { label: 'Tools', items: ['Git'] },
    ],
  },
  {
    tier: 'developing',
    status: 'Currently developing',
    title: 'AI & machine learning',
    summary:
      'Building deeper experience with Python-based machine learning, model workflows, embeddings, retrieval, and applied AI projects.',
    items: ['Python', 'Machine learning', 'PyTorch', 'Embeddings', 'Retrieval & RAG', 'Data processing'],
  },
  {
    tier: 'supporting',
    title: 'Product & interface design',
    summary:
      'My design background helps me think through user flows, information hierarchy, and interaction decisions in the interfaces I build.',
    items: ['Figma', 'UI/UX design', 'User flows', 'Wireframing', 'Prototyping', 'Responsive interface design'],
  },
];
