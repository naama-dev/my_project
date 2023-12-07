import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {Routes,Route,Link} from 'react-router-dom'
import HomeComp from './Home/HomeComp';

function App() {
  
  return (
    <div className="App" dir="rtl">
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar>
          <Link
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Home   
          </Link>
          <Link
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            ToDo   
          </Link>
          <Link
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Post   
          </Link> 
          <Link
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Photo    
          </Link>
          <Link
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Users    
          </Link>
        </Toolbar>
      </AppBar>
      </Box>
      <Routes>
        <Route path="/" element={<HomeComp/>} />
      </Routes>
    </div>
  );
}

export default App;
