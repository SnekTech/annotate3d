import Grid from "@mui/material/Unstable_Grid2";
import AnnotateScene from "./AnnotateScene.tsx";
import { Button, Stack, Paper } from "@mui/material";
import FramesCatalog from "./FramesCatalogue.tsx";
import FrameSkipper from "./FrameSkipper.tsx";

const Tool = () => {
    return (
        <Grid container height={'720px'}>
            <Grid xs={7}>
                <AnnotateScene />
            </Grid>
            <Grid xs={5}>
                <Paper sx={{backgroundColor: 'primary.light'}}>
                    <Stack padding={'1rem'}>
                        <Button variant="contained">Hello MUI</Button>
                    </Stack>

                    <FramesCatalog totalFrameCount={100} />

                    <FrameSkipper />
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Tool
