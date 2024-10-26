import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface WalletCardProps {
  balance: string;
  currency: string;
  change: string;
  isPositive: boolean;
}

const WalletCard: React.FC<WalletCardProps> = ({ balance, currency, change, isPositive }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gradient-to-br from-primary to-primary-light p-6 rounded-3xl shadow-elegant w-full"
    >
      <div className="flex justify-between items-start mb-8">
        <div className="p-3 bg-white/10 rounded-2xl">
          <Wallet className="w-8 h-8 text-white" />
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="bg-white/20 px-4 py-2 rounded-xl text-white text-sm font-medium"
        >
          Send
        </motion.button>
      </div>
      
      <div className="space-y-2">
        <p className="text-white/70 text-sm">Total Balance</p>
        <h2 className="text-4xl font-bold text-white">{balance}</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-white/90">{currency}</span>
          <div className={`flex items-center ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
            {isPositive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
            <span className="text-sm">{change}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WalletCard;