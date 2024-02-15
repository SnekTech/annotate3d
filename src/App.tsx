import { HeaderBar } from "./layout/HeaderBar.tsx";
import { Nav } from "./layout/Nav.tsx";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Container } from "@chakra-ui/react";

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <HeaderBar/>

            <Nav/>

            <Container maxW={'1200px'}>
                <Outlet/>
            </Container>
        </QueryClientProvider>
    )
}

export default App
