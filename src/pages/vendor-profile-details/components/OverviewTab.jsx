import React from 'react';
import Icon from '../../../components/AppIcon';

const OverviewTab = ({ vendor }) => {
  const summaryCards = [
    {
      title: 'Total Orders',
      value: '247',
      change: '+12%',
      changeType: 'positive',
      icon: 'ShoppingCart'
    },
    {
      title: 'Total Value',
      value: '₹45,67,890',
      change: '+8.5%',
      changeType: 'positive',
      icon: 'IndianRupee'
    },
    {
      title: 'Avg. Rating',
      value: '4.8/5',
      change: '+0.2',
      changeType: 'positive',
      icon: 'Star'
    },
    {
      title: 'Response Time',
      value: '2.4 hrs',
      change: '-15%',
      changeType: 'positive',
      icon: 'Clock'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'order',
      title: 'New Purchase Order #PO-2024-1247',
      description: 'Order for electronic components worth ₹2,45,000',
      timestamp: '2 hours ago',
      icon: 'ShoppingCart',
      status: 'pending'
    },
    {
      id: 2,
      type: 'payment',
      title: 'Payment Processed',
      description: 'Invoice #INV-2024-0892 payment of ₹1,85,000 completed',
      timestamp: '1 day ago',
      icon: 'CreditCard',
      status: 'completed'
    },
    {
      id: 3,
      type: 'document',
      title: 'Document Updated',
      description: 'GST certificate renewed and uploaded',
      timestamp: '3 days ago',
      icon: 'FileText',
      status: 'completed'
    },
    {
      id: 4,
      type: 'compliance',
      title: 'Compliance Review',
      description: 'Annual compliance audit completed successfully',
      timestamp: '1 week ago',
      icon: 'Shield',
      status: 'completed'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-success';
      case 'pending':
        return 'text-warning';
      case 'failed':
        return 'text-error';
      default:
        return 'text-text-secondary';
    }
  };

  const getChangeColor = (changeType) => {
    return changeType === 'positive' ? 'text-success' : 'text-error';
  };

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((card, index) => (
          <div key={index} className="bg-surface border border-border rounded-lg p-6 shadow-subtle">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center`}>
                <Icon name={card.icon} size={24} className="text-primary" />
              </div>
              <span className={`text-sm font-medium ${getChangeColor(card.changeType)}`}>
                {card.change}
              </span>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-1">{card.value}</h3>
              <p className="text-sm text-text-secondary">{card.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Company Information */}
        <div className="bg-surface border border-border rounded-lg p-6 shadow-subtle">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
            <Icon name="Building2" size={20} className="mr-2" />
            Company Information
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-text-secondary">Business Type:</span>
              <span className="font-medium text-foreground">{vendor.businessType}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">Industry:</span>
              <span className="font-medium text-foreground">{vendor.industry}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">Employee Count:</span>
              <span className="font-medium text-foreground">{vendor.employeeCount}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">Annual Revenue:</span>
              <span className="font-medium text-foreground">{vendor.annualRevenue}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">MSME Status:</span>
              <span className="font-medium text-foreground">{vendor.msmeStatus}</span>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-surface border border-border rounded-lg p-6 shadow-subtle">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
            <Icon name="User" size={20} className="mr-2" />
            Primary Contact
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-text-secondary">Contact Person:</span>
              <span className="font-medium text-foreground">{vendor.contactPerson}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">Designation:</span>
              <span className="font-medium text-foreground">{vendor.designation}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">Email:</span>
              <span className="font-medium text-foreground">{vendor.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">Phone:</span>
              <span className="font-medium text-foreground">{vendor.phone}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">Alternative Phone:</span>
              <span className="font-medium text-foreground">{vendor.alternativePhone}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-surface border border-border rounded-lg p-6 shadow-subtle">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
          <Icon name="Activity" size={20} className="mr-2" />
          Recent Activity
        </h3>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-4 p-4 bg-muted rounded-lg">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getStatusColor(activity.status)} bg-current/10`}>
                <Icon name={activity.icon} size={18} className={getStatusColor(activity.status)} />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-foreground">{activity.title}</h4>
                <p className="text-sm text-text-secondary mt-1">{activity.description}</p>
                <span className="text-xs text-text-secondary">{activity.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;