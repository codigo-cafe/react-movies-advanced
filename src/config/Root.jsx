import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';

const Root = () => {
    return (
        <div>
            <Routes>
                <Route
                    path="/:category/search/:keyword"
                    element={<Catalog />}
                ></Route>
                <Route path="/:category/:id" element={<Detail />}></Route>
                <Route path="/:category" element={<Catalog />}></Route>
                <Route path="/" exact element={<Home />}></Route>
            </Routes>
        </div>
    );
};

export default Root;
