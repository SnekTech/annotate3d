import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import classes from './AnnotateScene.module.css'
import Hand from "./Hand.tsx";

const AnnotateScene = () => {
    console.log(classes);
    return <div className={classes.canvas}>
        <Canvas >
            <OrbitControls makeDefault/>
            <ambientLight intensity={0.1}/>
            <directionalLight color={'red'} position={[0, 0, 5]}/>

            <Hand/>
        </Canvas>
    </div>
}

export default AnnotateScene