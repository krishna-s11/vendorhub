import React from 'react';
import Icon from '../../../components/AppIcon';

const WorkflowStats = ({ stats }) => {
  const statCards = [
    {
      title: 'Pending Level 1',
      value: stats.pendingLevel1,
      icon: 'Clock',
      color: 'text-warning bg-warning/10 border-warning/20',
      change: '+12%',
      changeType: 'increase'
    },
    {
      title: 'Pending Level 2',
      value: stats.pendingLevel2,
      icon: 'AlertCircle',
      color: 'text-accent bg-accent/10 border-accent/20',
      change: '+8%',
      changeType: 'increase'
    },
    {
      title: 'Approved Today',
      value: stats.approvedToday,
      icon: 'CheckCircle',
      color: 'text-success bg-success/10 border-success/20',
      change: '+15%',
      changeType: 'increase'
    },
    {
      title: 'Rejected This Week',
      value: stats.rejectedWeek,
      icon: 'XCircle',
      color: 'text-error bg-error/10 border-error/20',
      change: '-5%',
      changeType: 'decrease'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {statCards.map((stat, index) => (
        <div key={index} className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.color}`}>
              <Icon name={stat.icon} size={24} />
            </div>
            <div className={`flex items-center space-x-1 text-sm ${
              stat.changeType === 'increase' ? 'text-success' : 'text-error'
            }`}>
              <Icon 
                name={stat.changeType === 'increase' ? 'TrendingUp' : 'TrendingDown'} 
                size={14} 
              />
              <span>{stat.change}</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-card-foreground mb-1">{stat.value}</h3>
            <p className="text-sm text-text-secondary">{stat.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkflowStats;