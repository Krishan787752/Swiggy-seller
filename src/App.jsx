import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Categories from "./Pages/Categories";
import Restaurants from "./Pages/Restaurants";
import Products from "./Pages/Product";


function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="p-6 overflow-y-auto">
            <Routes>
              <Route path="*" element={<Dashboard />} />
              <Route path ="/Pages/Categories" element={<Categories/>} />
              <Route path="/Pages/Restaurants" element={<Restaurants/>}/>
              <Route path="/Pages/Product" element={<Products/>}/>
            
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
