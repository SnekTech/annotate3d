import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";

function AnnotateModeSwitch() {
    return (
        <>
            <FormControl>
                <RadioGroup row>
                    <FormControlLabel value={"translate"} control={<Radio/>} label={"平移"}/>
                    <FormControlLabel value={"rotate"} control={<Radio/>} label={"旋转"}/>
                </RadioGroup>
            </FormControl>
        </>
    )
}

export default AnnotateModeSwitch