import { BrowserRouter, Routes, Route } from "react-router-dom";
import Vouler from "./Pages/Vou ler/Index";
import Lidos from "./Pages/Lidos/index1";


function AppRoutes() {
    return (
<BrowserRouter>
<Routes>
    <Route path="/" element={<Vouler/>}></Route>
    <Route path="/Lidos" element={<Lidos/>}></Route>
</Routes>
</BrowserRouter>
    );
}
export default AppRoutes;