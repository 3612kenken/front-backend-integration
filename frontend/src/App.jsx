import WebContents from "./components/webcontents";
import ApiContents from "./components/apicontents";
import Dashboard from "./components/dashboard";
import Profile from "./components/profile";
import Footer from "./components/footer";
//import "./components/style.css";
import "./App.css";

function App() {
  return (
    <>
      <WebContents />
      <ApiContents />
      <Footer />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path="Profile" element={<Profile />} />
            <Route path="About" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
