import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import './TabView.css'; // Optional for additional custom styling

function TabView() {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState(0);

  // Array of tab titles and content with custom background color for each
  const tabs = [
    { title: 'Home', content: 'Content for Tab 1', backgroundColor: '#007bff' },
    { title: 'Resume', content: 'Content for Tab 2', backgroundColor: '#007bff' },
    { title: 'Projects', content: 'Content for Tab 3', backgroundColor: '#007bff' },
  ];

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 800, margin: 'auto', padding: 2 }}>
      <Tabs
        value={activeTab}
        onChange={handleChange}
        indicatorColor="none" // Remove the default underline
        textColor="inherit"
        variant="scrollable"
        aria-label="scrollable tabs"
        sx={{ borderBottom: 2, borderColor: 'divider' }}
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.title}
            sx={{
              backgroundColor: activeTab === index ? tab.backgroundColor : '#f0f0f0',
              color: activeTab === index ? '#fff' : '#333',
              fontWeight: activeTab === index ? 'bold' : 'normal',
              borderRadius: '8px 8px 0 0',
              transition: 'background-color 0.3s ease',
              '&:hover': {
                backgroundColor: activeTab === index ? tab.backgroundColor : '#e0e0e0',
              },
            }}
          />
        ))}
      </Tabs>

      <Box
        sx={{
          padding: 2,
          backgroundColor: tabs[activeTab].backgroundColor,
          borderRadius: '0 0 8px 8px',
          color: '#fff',
          minHeight: '200px',
        }}
      >
        {tabs[activeTab].content}
      </Box>
    </Box>
  );
}

export default TabView;
