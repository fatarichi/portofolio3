export type Statistic = {
  data: string;
  info: string;
  imageSrc: string;
};

export const statsData: Statistic[] = [
  { data: '2+', info: 'Years Experience', imageSrc: '/images/person-1.png' },
  {
    data: '99%',
    info: 'Client Satisfaction',
    imageSrc: '/images/person-2.png',
  },
  {
    data: '12+',
    info: 'Project Delivered',
    imageSrc: '/images/project-preview.png',
  },
];
