import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { v4 as uuidv4 } from 'uuid';

import weather from '@/public/images/weather/weather1.jpg';
import mosque from '@/public/images/mosque/mosque1.jpg';
import exchange from '@/public/images/exchange/exchange1.jpg';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  // {
  //   name: 'Projects',
  //   hash: '#projects',
  // },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    title: 'Weather Forecasting',
    description:
      'A web application that offers comprehensive weather forecasts customized to user location. Users can access hourly and daily updates on temperature, min/max temperature, humidity, wind speed, and weather conditions.',
    tags: ['React', 'Redux Toolkit', 'Material-UI'],
    icons: ['logos:react', 'logos:material-ui'],
    imageUrl: weather,
    githubLink: 'https://github.com/Islam-Khairy/Weather-Forecasting-App',
    urlLink: 'https://islam-khairy.github.io/Weather-Forecasting-App/',
  },
  {
    title: 'Prayer Times',
    description:
      'A web application that provides accurate prayer timings across a variety of Arabic and Islamic countries as it is designed to provide users with the precise schedule for daily prayers.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    icons: ['vscode-icons:file-type-html', 'vscode-icons:file-type-css', 'logos:javascript'],
    imageUrl: mosque,
    githubLink: 'https://github.com/Islam-Khairy/prayer-times',
    urlLink: 'https://islam-khairy.github.io/prayer-times/',
  },
  {
    title: 'Currency Exchange',
    description:
      'A user-friendly web application for accurate currency exchange rate calculations, Support for a diverse range of currencies, Users can access accurate exchange rates updated on a daily basis.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    icons: ['vscode-icons:file-type-html', 'vscode-icons:file-type-css', 'logos:javascript'],
    imageUrl: exchange,
    githubLink: 'https://github.com/Islam-Khairy/Exchange-Rates',
    urlLink: 'https://islam-khairy.github.io/Exchange-Rates/',
  },
] as const;

export const experiencesData = [
  {
    title: 'Front-End Web Developer',
    location: 'Freelance',
    description:
      'Developed responsive and interactive web interfaces for diverse projects using React and Next.js. Focused on delivering high-quality, user-friendly designs while ensuring performance optimization and meeting project deadlines.',
    icon: React.createElement(CgWorkAlt),
    date: 'April - August 2024',
  },
  {
    title: 'Front-End Web Developer',
    location: 'Dr.Code for Ultimate Software Solutions',
    description:
      'Worked on multiple projects, including e-commerce, medical, and educational platforms, building responsive and performance-optimized interfaces using modern technologies such as React, Next.js, and Tailwind CSS. Collaborated with backend teams to integrate APIs, and ensured a seamless user experience across various devices and platforms.',
    icon: React.createElement(CgWorkAlt),
    date: 'August 2024 - Present',
  },
] as const;

export const skillsData = [
  {
    id: uuidv4(),
    name: 'HTML',
    icon: 'vscode-icons:file-type-html',
    category: 'Programming & Markup Languages',
  },
  {
    id: uuidv4(),
    name: 'CSS',
    icon: 'simple-icons:css3',
    category: 'Programming & Markup Languages',
  },
  {
    id: uuidv4(),
    name: 'SCSS',
    icon: 'logos:sass',
    category: 'Programming & Markup Languages',
  },
  {
    id: uuidv4(),
    name: 'JavaScript',
    icon: 'logos:javascript',
    category: 'Programming & Markup Languages',
  },
  {
    id: uuidv4(),
    name: 'TypeScript',
    icon: 'logos:typescript-icon',
    category: 'Programming & Markup Languages',
  },
  {
    id: uuidv4(),
    name: 'C++',
    icon: 'logos:c-plusplus',
    category: 'Programming & Markup Languages',
  },

  {
    id: uuidv4(),
    name: 'React',
    icon: 'logos:react',
    category: 'Web Development',
  },
  {
    id: uuidv4(),
    name: 'Next.js',
    icon: 'simple-icons:nextdotjs',
    category: 'Web Development',
  },
  {
    id: uuidv4(),
    name: 'Redux Toolkit',
    icon: 'simple-icons:redux',
    category: 'Web Development',
  },
  {
    id: uuidv4(),
    name: 'Material-UI',
    icon: 'logos:material-ui',
    category: 'Web Development',
  },
  {
    id: uuidv4(),
    name: 'Tailwind CSS',
    icon: 'vscode-icons:file-type-tailwind',
    category: 'Web Development',
  },
  {
    id: uuidv4(),
    name: 'Bootstrap',
    icon: 'simple-icons:bootstrap',
    category: 'Web Development',
  },
  // {
  //   id: uuidv4(),
  //   name: 'CSS Animation',
  //   icon: 'mdi:animation-outline',
  //   // icon: 'ic:baseline-animation',
  //   category: 'Web Development',
  // },
  // {
  //   id: uuidv4(),
  //   name: 'jQuery',
  //   icon: 'mdi:jquery',
  //   category: 'Web Development',
  // },
  {
    id: uuidv4(),
    name: 'WordPress',
    icon: 'fa-brands:wordpress',
    category: 'Web Development',
  },
  {
    id: uuidv4(),
    name: 'Firebase',
    icon: 'vscode-icons:file-type-firebase',
    category: 'Web Development',
  },
  {
    id: uuidv4(),
    name: 'Responsive Design',
    icon: 'mdi:responsive',
    category: 'Web Development',
  },
  {
    id: uuidv4(),
    name: 'RESTful APIs',
    icon: 'ion:cloud-upload-outline',
    category: 'Web Development',
  },
  {
    id: uuidv4(),
    name: 'Axios',
    icon: 'simple-icons:axios',
    category: 'Web Development',
  },
  {
    id: uuidv4(),
    name: 'Git',
    icon: 'logos:git-icon',
    category: 'Version Control & Collaboration',
  },
  {
    id: uuidv4(),
    name: 'GitHub',
    icon: 'cib:github',
    // icon: 'logos:github-icon',
    category: 'Version Control & Collaboration',
  },
  // {
  //   id: uuidv4(),
  //   name: 'Slack',
  //   icon: 'logos:slack-icon',
  //   category: 'Version Control & Collaboration',
  // },
  // {
  //   id: uuidv4(),
  //   name: 'Zoom',
  //   icon: 'cib:zoom',
  //   category: 'Version Control & Collaboration',
  // },
  // {
  //   id: uuidv4(),
  //   name: 'Microsoft Teams',
  //   icon: 'logos:microsoft-teams',
  //   category: 'Version Control & Collaboration',
  // },
  {
    id: uuidv4(),
    name: 'npm',
    icon: 'vscode-icons:file-type-npm',
    category: 'Tools & Technologies',
  },
  {
    id: uuidv4(),
    name: 'Postman',
    icon: 'logos:postman-icon',
    category: 'Tools & Technologies',
  },
  {
    id: uuidv4(),
    name: 'Figma',
    icon: 'logos:figma',
    category: 'Tools & Technologies',
  },
  {
    id: uuidv4(),
    name: 'Lighthouse',
    icon: 'logos:lighthouse',
    category: 'Tools & Technologies',
  },
] as const;
