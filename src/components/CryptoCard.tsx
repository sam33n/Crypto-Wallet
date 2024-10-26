import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface CryptoCardProps {
  name: string;
  symbol: string;
  balance: string;
  value: string;
  change: string;
  icon: LucideIcon;
}

const CryptoCard: React.FC<CryptoCardProps> = ({
  name,
  symbol,
  balance,
  value,
  change,
  icon: Icon
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white p-4 rounded-xl shadow-soft flex items-center justify-between"
    >
      <div className="flex items-center space-x-4">
        <div className="p-2 bg-soft-gray rounded-xl">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="font-medium text-primary">{name}</h3>
          <p className="text-sm text-primary/60">{balance} {symbol}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-medium text-primary">${value}</p>
        <p className="text-sm text-green-500">{change}</p>
      </div>
    </motion.div>
  );
};

export default CryptoCard;