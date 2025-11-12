// --- DEFINISI TIPE DATA ---
export interface JobExperienceData {
  company: string;
  timeframe: string;
  logoUrl: string;
  tasks: string[];
}

// --- DATA JOB EXPERIENCES ---
export const jobExperiences: JobExperienceData[] = [
  {
    company: 'Airbnb',
    timeframe: '2025 - Present',
    logoUrl: '/images/airbnb.png',
    tasks: [
      'Develop responsive and user-friendly web interfaces using modern frontend technologies.',
      'Collaborate with UI/UX designers to turn design mockups into functional components.',
      'Optimize web applications for maximum speed and scalability.',
      'Ensure cross-browser and cross-platform compatibility.',
      'Implement reusable code and component libraries for future use.',
    ],
  },
  {
    company: 'Coinbase',
    timeframe: '2025 - Present',
    logoUrl: '/images/coinbase.png',
    tasks: [
      'Develop responsive and user-friendly web interfaces using modern frontend technologies.',
      'Collaborate with UI/UX designers to turn design mockups into functional components.',
      'Optimize web applications for maximum speed and scalability.',
      'Ensure cross-browser and cross-platform compatibility.',
      'Implement reusable code and component libraries for future use.',
    ],
  },
  {
    company: 'Webflow',
    timeframe: '2025 - Present',
    logoUrl: '/images/webflow.png',
    tasks: [
      'Develop responsive and user-friendly web interfaces using modern frontend technologies.',
      'Collaborate with UI/UX designers to turn design mockups into functional components.',
      'Optimize web applications for maximum speed and scalability.',
      'Ensure cross-browser and cross-platform compatibility.',
      'Implement reusable code and component libraries for future use.',
    ],
  },
];
