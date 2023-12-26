import logo from './logo.svg';
import './App.css';
import React, {Suspense } from "react";
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Routes, Route, Link } from 'react-router-dom';
import { cyan, teal,lime } from '@mui/material/colors';
import Tab from '@mui/material/Tab';
const LazyHome = React.lazy(()=>import('./Component/Home/HomeComp'));
const LazyTasksComp = React.lazy(()=>import('./Component/ToDo/TasksComp'))
const LazyPosts = React.lazy(()=>import('./Component/Post/PostComp'));
const LazyUsers=React.lazy(()=>import('./Component/User/UsersComp'));
function App() {
  const color = teal['500'];
  return (
    <div className="App" dir="rtl">
      <Box sx={{ display: { xs: 'none', sm: 'block' }, '& :not(style)': { ml: 10 } }}>
        <AppBar position="static" sx={{ backgroundColor: color}} >
          <Toolbar >
            <Link to="/"  >
            <Tab label="בית" sx={{color:lime['50'],fontSize:'20px'}}  />
            </Link>
            <Link to="/todo">
            <Tab label="משימות" sx={{color:lime['50'],fontSize:'20px'}}/>
            </Link>
            <Link to="/post">
            <Tab label="פוסטים" sx={{color:lime['50'],fontSize:'20px'}}/>
            </Link>
            <Link to="/photo">
            <Tab label="תמונות" sx={{color:lime['50'],fontSize:'20px'}}/>
            </Link>
            <Link to="/users" >
            <Tab   label="משתמשים" sx={{color:lime['50'],fontSize:'20px'}}/>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
      <Routes>
        <Route path="/"  element={<Suspense fallback={<h1>loading..</h1>}><LazyHome/></Suspense>} />
        <Route path="/todo" element={<Suspense fallback={<h1>loading..</h1>}><LazyTasksComp/></Suspense>} />
        <Route path="/post" element={<Suspense fallback={<h1>loading..</h1>}><LazyPosts/></Suspense>} />
        <Route path="/users" element={<Suspense fallback={<h1>loading..</h1>}><LazyUsers/></Suspense>} />
      </Routes>
    </div>
  );
}

export default App;
