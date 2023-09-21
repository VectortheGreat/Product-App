import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Header from "./components/Header";
import Test from "./pages/Test";
function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Routes>
          <Route index path="/" element={<Product></Product>}></Route>
          <Route index path="/test" element={<Test></Test>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
