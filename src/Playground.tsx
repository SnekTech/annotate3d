import { Container } from "@mui/material";
import { Canvas } from "@react-three/fiber";

export function Playground() {
    

    return (
        <>
            <Container maxWidth="sm" >
                <Canvas>
                    <ambientLight intensity={0.1} />
                    <directionalLight color={"red"} position={[0, 0, 5]} />
                    <mesh>
                        <boxGeometry />
                        <meshStandardMaterial />
                    </mesh>
                </Canvas>
            </Container>
        </>
    )
}

