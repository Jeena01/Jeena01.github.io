import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import Home from './Home';
import Resume from './Resume';
function TabView() {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState(0);

  // Array of tab titles and content with custom background color for each
  const tabs = [
    { title:'Home', content: <Home/>, backgroundColor: '#007bff' },
    { title: 'Resume', content: <Resume/>, backgroundColor: '#007bff' },
    { title: 'Projects', content: 'Content for Tab 3', backgroundColor: '#007bff' },
  ];

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ width: '80%', margin: 'auto', padding: 2 }}>
      <Tabs
        value={activeTab}
        onChange={handleChange}
        centered // Center the tabs
        indicatorColor="none" // Remove the default underline
        textColor="inherit"
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
            }}
          />
        ))}
      </Tabs>

      <Box
        sx={{
          padding: 2,
          backgroundColor: tabs[activeTab].backgroundColor,
          borderRadius: '8px 8px 8px 8px',
          color: '#fff',
        }}
      >
        {tabs[activeTab].content}
      </Box>
    </Box>
  );
}

export default TabView;
