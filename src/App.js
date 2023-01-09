import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./style.css";

/**
 *
 * Header
 *   - Logo
 *   - Nav Items(right side)
 *   - Cart
 * Body
 *   - Search bar
 *   - RestaurantList
 *      - Image
 *      - Name
 *      - Rating
 *      - Cuisines
 * Footer
 *   - links
 *   - Copyright
 *
 */

const App = () => (
  <>
    <Header />
    <Body />
    <Footer />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
