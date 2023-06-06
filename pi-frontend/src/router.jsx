import React from "react"
import{
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

import Home from "./pages/Home"
import AccountAdmin from "./pages/AccountAdmin"
import AccountUser from "./pages/AccountUser"
import Checkout from "./pages/Checkout"
import Error404 from "./pages/Error404"
import Index from "./pages/Index"
import ListAcessories from "./pages/ListAcessories"
import ListBeer from "./pages/ListBeer"
import ListKits from "./pages/ListKits"
import Login from "./pages/Login"
import Product from "./pages/Product"
import ProductRegistration from "./pages/ProductRegistration"
import ProductUpdate from "./pages/ProductUpdate"
import Search from "./pages/Search"
import ShoppingCart from "./pages/ShoppingCart"
import SignUp from "./pages/SignUp"

const Router = () => {
    return(
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/homestore"
              element={<Home />}
            />
            <Route
              path="/accountadmin"
              element={<AccountAdmin />}
            />
            <Route
              path="/accountuser"
              element={<AccountUser />}
            />
            <Route
              path="/checkout"
              element={<Checkout />}
            />
            <Route
              path="/404"
              element={<Error404 />}
            />
            <Route
              path="/"
              element={<Index />}
            />
            <Route
              path="/listacessories"
              element={<ListAcessories />}
            />
            <Route
              path="/listbeer"
              element={<ListBeer />}
            />
            <Route
              path="/listkits"
              element={<ListKits />}
            />
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/product"
              element={<Product />}
            />
            <Route
              path="/productregistration"
              element={<ProductRegistration />}
            />
            <Route
              path="/productupdate"
              element={<ProductUpdate />}
            />
            <Route
              path="/search"
              element={<Search />}
            />
            <Route
              path="/shoppingcart"
              element={<ShoppingCart />}
            />
            <Route
              path="/signup"
              element={<SignUp />}
            />
          </Routes>
        </BrowserRouter>
    )
}
export default Router