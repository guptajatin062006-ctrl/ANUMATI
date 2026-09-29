import React, { useState } from 'react';
import PdfUploadComponent from './PdfUploadComponent';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('upload');

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f6f8' }}>
      {/* Sidebar */}
      <div style={{ width: '240px', backgroundColor: '#1e293b', color: '#fff', padding: '20px' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '30px', color: '#38bdf8' }}>ANUMATI Portal</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li 
            onClick={() => setActiveTab('upload')} 
            style={{ padding: '12px', cursor: 'pointer', borderRadius: '6px', backgroundColor: activeTab === 'upload' ? '#334155' : 'transparent', marginBottom: '8px' }}
          >
            📄 Upload & Verify
          </li>
          <li 
            onClick={() => setActiveTab('reports')} 
            style={{ padding: '12px', cursor: 'pointer', borderRadius: '6px', backgroundColor: activeTab === 'reports' ? '#334155' : 'transparent', marginBottom: '8px' }}
          >
            📊 AICTE Reports
          </li>
          <li 
            onClick={() => setActiveTab('status')} 
            style={{ padding: '12px', cursor: 'pointer', borderRadius: '6px', backgroundColor: activeTab === 'status' ? '#334155' : 'transparent' }}
          >
            ✅ Verification Status
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '30px' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', backgroundColor: '#fff', padding: '15px 20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
          <h1 style={{ fontSize: '22px', margin: 0, color: '#0f172a' }}>College Dashboard</h1>
          <span style={{ fontSize: '14px', color: '#64748b' }}>Welcome, Jatin (Admin)</span>
        </div>

        {/* Content Tabs */}
        {activeTab === 'upload' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '30px' }}>
              <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #3b82f6' }}>
                <p style={{ margin: 0, color: '#64748b', fontSize: '14px' }}>Total Submissions</p>
                <h3 style={{ margin: '5px 0 0', fontSize: '24px' }}>12</h3>
              </div>
              <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #22c55e' }}>
                <p style={{ margin: 0, color: '#64748b', fontSize: '14px' }}>AICTE Approved</p>
                <h3 style={{ margin: '5px 0 0', fontSize: '24px' }}>10</h3>
              </div>
              <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #ef4444' }}>
                <p style={{ margin: 0, color: '#64748b', fontSize: '14px' }}>Flagged Issues</p>
                <h3 style={{ margin: '5px 0 0', fontSize: '24px' }}>2</h3>
              </div>
            </div>

            {/* Embedded PDF Upload Component */}
            <PdfUploadComponent />
          </div>
        )}

        {activeTab === 'reports' && (
          <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px' }}>
            <h2>AICTE Process Reports</h2>
            <p style={{ color: '#64748b' }}>No recent AI verification logs found.</p>
          </div>
        )}

        {activeTab === 'status' && (
          <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px' }}>
            <h2>Verification Status Overview</h2>
            <p style={{ color: '#64748b' }}>All AI/ML rules active.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;