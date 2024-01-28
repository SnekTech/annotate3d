
import { HeaderBar } from "./layout/HeaderBar.tsx";
import { Nav } from "./layout/Nav.tsx";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <>
            <HeaderBar/>

            <Nav/>

            <Outlet/>
        </>
    )
}

export default App
