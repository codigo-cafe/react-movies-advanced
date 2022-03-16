import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Root from './config/Root';

function App(props) {
    let MyRoutes = () => {
        return (
            <>
                <Header {...props} />
                <Root />
                <Footer />
            </>
        );
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<MyRoutes />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
