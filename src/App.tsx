import { Outlet } from '@tanstack/react-router'
import { HeaderBar } from "./layout/HeaderBar.tsx";
import { Nav } from "./layout/Nav.tsx";

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
