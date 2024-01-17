import { HStack } from "@chakra-ui/react";
import { Link } from "@tanstack/react-router";

export function Nav() {

    return (
        <HStack>
            <Link to={'/'}>Home</Link>
            <Link to={'/tool'}>Tool</Link>
        </HStack>
    );
}