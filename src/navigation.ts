import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: '/' },
    { text: 'Rooms', href: getPermalink('/rooms') },
    { text: 'Book', href: getPermalink('/book') },
    { text: 'Rules & FAQs', href: getPermalink('/rules-faqs') },
    { text: 'Availability', href: getPermalink('/availability') },
    { text: 'Contact', href: getPermalink('/contact') },
  ],
  actions: [{ text: 'BOOK NOW!', href: '/book' }],
};

export const footerData = {
  links: [
    {
      title: 'Quick Links',
      links: [
        { text: 'Home', href: '/' },
        { text: 'Rooms', href: '/rooms' },
        { text: 'Book', href: '/book' },
        { text: 'Rules & FAQs', href: '/rules-faqs' },
        { text: 'Availability', href: '/availability' },
        { text: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { text: 'info@thegr8escape.co.za', href: 'mailto:info@thegr8escape.co.za' },
        { text: '076 362 0765', href: 'tel:0763620765' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://facebook.com/thegr8escape' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/thegr8escape' },
    { ariaLabel: 'TikTok', icon: 'tabler:brand-tiktok', href: '#' },
  ],
  footNote: `© 2026 The Gr8 Escape. All rights reserved.`,
};
