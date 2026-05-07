export type NavItem = {
  label: string;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Agency', href: '/' },
  { label: 'Strategist', href: '/about' },
  { label: 'Intelligence', href: '/services' },
  { label: 'Case Studies', href: '/portfolio' },
  { label: 'Insights', href: '/blog' },
  { label: 'Connect', href: '/contact' },
];

export const SERVICES = [
  {
    id: 'shopify-development',
    title: 'Shopify Development USA',
    description: 'Elite ecommerce architectures built for scale, speed, and conversion. We deploy advanced Liquid solutions and headless Shopify frameworks.',
    href: '/services/shopify-development',
  },
  {
    id: 'seo-services',
    title: 'Semantic SEO & Strategy',
    description: 'Dominating search intent through entity-based mapping, topical authority clusters, and technical NLP optimization.',
    href: '/services/seo-services',
  },
  {
    id: 'web-development',
    title: 'Custom Web Development',
    description: 'High-performance React and Next.js applications engineered for global scalability and flawless user experiences.',
    href: '/services/web-development',
  },
  {
    id: 'wordpress-development',
    title: 'Enterprise WordPress',
    description: 'Secure, architecturally sound WordPress builds that prioritize core web vitals and long-term search dominance.',
    href: '/services/wordpress-development',
  },
];
