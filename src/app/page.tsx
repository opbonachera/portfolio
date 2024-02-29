'use client';
import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import { About } from './components/About';
import { Home } from './components/Home';
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, height: '75vh', width: '72vw' }} id="border">
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`, 'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Main() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabItems = ["HOME", "ABOUT ME", "EXPERIENCE", "STACK", "PROJECTS", "CONTACT"];

  // TODO: Build two different layouts. If its a phone, display one layout and if its a computer, display the other.
  
  const MobileLayout = () =>{
    return (
      <>
          <article className='d-flex align-items-center justify-content-end col-12 lato'>
          <Box className="nav-box" style={{'width':'20rem'}}>
            <Tabs sx={{ "& button": { color: '#7D7B79', 'font-weight':'bold', 'font-size':'1.5rem' },
                        "& button.Mui-selected": {color: '#231F20', 'font-weight':'bold', 'font-size':'1.5rem'}}}
                  value={value}
                  onChange={handleChange}
                  aria-label="scrollable auto tabs example"
                  orientation="horizontal"
                  variant="scrollable"
                  scrollButtons="auto"
                  TabIndicatorProps={{ sx:{ backgroundColor: '#231F20'} }}> 

              {tabItems.map((item, index)=>{ return <Tab label={item} {...a11yProps(index + 1)} /> })}
            </Tabs>
          </Box>
          
          
          </article>
      </>
    )
  }
  
  return (
    <>
      <main style={{ width:'100%', height: '100vh'}}>
        <section className='row w-100 h-100'>
          <MobileLayout />
          
          <article className='col-12 d-flex align-items-center justify-content-center h-100 article'>
              <CustomTabPanel value={value} index={0}>
                <Box className="h-100">
                    <Home />
                </Box>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <Box className="h-100">
                    <About />
                </Box>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                Item Three
              </CustomTabPanel>

          </article>
        </section>
      </main>
    </> 
  )
}
