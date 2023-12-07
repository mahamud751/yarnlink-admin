import "bootstrap-4-react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Add_Product from "./pages/Add_Product";
import Product from "./pages/Product";
import Supplier from "./pages/Supplier";
import Add_Banner from "./pages/Add_Banner";
import Banner from "./pages/Banner";
import PrivateRoute from "./Routes/PrivateRoute/PrivateRoute";
import AdminRoute from "./Routes/AdminRoute/AdminRoute";
import Add_Privacy from "./components/Pages/Add_Privacy";

import "./App.css";
import Pages from "./pages/Pages";
import Terms_list from "./components/Pages/Terms_list";
import Add_Terms from "./components/Pages/Add_Terms";
import Privacy_list from "./components/Pages/Privacy_list";
import Update_Terms from "./components/Pages/Update_Terms";
import Update_Privacy from "./components/Pages/Update_Privacy";
import Add_Supplier from "./pages/Add_Supplier";
import Add_Strength from "./pages/Add_Strength";
import Strength from "./pages/Strength";
import Add_Blog from "./pages/Add_Blog";
import Blog from "./pages/Blog";
import Add_Mission from "./pages/Add_Mission";
import Add_Vision from "./pages/Add_Vision";
import Add_Support from "./pages/Add_Support";
import Vision from "./pages/Vision";
import Misison from "./pages/Mission";
import Support from "./pages/Support";

function App() {
  return (
    <div className="">
      <Routes>
        <Route element={<SignIn />}>
          <Route path="/signup" element={<SignIn />} />
        </Route>

        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/" element={<AdminRoute />}>
          <Route path="/" element={<Home />} />

          <Route path="add_product" element={<Add_Product />} />
          <Route path="product_list" element={<Product />} />

          <Route path="add_supplier" element={<Add_Supplier />} />
          <Route path="supplier_list" element={<Supplier />} />
          <Route path="add_banner" element={<Add_Banner />} />
          <Route path="banner_list" element={<Banner />} />
          <Route path="add_strength" element={<Add_Strength />} />
          <Route path="strength_list" element={<Strength />} />
          <Route path="add_blog" element={<Add_Blog />} />
          <Route path="blog_list" element={<Blog />} />
          <Route path="pages" element={<Pages />} />
          <Route path="add_privacy" element={<Add_Privacy />} />
          <Route path="add_mission" element={<Add_Mission />} />
          <Route path="mission_list" element={<Misison />} />
          <Route path="add_vision" element={<Add_Vision />} />
          <Route path="vision_list" element={<Vision />} />
          <Route path="add_support" element={<Add_Support />} />
          <Route path="support_list" element={<Support />} />
          <Route path="privacy_list" element={<Privacy_list />} />
          <Route path="add_terms" element={<Add_Terms />} />
          <Route path="terms_list" element={<Terms_list />} />
          <Route path="update_terms/:id" element={<Update_Terms />} />
          <Route path="update_privacy/:id" element={<Update_Privacy />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
