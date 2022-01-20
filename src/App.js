import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Container from './components/Container/Container';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Favorite from './components/Favorite/Favorite';
import PageTitle from './components/PageTitle/PageTitle';
import List from './components/List/List';

const App = () => {
  return (
    <main>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/list/:listId" element={<List />} />
          <Route
            path="*"
            element={
              <Container>
                <PageTitle>404 not found</PageTitle>
              </Container>
            }
          />
        </Routes>
      </Container>
    </main>
  );
};

export default App;
