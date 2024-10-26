import React from 'react';
import { motion } from 'framer-motion';
import { User, Shield, Bell, ChevronRight } from 'lucide-react';

const ProfileView = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <div className="flex items-center space-x-4">
        <div className="p-4 bg-white rounded-full shadow-elegant">
          <User className="w-8 h-8 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-primary">John Doe</h1>
          <p className="text-primary/60">john.doe@example.com</p>
        </div>
      </div>

      <div className="space-y-4">
        {[
          { icon: Shield, label: 'Security', sublabel: '2FA Enabled' },
          { icon: Bell, label: 'Notifications', sublabel: 'All enabled' }
        ].map((item, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-white p-4 rounded-2xl shadow-soft flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-soft-gray rounded-xl">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-medium text-primary">{item.label}</p>
                <p className="text-sm text-primary/60">{item.sublabel}</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-primary/40" />
          </motion.button>
        ))}
      </div>

      <div className="pt-4">
        <button className="w-full py-3 text-red-500 font-medium bg-white rounded-xl shadow-soft">
          Sign Out
        </button>
      </div>
    </motion.div>
  );
};

export default ProfileView;