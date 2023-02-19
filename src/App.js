import { CssBaseline } from "@mui/material";
import React from "react";
import { useRoutes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { Home } from "./pages/home";

const App = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return (
    <div>
      <Navbar />
      {routes}
      <Footer />
      <CssBaseline/>
    </div>
  );
};

export default App;
