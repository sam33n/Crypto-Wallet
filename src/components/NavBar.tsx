import React from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { Wallet, Activity, Settings, User } from 'lucide-react';

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: '/wallet', icon: Wallet, label: 'Wallet' },
    { path: '/activity', icon: Activity, label: 'Activity' },
    { path: '/settings', icon: Settings, label: 'Settings' },
    { path: '/profile', icon: User, label: 'Profile' }
  ];

  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 bg-white px-6 py-4 rounded-t-3xl shadow-elegant"
    >
      <div className="flex justify-around items-center">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <motion.button
              key={item.path}
              whileTap={{ scale: 0.9 }}
              className="flex flex-col items-center space-y-1"
              onClick={() => navigate(item.path)}
            >
              <item.icon 
                className={`w-6 h-6 ${
                  isActive ? 'text-primary' : 'text-primary/40'
                }`} 
              />
              <span 
                className={`text-xs ${
                  isActive ? 'text-primary font-medium' : 'text-primary/40'
                }`}
              >
                {item.label}
              </span>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
};

export default NavBar;