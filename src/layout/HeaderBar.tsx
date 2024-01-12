import { Box, Button, ButtonGroup, Flex, Heading, Spacer } from "@chakra-ui/react";

export function HeaderBar() {

    return (
        <Flex alignItems={'center'} p={'2'}>
            <Box p={'2'}>
                <Heading size={'lg'}>Label3D v2</Heading>
            </Box>
            <Spacer />
            <ButtonGroup>
                <Button colorScheme={'teal'}>Sign Up</Button>
                <Button colorScheme={'teal'}>Log in</Button>
            </ButtonGroup>
        </Flex>
    )
}