import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/Robot.gltf");
  const { actions } = useAnimations(animations, group);

  // Start the animation on component mount
  useEffect(() => {
    if (actions) {
      const animationName = Object.keys(actions)[0];

      actions[animationName].play();
    }

    return () => {
      if (actions) {
        const animationName = Object.keys(actions)[0]; // Just taking the first animation as an example
        actions[animationName].stop();
      }
    };
  }, [actions]);

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={[12, 12, 12]}
      position={[0, 0, 0]}
    >
      <group name="Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="1295dcf0c61449f4b0698ae7e46e5fabfbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="bot_B" position={[0, -0.003, 0]}>
                  <group
                    name="bot_B_arm_l"
                    position={[5.081, 12.334, 0.547]}
                    rotation={[3.141, 0, -0.001]}
                    scale={-1}
                  >
                    <mesh
                      name="bot_B_arm_l_bot_B_texture_0"
                      geometry={nodes.bot_B_arm_l_bot_B_texture_0.geometry}
                      material={materials.bot_B_texture}
                    />
                  </group>
                  <group
                    name="bot_B_arm_r"
                    position={[-5.068, 12.334, 0.547]}
                    rotation={[-0.001, 0, -0.001]}
                  >
                    <mesh
                      name="bot_B_arm_r_bot_B_texture_0"
                      geometry={nodes.bot_B_arm_r_bot_B_texture_0.geometry}
                      material={materials.bot_B_texture}
                    />
                  </group>
                  <group
                    name="bot_B_head"
                    position={[0, 14.571, 0]}
                    rotation={[0, 0, 0]}
                  >
                    <group name="bot_B_face" position={[0, 0, -0.1]}>
                      <mesh
                        name="bot_B_face_face_02_0"
                        geometry={nodes.bot_B_face_face_02_0.geometry}
                        material={materials.face_02}
                      />
                    </group>
                    <mesh
                      name="bot_B_head_bot_B_texture_0"
                      geometry={nodes.bot_B_head_bot_B_texture_0.geometry}
                      material={materials.bot_B_texture}
                    />
                    <mesh
                      name="bot_B_head_face_02_0"
                      geometry={nodes.bot_B_head_face_02_0.geometry}
                      material={materials.face_02}
                    />
                    <mesh
                      name="bot_B_head_light_blue_0"
                      geometry={nodes.bot_B_head_light_blue_0.geometry}
                      material={materials.light_blue}
                    />
                    <mesh
                      name="bot_B_head_transparency_crystal_0"
                      geometry={
                        nodes.bot_B_head_transparency_crystal_0.geometry
                      }
                      material={materials.transparency_crystal}
                    />
                  </group>
                  <mesh
                    name="bot_B_bot_B_texture_0"
                    geometry={nodes.bot_B_bot_B_texture_0.geometry}
                    material={materials.bot_B_texture}
                  />
                  <mesh
                    name="bot_B_light_blue_0"
                    geometry={nodes.bot_B_light_blue_0.geometry}
                    material={materials.light_blue}
                  />
                  <mesh
                    name="bot_B_transparency_crystal_0"
                    geometry={nodes.bot_B_transparency_crystal_0.geometry}
                    material={materials.transparency_crystal}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/Robot.gltf");
