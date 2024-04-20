import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pagerender  from './Pagerender';
import Main from './pages/Main';
import { refreshToken } from './redux/actions/authAction';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  // Call the refreshToken action when the component is mounted
  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        {/* Define a route for each page in your application. */}
        {/* The Main component is rendered when the URL path matches "/" */}
        <Route exact path="/" element={<Main />} />
        {/* The Pagerender component is rendered when the URL path matches any other specified path */}
        <Route exact path="/:page" element={<Pagerender />} />
      </Routes>
    </Router>
  );
}

export default App;