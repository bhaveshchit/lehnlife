import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './styles/theme';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import BusinessPlan from './pages/sections/BusinessPlan';
import WhitePaper from './pages/sections/Whitepaper';
import Tokenomics from './pages/sections/Tokonomics';
import LehnStory from './pages/sections/About';
import {BlogList, BlogPost } from './pages/sections/News';
//import AdoptionStories from './pages/sections/AdoptionStories';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proposal" element={<BusinessPlan />} />
          <Route path="/whitepaper" element={<WhitePaper />} />
          <Route path="/tokenomics" element={<Tokenomics />} />
          <Route path="/about" element={<LehnStory />} />
          <Route path="/blog" element={<BlogList />} />
      <Route path="/blog/:postId" element={<BlogPost />} />
        {/*  <Route path="/adoption-stories" element={<AdoptionStories />} /> */}
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}