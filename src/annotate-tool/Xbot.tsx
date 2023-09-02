
import { useGLTF } from "@react-three/drei";
import { Color, Vector3 } from "three";
import { useControls } from "leva";

export function Xbot() {
  const { nodes } = useGLTF("/Xbot.glb") as any;
  const {materialColor, pos} = useControls({
    pos: {
      x: 0.4,
      y: 0.76,
      z: 0
    },
    materialColor: {
      r: 40,
      g: 247,
      b: 208,
      a: 0.66
    }
  })

  const modelPos = new Vector3(pos.x, pos.y, pos.z)

  const matColor = new Color(materialColor.r / 255, materialColor.g / 255, materialColor.b / 255)
  const matAlpha = materialColor.a

  return (
    <group dispose={null} position={modelPos}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.02} position-y={-1}>
          <skinnedMesh
            name="Beta_Joints"
            geometry={nodes.Beta_Joints.geometry}
            // material={materials["Beta_Joints_MAT1.001"]}
            skeleton={nodes.Beta_Joints.skeleton}>
            <meshStandardMaterial transparent color={matColor} opacity={matAlpha} />
          </skinnedMesh>
          <skinnedMesh
            name="Beta_Surface"
            geometry={nodes.Beta_Surface.geometry}
            // material={materials["Beta_HighLimbsGeoSG3.001"]}
            skeleton={nodes.Beta_Surface.skeleton}>
            <meshStandardMaterial transparent color={matColor} opacity={matAlpha} />
          </skinnedMesh>
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/Xbot.glb");

