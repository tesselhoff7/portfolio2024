import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { EffectComposer, Bloom, SSAO } from "@react-three/postprocessing";
import Robot from "../../../public/Robot";
import "./robotsContainer.scss";

const RobotsContainer = () => {
  return (
    <div className="robot-container">
      <Canvas shadows>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.8} />
        <OrbitControls enableZoom={false} target={[0, 1, 0]} />{" "}
        {/* Adjust the target to center the robot */}
        <Suspense fallback={null}>
          <Robot />
        </Suspense>
        <Environment preset="sunset" />
        <EffectComposer>
          <Bloom intensity={0.1} luminanceThreshold={0.1} />
          <SSAO
            samples={31}
            radius={0.1}
            intensity={20}
            luminanceInfluence={0.5}
            color="black"
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default RobotsContainer;
