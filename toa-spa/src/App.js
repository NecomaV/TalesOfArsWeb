
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Pagerender  from './Pagerender';
import Main from './pages/Main';


function App() {
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
