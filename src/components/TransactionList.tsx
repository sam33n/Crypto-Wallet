import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface Transaction {
  id: string;
  type: 'send' | 'receive';
  amount: string;
  currency: string;
  address: string;
  timestamp: string;
}

const TransactionList: React.FC<{ transactions: Transaction[] }> = ({ transactions }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-primary">Recent Transactions</h3>
      <div className="space-y-3">
        {transactions.map((tx) => (
          <motion.div
            key={tx.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-4 rounded-xl shadow-soft flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <div className={`p-2 rounded-full ${
                tx.type === 'send' ? 'bg-red-100' : 'bg-green-100'
              }`}>
                {tx.type === 'send' ? (
                  <ArrowUpRight className="w-5 h-5 text-red-500" />
                ) : (
                  <ArrowDownRight className="w-5 h-5 text-green-500" />
                )}
              </div>
              <div>
                <p className="font-medium text-primary">
                  {tx.type === 'send' ? 'Sent' : 'Received'} {tx.amount} {tx.currency}
                </p>
                <p className="text-sm text-primary/60">
                  {tx.address.slice(0, 6)}...{tx.address.slice(-4)}
                </p>
              </div>
            </div>
            <span className="text-sm text-primary/60">{tx.timestamp}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TransactionList;