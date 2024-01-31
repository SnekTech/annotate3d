import { HeaderBar } from "./layout/HeaderBar.tsx";
import { Nav } from "./layout/Nav.tsx";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <HeaderBar/>

            <Nav/>

            <Outlet/>
        </QueryClientProvider>
    )
}

export default App
