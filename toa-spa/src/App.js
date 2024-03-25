import React, { useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Pagerender  from './Pagerender';
import Main from './pages/Main';
import { refreshToken } from './redux/actions/authAction';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);


  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/:page" element={<Pagerender />} />
      </Routes>
    </Router>
  );
}

export default App;
