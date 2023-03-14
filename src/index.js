import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './app/store';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Home from './pages/home';
import TopNav from './components/topNav';
import BottomNav from './components/bottomNav';
import MobileMenuBg from './components/mobileMenuBg';
import Background from './components/background';
import Test from './pages/test';
import TimeLineTest from './pages/timelineTest';
import ScrollToTop from './components/scrollToTop';
import AlphabetClock from './components/alphabetClock';
import Blog from './pages/blog';
import Contact from './pages/contact';
import About from './pages/about';
import Services from './pages/services';
import Works from './pages/works';
import BlogArticle from './pages/blogArticle';

export default function App() {

  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Provider store={store}>
          <Background/>
          <AlphabetClock/>
          <TopNav/>
          <MobileMenuBg/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/test" element={<Test/>}></Route>
            <Route path="/works" element={<Works/>}></Route>
            <Route path="/services" element={<Services/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/blog" element={<Blog/>}></Route>
            <Route path="/blog/:id" element={<BlogArticle/>}/>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/timeline-test" element={<TimeLineTest/>}></Route>
          </Routes>
          <BottomNav/>
      </Provider>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


