import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
function App() {
  const Page = ({ children }) => (
    <div className="min-w-sm flex items-center justify-center h-full w-full max-w-screen-2xl">
      <main className="py-2 px-4 flex justify-center items-center">
        {children}
      </main>
    </div>
  );
  return (
    <Router>
      <Page>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Page>
    </Router>
  );
}

export default App;
