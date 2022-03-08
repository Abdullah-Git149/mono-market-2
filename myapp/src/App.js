import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Provider} from "react-redux"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
import PriceListing from "./pages/Price-listing";
import Profile from "./pages/Profile";
import SignAndLogin from "./pages/SignAndLogin";
import SignIn from "./pages/SignIn";
import PrivateRoute from "./private/PrivateRoute";
import Store from "./store";
function App() {
  return (
    <div>
      <Provider store={Store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
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

            <Route path="/profile"element={<Profile />}/>
            <Route path="/contact" element={<Contact />} />
            <Route path="/signUp" element={<SignAndLogin />} />
            <Route path="/signIn" element={<SignIn />} />
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
