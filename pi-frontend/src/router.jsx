import React from "react"
import{
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

import Home from "./pages/Home"

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
              path="/"
              element={null}
            />
            <Route
              path="/"
              element={null}
            />
          </Routes>
        </BrowserRouter>
    )
}
export default Router