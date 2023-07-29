import Grid from "@mui/material/Unstable_Grid2";
import AnnotateScene from "./AnnotateScene.tsx";
import { Button, Stack } from "@mui/material";

const Tool = () => {
    return (
        <Grid container >
            <Grid xs={8} height={"720px"}>
                <AnnotateScene/>
            </Grid>
            <Grid xs={4}>
                <Stack>
                    <Button variant="contained">Hello MUI</Button>
                </Stack>
            </Grid>
        </Grid>
    )
}

export default Tool
