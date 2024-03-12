'use client';
import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';

import * as React from 'react';
import { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useMediaQuery } from 'react-responsive';

import { About } from './components/About';
import { Home } from './components/Home';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

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
        <Box className="m-auto" sx={{ p: 3, height: '75vh', 'min-width':'400px',width: '70vw' }} id="border">
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
  const handleChange = (event: React.SyntheticEvent, newValue: number) => { setValue(newValue) };
  const tabItems = ["HOME", "ABOUT ME", "EXPERIENCE", "EDUCATION", "PROJECTS", "CONTACT"];
  const [isMobile, setIsMobile] = useState(false);
  const mobile = useMediaQuery({ query: `(max-width: 760px)` });

  const handleResize = () => {
    if (window.innerWidth < 720) {
        setIsMobile(true)
    } else {
        setIsMobile(false)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })

  // finally you can render components conditionally if isMobile is True or False 
  // TODO: Build two different layouts. If its a phone, display one layout and if its a computer, display the other.
  
  const MobileLayout = () =>{
    return (
      <>
          <article className='d-flex align-items-center justify-content-center col-12 lato'>
          <Box style={{'width':'100%', height:''}}>
            <Tabs sx={{ "& button": { color: '#7D7B79', 'font-weight':'bold', 'font-size':'1.5rem' },
                        "& button.Mui-selected": {color: '#231F20', 'font-weight':'bold', 'font-size':'1.5rem'}}}
                  value={value}
                  className='h-100 w-100 d-flex align-items-center justify-content-center'
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
  
  const DesktopNav = () =>{
    return(
      <> 
          <article className='col-3 d-flex align-items-center justify-content-end'>
           <Box>
             <Tabs sx={{ "& button": { color: '#7D7B79', 'font-weight':'bold', 'font-size':'1.5rem' },
                         "& button.Mui-selected": { color: '#231F20', 'font-weight':'bold', 'font-size':'1.5rem'}}}
                   value={value}
                   onChange={handleChange}
                   aria-label="scrollable auto tabs example"
                   orientation="vertical"
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
      <main className="container-fluid" style={{ width:'100%', height: '100vh'}}>
        <section className='row h-100'>
            { mobile ? <MobileLayout /> : <DesktopNav />}
          <article className='col-9 d-flex align-items-center m-auto justify-content-center h-100 article'>
              <CustomTabPanel value={value} index={0}>
                <Box className="h-100 m-auto">
                    <Home />
                </Box>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <Box className="h-100">
                    <About />
                </Box>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                <Box className="h-100">
                    <Experience />
                </Box>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={3}>
                <Box className="h-100">
                    <Experience />
                </Box>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={4}>
                <Box className="h-100">
                    <Projects />
                </Box>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={5}>
                <Box className="h-100">
                    <Contact />
                </Box>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={6}>
                <Box className="h-100">
                    <Experience />
                </Box>
              </CustomTabPanel>

          </article>
        </section>
      </main>
    </> 
  )
}
