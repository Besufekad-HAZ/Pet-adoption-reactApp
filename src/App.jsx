import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>Adopt Me!</h1>
      </div>
    </BrowserRouter>
  );
};

createRoot(document.getElementById("root")).render(<App />);
