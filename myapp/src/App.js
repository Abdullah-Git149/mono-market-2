import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
import PriceListing from "./pages/Price-listing";
import Profile from "./pages/Profile";
import SignAndLogin from "./pages/SignAndLogin";
import SignIn from "./pages/SignIn";
import PrivateRoute from "./private/PrivateRoute";
import Store from "./store";
import Advertise from "./pages/Advertise";
import Edit from "./pages/Edit";
import Details from "./pages/Details";
import AOS from "aos"
import 'animate.css';


function App() {
  // AOS.init({
  //   offset: 820,
  //   duration: 800,
  // });
  return (
    <div>
      <Provider store={Store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home/:page" element={<Home />} />
            <Route path="/detail/:id" element={<Details />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricingList" element={<PriceListing />} />
            {/* <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            /> */}

            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signUp" element={<SignAndLogin />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/advertise" element={<Advertise />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
        </BrowserRouter>
      </Provider>

      {/* <Home /> */}

      {/* <About/> */}

      {/* <Contact/> */}

      {/* <Features/> */}

      {/* <PriceListing/>  */}

      {/* <Profile/> */}

      {/* <SignAndLogin/> */}
    </div>
  );
}

export default App;
