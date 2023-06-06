
import './App.css';
import Footer from './Components/Holder/Footer';
import Navbar from './Components/Navbar/Navbar';
import Sidenav from './Components/Navbar/Sidenav'
import AnimatedRoutes from './Components/Holder/AnimatedRoutes';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <AnimatedRoutes />
      <Sidenav/>
      <Footer />
    </div>
  );
}

export default App;
