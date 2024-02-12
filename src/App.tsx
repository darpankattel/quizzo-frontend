import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Quiz from './pages/Quiz';

import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import QuizProvider from './context/QuizContext';
import Signup from './pages/Signup';
import { Result } from 'antd';

function App() {
  return (
    <QuizProvider>
      <Router>
        <Routes >
          <Route path='/' element={
            <>
              <AppLayout />
            </>
          } >
            <Route index element={<Home />} />
            <Route path='/home' element={<Navigate to='/' />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/quiz' element={<Quiz />} />
          </Route>
          <Route path='*' element={
             <Result
             status="404"
             title="404"
             subTitle="Sorry, the page you visited does not exist."
             extra={<Link to="" type="primary">Back Home</Link>}
           />
          } />
        </Routes>
      </Router>
    </QuizProvider>
  );
}

export default App;
