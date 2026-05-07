import { motion } from 'motion/react';
import { useLocation, Link } from 'react-router-dom';

const PageNavigation = () => {
  const { pathname } = useLocation();
  const paths = pathname.split('/').filter(x => x);

  if (pathname === '/') return null;

  return (
    <nav className="max-w-7xl mx-auto px-6 py-4 absolute top-24 left-0 right-0 z-20 overflow-x-auto no-scrollbar">
      <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-[#94a3b8] whitespace-nowrap">
        <Link to="/" className="hover:text-accent transition-colors">ROOT</Link>
        {paths.map((p, i) => (
          <span key={i} className="flex items-center gap-2">
            <span className="text-white/20">/</span>
            <Link 
              to={`/${paths.slice(0, i + 1).join('/')}`}
              className={i === paths.length - 1 ? 'text-accent' : 'hover:text-white transition-colors'}
            >
              {p.replace('-', ' ')}
            </Link>
          </span>
        ))}
      </div>
    </nav>
  );
};

export default PageNavigation;
