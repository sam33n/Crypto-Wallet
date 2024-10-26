import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Globe, Lock, HelpCircle, ChevronRight } from 'lucide-react';

const SettingsView = () => {
  const settings = [
    { icon: Moon, label: 'Dark Mode', sublabel: 'System default' },
    { icon: Globe, label: 'Language', sublabel: 'English' },
    { icon: Lock, label: 'Privacy', sublabel: 'Manage settings' },
    { icon: HelpCircle, label: 'Help & Support', sublabel: 'FAQ and contact' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <h1 className="text-2xl font-bold text-primary">Settings</h1>

      <div className="space-y-3">
        {settings.map((setting, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-white p-4 rounded-2xl shadow-soft flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-soft-gray rounded-xl">
                <setting.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-medium text-primary">{setting.label}</p>
                <p className="text-sm text-primary/60">{setting.sublabel}</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-primary/40" />
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default SettingsView;