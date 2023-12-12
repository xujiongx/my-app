import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import router from './const/route';
// import Layout from './layout';

function App() {
  return (
    <BrowserRouter>
      {/* <Layout> */}
        <Routes>
          {router.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Routes>
      {/* </Layout> */}
    </BrowserRouter>
  );
}

export default App;
