import { HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function Nav() {

    return (
        <HStack>
            <Link to={'home'}>Home</Link>
            <Link to={'tool'}>Tool</Link>
        </HStack>
    );
}