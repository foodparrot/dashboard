import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import LiveOrders from "./components/LiveOrders/LiveOrders";
import Parent from "./components/Parent/Parent";
import Sidebar from "./components/Sidebar/Sidebar";
import PauseOrders from "./components/PauseOrders/PauseOrders";
import Customers from "./components/Customers/Customers";
import Menus from "./components/Menus/Menus";
import View from "./components/View/View";
import Products from "./components/Products/Products";
import Addproduct from "./components/Addproduct/Addproduct";
import EditProduct from "./components/EditProduct/EditProduct";
import Outlets from "./components/Outlets/Outlets";
import OrderHistory from "./components/OrderHistory/OrderHistory";
import Inventory from "./components/Inventory/Inventory";
import Details from "./components/LiveOrders/Details";
import Profile from "./components/Profile/Profile";
import Marketing from "./components/Marketing/Marketing";
import CreateCoupon from "./components/Marketing/createCoupon";
import DiscountCoupons from "./components/Marketing/DiscountCoupons";
import Channel from "./components/Marketing/SaleChannel";
import Store from "./components/Marketing/QRCode";
import MarketingDesign from "./components/Marketing/MarketingDesigns";
import StoreBanner from "./components/Marketing/StoreBanners";
import WhatsAppStory from "./components/Marketing/WhatsAppStories";
import BusinessCards from "./components/Marketing/BusinessCards";
import CreateOutlet1 from "./components/Outlets/CreateOutlet1";
import CreateOutlet2 from "./components/Outlets/CreateOutlet2";
import CreateOutlet3 from "./components/Outlets/CreateOutlet3";
import TestModal from "./components/TestModal";
import Addcategory from "./components/Addcategory/AddCategory";
import Editcategory from "./components/Editcategory/EditCategory";
import CreateMenu from "./components/Menus/CreateMenu";
import ImportMenu from "./components/Menus/ImportMenu";
import categoryProducts from "./components/categoryProducts/categoryProducts";
import AppLayout from "./components/AppLayout/AppLayout";
import PrivateOutlet from "./components/PrivateOutlet";
import Errorpage from "./components/Errorpage"
import SampleQuery from "./components/sampleQuery";
import SampleQuerySuspense from "./components/sampleQuery/suspense";
const App = () => {
  return (
    <BrowserRouter>
        <Routes>
        <Route element={<AppLayout />}>
        <Route element={<SampleQuery/>} path="/query"/>
        <Route element={<SampleQuerySuspense/> } path="/query2"/>
        <Route element={<PrivateOutlet />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/liveorders" exact element={<LiveOrders />} />
          <Route path="/liveorders/:oid" element={<LiveOrders />} />
          <Route path="/PauseOrders" element={<PauseOrders />} />
          <Route path="/Customers" element={<Customers />} />
          <Route path="/menu/menus" element={<Menus />} />
          <Route path="/View/View" element={<View />} />
          <Route path="/products/all" element={<Products />} />
          <Route path="/products/new" element={<Addproduct />} />
          <Route path="/products/edit" element={<EditProduct />} />
          <Route path="/products/category" element={<categoryProducts />} />
          <Route path="/category/new" element={<Addcategory />} />
          <Route path="/category/edit" element={<Editcategory />} />
          <Route path="/menus/Createmenu" element={<CreateMenu />} />
          <Route path="/menus/Importmenu" element={<ImportMenu />} />
          <Route path="/outlets" element={<Outlets />} />
          <Route path="/OrderHistory" element={<OrderHistory />} />
          <Route path="/Inventory" element={<Inventory />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/createcoupon" element={<CreateCoupon />} />
          <Route path="/discountcoupons" element={<DiscountCoupons />} />
          <Route path="/saleschannels" element={<Channel />} />
          <Route path="/storeQRCode" element={<Store />} />
          <Route path="/marketingdesigns" element={<MarketingDesign />} />
          <Route path="/storebanners" element={<StoreBanner />} />
          <Route path="/whatsappstories" element={<WhatsAppStory />} />
          <Route path="/businesscards" element={<BusinessCards />} />
          <Route path="/createoutlets1" element={<CreateOutlet1 />} />
          <Route path="/createoutlets2" element={<CreateOutlet2 />} />
          <Route path="/createoutlets3" element={<CreateOutlet3 />} />
          <Route path="/modal" element={<TestModal />} />
          </Route>
          <Route path="*" element={<Errorpage />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
};

export default App;
