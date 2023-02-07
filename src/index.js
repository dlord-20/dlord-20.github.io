import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route
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

export default function App() {

  return (
    <BrowserRouter>
      <Provider store={store}>
          <Background/>
          <TopNav/>
          <MobileMenuBg/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/test" element={<Home/>}></Route>
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
