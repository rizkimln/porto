export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  image: string;
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: 'Mei 2025',
    credentialUrl: '#',
    image: '/certificates/introoo.png',
  },
  {
    id: 2,
    title: 'Web Penetration Testing Course',
    issuer: 'Cyber Academy Indonesia',
    date: 'Desember 2025',
    credentialUrl: 'https://www.cyberacademy.id/certificate/BWH01112254767',
    image: '/certificates/webtes.png',
  },
  {
    id: 3,
    title: 'Foundations of Cybersecurity',
    issuer: 'COURSERA - GOOGLE',
    date: 'Januari 2026',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/JBOQNAESQJ7V',
    image: '/certificates/course1.png',
  },
  {
    id: 4,
    title: 'Play It Safe: Manage Security Risks',
    issuer: 'COURSERA - GOOGLE',
    date: 'Januari 2026',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/0G6PWQ5QVYQK',
    image: '/certificates/course2.png',
  },
  {
    id: 5,
    title: 'Connect and Protect: Networks and Network Security',
    issuer: 'COURSERA - GOOGLE',
    date: 'Februari 2026',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/4BOXATY7DUNR',
    image: '/certificates/course3.png',
  },
];
