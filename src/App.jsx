import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';


const App = () => {
    return ( 
        <React.Fragment>
            <Header/>
            <LandingPage/>
            <Footer/>
        </React.Fragment>
     );
}
 
export default App;