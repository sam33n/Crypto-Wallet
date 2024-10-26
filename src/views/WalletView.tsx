import React from 'react';
import { motion } from 'framer-motion';
import { Bitcoin, Coins } from 'lucide-react';
import CryptoCard from '../components/CryptoCard';
import WalletCard from '../components/WalletCard';

const cryptoData = [
  { id: 1, name: 'Bitcoin', symbol: 'BTC', balance: '0.45', value: '18,245.00', change: '+2.34%', icon: Bitcoin },
  { id: 2, name: 'Ethereum', symbol: 'ETH', balance: '3.12', value: '5,890.00', change: '+1.23%', icon: Coins }
];

const WalletView = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <h1 className="text-2xl font-bold text-primary">My Portfolio</h1>

      <WalletCard
        balance="$24,135.00"
        currency="USD"
        change="+1.8%"
        isPositive={true}
      />

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-primary">Your Assets</h2>
          <button className="text-sm text-primary/60">See all</button>
        </div>
        
        <div className="space-y-3">
          {cryptoData.map((crypto) => (
            <CryptoCard key={crypto.id} {...crypto} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default WalletView;