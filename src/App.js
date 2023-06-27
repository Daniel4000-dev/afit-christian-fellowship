
import './App.css';
import Footer from './Components/Holder/Footer';
import Navbar from './Components/Navbar/Navbar';
import Sidenav from './Components/Navbar/Sidenav'
import AnimatedRoutes from './Components/Holder/AnimatedRoutes';
import SubFooter from './Components/Holder/Anouncement/SubFooter';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <AnimatedRoutes />
      <Sidenav/>
      <SubFooter />
      <Footer />
    </div>
  );
}

export default App;
