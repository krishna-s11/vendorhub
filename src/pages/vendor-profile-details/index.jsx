import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Sidebar from '../../components/ui/Sidebar';
import Breadcrumb from '../../components/ui/Breadcrumb';
import VendorHeader from './components/VendorHeader';
import TabNavigation from './components/TabNavigation';
import OverviewTab from './components/OverviewTab';
import CompanyDetailsTab from './components/CompanyDetailsTab';
import BankInformationTab from './components/BankInformationTab';
import DocumentsTab from './components/DocumentsTab';
import ComplianceTab from './components/ComplianceTab';
import AgreementsTab from './components/AgreementsTab';
import ActivityHistoryTab from './components/ActivityHistoryTab';

const VendorProfileDetails = () => {
  const { vendorId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);

  // Mock user role - in real app this would come from auth context
  const userRole = 'Admin'; // Admin, Approver, Viewer

  // Mock vendor data - in real app this would be fetched from API
  const vendor = {
    id: vendorId || 'VEN-2024-001',
    vendorCode: 'VEN-2024-001',
    companyName: 'TechnoSoft Solutions Pvt Ltd',
    legalName: 'TechnoSoft Solutions Private Limited',
    status: 'Active',
    email: 'contact@technosoft.com',
    phone: '+91 98765 43210',
    alternativePhone: '+91 98765 43211',
    city: 'Mumbai',
    state: 'Maharashtra',
    country: 'India',
    postalCode: '400001',
    registrationDate: '15/03/2024',
    category: 'IT Services',
    businessType: 'Private Limited Company',
    industry: 'Information Technology',
    subIndustry: 'Software Development',
    yearEstablished: '2018',
    panNumber: 'ABCTY1234D',
    gstNumber: '27ABCTY1234D1Z5',
    cinNumber: 'U72200MH2018PTC123456',
    msmeNumber: 'UDYAM-MH-27-0012345',
    natureOfAssessee: 'Company',
    registeredAddress: `TechnoSoft Solutions Pvt Ltd\nPlot No. 123, Sector 15\nVashi, Navi Mumbai\nMaharashtra - 400703\nIndia`,
    supplyAddress: `Same as Registered Address`,
    employeeCount: '50-100',
    annualRevenue: '₹5-10 Crores',
    businessVertical: 'Amber Enterprises India Limited',
    supplierCategory: 'Service Provider',
    supplierType: 'Domestic',
    currencyCode: 'INR',
    msmeStatus: 'MSME Registered',
    contactPerson: 'Rajesh Kumar',
    designation: 'General Manager',
    website: 'https://www.technosoft.com',
    linkedin: 'https://linkedin.com/company/technosoft',
    creditRating: 'A+',
    paymentTerms: '30 Days',
    deliveryTerms: 'FOB Mumbai',
    qualityRating: '4.8'
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'LayoutDashboard' },
    { id: 'company', label: 'Company Details', icon: 'Building2' },
    { id: 'bank', label: 'Bank Information', icon: 'CreditCard' },
    { id: 'documents', label: 'Documents', icon: 'FileText', badge: 15 },
    { id: 'compliance', label: 'Compliance', icon: 'Shield', badge: 2 },
    { id: 'agreements', label: 'Agreements', icon: 'FileSignature', badge: 1 },
    { id: 'activity', label: 'Activity History', icon: 'Activity' }
  ];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleEdit = () => {
    // Handle edit profile
    console.log('Edit profile clicked');
  };

  const handleStatusChange = () => {
    // Handle status change
    console.log('Status change clicked');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab vendor={vendor} />;
      case 'company':
        return <CompanyDetailsTab vendor={vendor} userRole={userRole} />;
      case 'bank':
        return <BankInformationTab vendor={vendor} />;
      case 'documents':
        return <DocumentsTab vendor={vendor} userRole={userRole} />;
      case 'compliance':
        return <ComplianceTab vendor={vendor} />;
      case 'agreements':
        return <AgreementsTab vendor={vendor} />;
      case 'activity':
        return <ActivityHistoryTab vendor={vendor} />;
      default:
        return <OverviewTab vendor={vendor} />;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 lg:ml-60">
            <div className="p-6">
              <div className="flex items-center justify-center h-96">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                  <p className="text-text-secondary">Loading vendor profile...</p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 lg:ml-60">
          <div className="p-6">
            <Breadcrumb customItems={[
              { label: 'Home', path: '/dashboard-overview', icon: 'Home' },
              { label: 'Vendors', path: '/vendor-master-list', icon: 'Building2' },
              { label: vendor.companyName, path: `/vendor-profile-details/${vendor.id}`, icon: 'User' }
            ]} />

            <VendorHeader 
              vendor={vendor}
              onEdit={handleEdit}
              onStatusChange={handleStatusChange}
              userRole={userRole}
            />

            <TabNavigation 
              activeTab={activeTab}
              onTabChange={setActiveTab}
              tabs={tabs}
            />

            <div className="min-h-96">
              {renderTabContent()}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default VendorProfileDetails;