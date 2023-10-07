import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Landpage1 from "./pages/Landpage1";
import Landpage2 from "./pages/Landpage2";
import Landpage3 from "./pages/Landpage3";
import Landpage4 from "./pages/Landpage4";
import LandpageFooter from "./pages/LandpageFooter";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      // case "/landpage2":
      //   title = "";
      //   metaDescription = "";
      //   break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
  <div>
    <Landpage1/>
    <Landpage2/>
    <Landpage3/>
    <Landpage4/>
    <LandpageFooter/>
  </div>
  );
}
export default App;
