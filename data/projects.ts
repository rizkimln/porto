export interface Project {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  images: string[];
  githubLink?: string;
  youtubeLink?: string;
  liveLink?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'VIGO POS System',
    shortDescription: 'Full-stack Developed a POS system using Next.js and Supabase featuring inventory management, stock opname, and transaction monitoring.',
    description:
      'Final Thesis Project - A comprehensive Point of Sale (POS) system built with Next.js and Supabase to support retail operational workflows. The system provides inventory management, stock opname, and real-time transaction monitoring to improve accuracy and efficiency. It implements role-based access control (RBAC) for different user roles such as admin and cashier, ensuring secure and structured access to system features. The application is deployed as both a web platform and Android wrapper to support multi-device usage in daily operations. Developed collaboratively by a team consisting of two Hackers (developers) and one Hustler (business strategist), where I contributed as a Full-Stack Developer, responsible for designing and implementing both frontend and backend features, database integration, authentication, and system deployment.',
    technologies: ['Next.js', 'React', 'PostgreSQL', 'Supabase', 'Tailwind CSS', 'Capacitor/TWA', 'WebView wrapper'],
    images: ['vigologo.png', 'vigoll.jpeg', 'kkk1.png', 'kk2.png', 'kk3.png', 'kk5.png', 'kk6.png', 'kk7.png'],
    githubLink: 'https://github.com/officialvigopos/VigoPOS',
    liveLink: 'https://www.instagram.com/vigoofficial.id?igsh=OGhpaHY4a2x2ejZl',
    youtubeLink: 'https://youtu.be/m80Rl-699aM',
  },
  {
    id: 2,
    title: 'Website Padukuhan Samiranan',
    shortDescription: 'Developed static profile site with Next.js for UMKM, history, andcommunity info. Completed independently.',
    description:
      'I developed the Samiranan Hamlet landing page website (samiranan.my.id) with the goal of supporting the digitalization of village information, promoting tourism, and increasing the visibility of local MSMEs. The website was designed using Next.js & React, with a responsive design and a custom domain, making it easily accessible to the wider community. The website displays the latest hamlet map, information on tourism and MSME potential, and a schedule of routine community activities. Through this project, Samiranan Hamlet can digitally promote the villages potential and reach a wider audience.',
    technologies: ['React', 'Next.js', 'Vercel', 'Tailwind CSS'],
    images: ['samiranan1.png', 'samiranan2.png', 'samiranan3.png'],
    githubLink: 'https://github.com/rizkimln/samiranan',
    liveLink: 'https://www.samiranan.my.id/',
  },
  {
    id: 3,
    title: 'Aplikasi Mobile Android NutriPlan',
    shortDescription: 'Served as Project Manager and Developer in a team of 4 members, building a health application featuring BMI calculation, personalized meal programs, and an AI-powered nutrition chatbot.',
    description:
      'NutriPlan is a health-focused Android application developed by a team of four members to help users maintain a healthier lifestyle. As the Project Manager, I coordinated project planning, task distribution, and development progress while actively contributing to the application development. The application provides several key features, including BMI calculation, healthy food recommendations, 30-day bulking and diet programs, and an AI-powered chatbot that offers nutrition guidance and health-related assistance. The project was designed to deliver an accessible and user-friendly digital solution for health and wellness management.',
    technologies: ['Kotlin', 'Firebase', 'Android Studio', 'OpenAI API'],
    images: ['plan1.jpg', 'plan2.jpg', 'plan4'],
    githubLink: 'https://github.com/rizkimln/NutriPlan',
    youtubeLink: 'https://youtu.be/TAOYfq-LBXs?si=oCXp1bPaxn4fUQ_4',
  },
  {
    id: 4,
    title: 'Web app Path Health (Mental Health App)',
    shortDescription: 'Designed a mental health application that enables users to consult with psychologists, monitor stress levels, and access mental health support through an intuitive user experience.',
    description:
      'PathHealth is a mental health application designed by a team of four members to help users manage their mental well-being. As the UI/UX Designer, I was responsible for designing user flows, wireframes, high-fidelity interfaces, and the application logo using Figma. The application provides features such as stress level assessment, psychologist consultation, AI-powered chatbot support, and supervision by authorized mental health professionals. The design focused on creating an intuitive, accessible, and user-friendly experience to encourage users to seek mental health support comfortably and efficiently.',
    technologies: ['Figma', 'UI Design', 'UX Research', 'Wireframing', 'Prototyping', 'Logo Design'],
    images: ['pathhealt0.jpg', 'health1.jpg'],
    githubLink: 'https://github.com/rizkimln/PathHealth',
    youtubeLink: 'https://youtu.be/grKPx_8_PDc?si=JJERd73-N4h9ek8A',
  },
  {
    id: 5,
    title: 'Website DePrambanan Tour',
    shortDescription: 'Collaborated in a 4-member team as a Frontend Developer to build a responsive tourism and accommodation website for the Prambanan area using Bootstrap and web technologies.',
    description:
      'DePrambanan Tour is a tourism and accommodation website developed by a team of four members to promote tourist destinations and lodging services around Prambanan Temple. As a Frontend Developer, I was responsible for developing responsive user interfaces, implementing website layouts, and enhancing navigation to provide a seamless user experience across desktop and mobile devices. The website enables users to explore tourism attractions, accommodation options, and travel-related information in the Prambanan area. The system was built using HTML, CSS, JavaScript, PHP, and Bootstrap, with a MySQL database managed through phpMyAdmin for data storage and administration.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL'],
    images: ['pramban1.png'],
    githubLink: 'https://github.com/rizkimln/deprambanantour',
    youtubeLink: 'https://youtu.be/XmeQYBfJBgM',
  },
];
