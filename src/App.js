import { BrowserRouter,Switch,Route } from 'react-router-dom';
import AuthProvider from './Context/AuthProvider';
import Aboutus from './Pages/Aboutus/Aboutus';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Footer/Footer';
import Login from './Pages/Login/Login';
import NavBar from './Pages/Navbar/NavBar';
import Notfound from './Pages/Notfound/Notfound';
import Detail from './Pages/serviceAll/DetailService/Detail/Detail';
import Home from './Pages/serviceAll/HomeService/Home/Home';
import ServicesLoad from './Pages/Services/ServicesLoad/ServicesLoad';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import './App.css';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route  path="/home">
            <Home></Home>
          </Route>
          <Route path="/aboutus">
            <Aboutus></Aboutus>
          </Route>
          <Route path="/services">
            <ServicesLoad></ServicesLoad>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/detail/:detailId">
            <Detail></Detail>
          </PrivateRoute>
          <Route path="/*">
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;
