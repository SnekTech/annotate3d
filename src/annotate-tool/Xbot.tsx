
import { useGLTF } from "@react-three/drei";

export function Xbot() {
  const { nodes, materials } = useGLTF("/Xbot.glb") as any;
  return (
    <group dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh
            name="Beta_Joints"
            geometry={nodes.Beta_Joints.geometry}
            material={materials["Beta_Joints_MAT1.001"]}
            skeleton={nodes.Beta_Joints.skeleton}
          />
          <skinnedMesh
            name="Beta_Surface"
            geometry={nodes.Beta_Surface.geometry}
            material={materials["Beta_HighLimbsGeoSG3.001"]}
            skeleton={nodes.Beta_Surface.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/Xbot.glb");

