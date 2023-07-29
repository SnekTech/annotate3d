import { Canvas, useThree } from "@react-three/fiber";
import { GizmoHelper, GizmoViewport, OrbitControls, TransformControls } from "@react-three/drei";

import { useRef, useEffect } from "react";
import { Mesh, Object3D } from "three";
import RotateControl from "./RotateControl";

const AnnotateScene = () => {

    const box = useRef<Mesh>(null!)


    return <Canvas>
        <OrbitControls makeDefault />
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} />

        <mesh ref={box}>
            <boxGeometry />
            <meshStandardMaterial color={"blue"} opacity={0.5} transparent/>
        </mesh>

        {/*<PivotControls*/}
        {/*    matrix={coneMesh.current?.matrix}*/}
        {/*    disableAxes={true}*/}
        {/*    disableSliders={true}*/}
        {/*    autoTransform={false}*/}
        {/*    onDrag={() => coneMesh.current?.matrix.copy(mat)}*/}
        {/*    />*/}

        <RotateControl type="transform" target={box} />
        

        <GizmoHelper>
            <GizmoViewport />
        </GizmoHelper>
    </Canvas>
}

export default AnnotateScene
