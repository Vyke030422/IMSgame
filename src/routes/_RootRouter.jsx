import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Admin_Login } from "../import_bundles/_Bundles"

export default function RootRouter() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/"element={<Admin_Login/>}/>
        </Routes>
        </BrowserRouter>
    )
}
