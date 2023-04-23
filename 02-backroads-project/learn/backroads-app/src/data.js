import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
];

export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', socialIcon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', socialIcon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.twitter.com', socialIcon: 'fab fa-squarespace' },
];

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: ' lorem ipsum dolor sit amet consectetur adipisicing elit. asperiores, officia.'
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: ' lorem ipsum dolor sit amet consectetur adipisicing elit. asperiores, officia.'
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: ' lorem ipsum dolor sit amet consectetur adipisicing elit. asperiores, officia.'
  },
];

export const tours = [
  {
    id: 1,
    title: 'tibet adventure',
    date: 'august 26th, 2020',
    img: tour1,
    summary: ' lorem ipsum dolor sit amet, consectetur adipisicing elit. cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis. ',
    icon: 'fas fa-map',
    destination: 'china',
    duration: 6,
    price: 2100,
  },
  {
    id: 2,
    title: 'best of java',
    date: 'september 15th, 2020',
    img: tour2,
    summary: ' lorem ipsum dolor sit amet, consectetur adipisicing elit. cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis. ',
    icon: 'fas fa-map',
    destination: 'indonesia',
    duration: 11,
    price: 1400,
  },
  {
    id: 3,
    title: 'explore hong kong',
    date: 'september 15th, 2020',
    img: tour3,
    summary: ' lorem ipsum dolor sit amet, consectetur adipisicing elit. cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis. ',
    icon: 'fas fa-map',
    destination: 'hong kong',
    duration: 8,
    price: 5000,
  },
  {
    id: 4,
    title: 'kenya highlights',
    date: 'december 5th, 2019',
    img: tour4,
    summary: ' lorem ipsum dolor sit amet, consectetur adipisicing elit. cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis. ',
    icon: 'fas fa-map',
    destination: 'kenya',
    duration: 8,
    price: 3300,
  },
];

export const footerLinks = [...pageLinks.slice(0,3),
    { id: 4, href: '#featured', text: 'featured' },
];
