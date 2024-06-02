import Nav from './components/nav.js';
import Main from './components/main.js';
import Footer from './components/footer.js';
import About from './components/About.js';
import Contact from './components/contact.js';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Nav title="Text Tools"/>
    <Routes>
    <Route path='/Text-Tools' element={<Main />} />
    <Route path='/Text-Tools/About-us' element={<About />} />
    <Route path='/Text-Tools/Contact-us' element={<Contact />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
