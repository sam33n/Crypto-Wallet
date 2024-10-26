import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Filter } from 'lucide-react';
import TransactionList from '../components/TransactionList';

const transactions = [
  {
    id: '1',
    type: 'receive',
    amount: '0.45',
    currency: 'BTC',
    address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    timestamp: '2024-03-10 14:30'
  },
  {
    id: '2',
    type: 'send',
    amount: '1.23',
    currency: 'ETH',
    address: '0x892d35Cc6634C0532925a3b844Bc454e4438f66f',
    timestamp: '2024-03-09 09:15'
  }
];

const ActivityView = () => {
  const [dateRange, setDateRange] = useState('all');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">Activity</h1>
        <div className="flex space-x-2">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="p-2 bg-white rounded-xl shadow-soft"
          >
            <Calendar className="w-5 h-5 text-primary" />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="p-2 bg-white rounded-xl shadow-soft"
          >
            <Filter className="w-5 h-5 text-primary" />
          </motion.button>
        </div>
      </div>

      <div className="flex space-x-2 overflow-x-auto py-2">
        {['All Time', 'This Month', 'This Week', 'Today'].map((range) => (
          <button
            key={range}
            className={`px-4 py-2 rounded-xl text-sm whitespace-nowrap ${
              dateRange === range.toLowerCase()
                ? 'bg-primary text-white'
                : 'bg-white text-primary shadow-soft'
            }`}
            onClick={() => setDateRange(range.toLowerCase())}
          >
            {range}
          </button>
        ))}
      </div>

      <TransactionList transactions={transactions} />
    </motion.div>
  );
};

export default ActivityView;