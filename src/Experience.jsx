import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import FBOParticles from "./FBOParticles";

export default function Experience() {
  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <FBOParticles />
    </>
  );
}
