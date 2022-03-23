import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const HomePage = lazy(() => import('./components/HomePage.js'));
const WebDesign = lazy(() => import('./components/WebDesign.js'));
const SEO = lazy(() => import('./components/SEO.js'));
const AboutUs = lazy(() => import('./components/AboutUs.js'));
const ContactUs = lazy(() => import('./components/ContactUs.js'));
const Header = lazy(() => import('./components/Header.js'));
const Footer = lazy(() => import('./components/Footer.js'));

function App() {
  return (
    <Router>
    <Suspense fallback={<div>Loading...</div>}>
        <Header />
          <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/seo" exact component={SEO} />
                <Route path="/web-design" exact component={WebDesign} />
                <Route path="/about-us" exact component={AboutUs}/>
                <Route path="/contact-us" exact component={ContactUs} />
            </Switch>
        <Footer />
    </Suspense>
  </Router>
  );
}

export default App;
