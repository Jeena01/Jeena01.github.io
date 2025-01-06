import React, { useEffect, useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import Home from './Home';
import Resume from './Resume';
function NavBar() {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState(0);
  const [scrolled, setScrolled]=useState(false);
  // Array of tab titles and content with custom background color for each
  const tabs = [
    { title:'Home', content: <Home/>, backgroundColor: '#007bff' },
    { title: 'Experience', content: <Resume/>, backgroundColor: '#007bff' },
    { title: 'Projects', content: 'Content for Tab 3', backgroundColor: '#007bff' },
  ];

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  useEffect(()=>{
    const onScroll = ()=>{
      if (window.scrollY>50){
        setScrolled(true);

      }
      else{
        setScrolled(false);
      }
    }
    window.addEventListener("scroll",onScroll);
    return()=>window.removeEventListener("scroll",onScroll);
  },[])

  return (
    <Box className="TabContainer" >
      <Tabs
        value={activeTab}
        onChange={handleChange}
        centered // Center the tabs
        indicatorColor="none" // Remove the default underline
        textColor="#5B7E84"
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.title}
            sx={{
              backgroundColor: activeTab === index ? tab.backgroundColor : 'white',
              color: activeTab === index ? '#fff' : '#333',
              fontWeight: activeTab === index ? 'bold' : 'normal',
              borderRadius: '1% 1% 1% 1%',
              margin: '0.5%'
              
            }}
          />
        ))}
      </Tabs>

      <Box
        sx={{
          padding: 2,
          backgroundColor: 'white',
          borderRadius: '2% 2% 2% ',
          color: 'black',
          height: '80vh',
          overflow: 'auto'
        }}
      >
        {tabs[activeTab].content}
      </Box>
    </Box>
  );
}

export default NavBar;
