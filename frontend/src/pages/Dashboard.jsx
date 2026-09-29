import React from 'react';

const Dashboard = () => {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0f172a',
      color: '#ffffff',
      padding: '24px',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #334155',
        paddingBottom: '16px',
        marginBottom: '24px'
      }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '24px', color: '#38bdf8' }}>ANUMATI Portal</h1>
          <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#94a3b8' }}>
            AICTE Approval & Document Inspection Dashboard
          </p>
        </div>
        <button 
          onClick={() => window.location.reload()}
          style={{
            padding: '8px 16px',
            backgroundColor: '#ef4444',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          Logout
        </button>
      </div>

      {/* Main Stats Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '16px',
        marginBottom: '24px'
      }}>
        <div style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '8px' }}>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#94a3b8' }}>Approval Status</h3>
          <p style={{ margin: 0, fontSize: '20px', fontWeight: 'bold', color: '#22c55e' }}>Pending AI Review</p>
        </div>
        <div style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '8px' }}>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#94a3b8' }}>Documents Uploaded</h3>
          <p style={{ margin: 0, fontSize: '20px', fontWeight: 'bold', color: '#38bdf8' }}>12 / 15</p>
        </div>
        <div style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '8px' }}>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#94a3b8' }}>Infrastructure Score</h3>
          <p style={{ margin: 0, fontSize: '20px', fontWeight: 'bold', color: '#eab308' }}>88% Match</p>
        </div>
      </div>

      {/* Content Section */}
      <div style={{ backgroundColor: '#1e293b', padding: '24px', borderRadius: '8px' }}>
        <h2 style={{ fontSize: '18px', marginTop: 0, color: '#f8fafc' }}>System Inspection Overview</h2>
        <p style={{ color: '#cbd5e1', fontSize: '14px' }}>
          Welcome to ANUMATI! Your college application data is being processed by our AI validation tools for campus layout, classroom compliance, and land requirement verification.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;