'use client';
import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Link from 'next/link';

import { Education } from './components/Education';
import { About } from './components/About';
import { Home } from './components/Home';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Stack } from './components/Stack';
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
  const tabItems = ["HOME", "ABOUT ME", "EXPERIENCE", "EDUCATION", "PROJECTS", "CONTACT", "STACK"];
 
  return (
    <>
      <main className="container-fluid" style={{ width:'100%', height: '100vh'}} id='desktop-container'>
        <section className='row h-100'>
          {/* Start desktop layout */}
            <article className='col-3' id='desktop-nav'>
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
          {/* End desktop layout */}
          <article className='col-9' id="tabs">
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
                    <Education />
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
                  <Stack />
                </Box>
              </CustomTabPanel>
             
          </article>
        </section>
        </main>

        <main id='mobile-container'>
        {/* Mobile layout */}
        <article className='container-fluid w-100' id='mobile-nav'>
            <Box style={{'width':'100%', height:''}}>
              <div className='w-100 d-flex justify-content-between flex-wrap fw-bold'>
                <Link href='#home' className='mt-2 mb-2 underline'>HOME</Link>
                <Link href='#about' className='mt-2 mb-2 underline'>ABOUT ME</Link>
                <Link href='#exp-container' className='mt-2 mb-2 underline'>EXPERIENCE</Link>
                <Link href='#ed-container' className='mt-2 mb-2 underline'>EDUCATION</Link>
                <Link href='#proj-container' className='mt-2 mb-2 underline'>PROJECTS</Link>
                <Link href='#cont-container' className='mt-2 mb-2 underline'>CONTACT</Link>
                <Link href='#stack-container' className='mt-2 mb-2 underline'>STACK</Link>
              </div>
            </Box>
            </article>
          {/* End mobile layout */}

        <section id='mobile-body'>
            <article>
                <Box className="h-100 m-auto">
                    <Home />
                </Box>
                <Box className="h-100">
                    <About />
                </Box>
                <Box className="h-100">
                    <Experience />
                </Box>
                <Box className="h-100">
                    <Projects />
                </Box>
                <Box className="h-100">
                    <Stack />
                </Box>
                <Box className="h-100">
                    <Education />
                </Box>
                <Box className="h-100">
                    <Contact />
                </Box>
            </article>
        </section>
      </main>
    </> 
  )
}
