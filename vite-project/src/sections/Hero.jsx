import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "../components/HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
// import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import Target from "../components/Target";
import{calculateSizes} from '../constants/index'
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Rings from "../components/Rings";
const Hero = () => {
  const isSmall = useMediaQuery({
    maxWidth: 440,
  });
  const isMobile = useMediaQuery({
    maxWidth: 830,
  });
  const isTablet = useMediaQuery({
    minWidth: 830,
    maxWidth: 1024,
  });
  const sizes=calculateSizes(isSmall,isMobile,isTablet)
  // const x=useControls('HackerRoom',{
  //   positionX:{
  //     value:2.5,
  //     min:-10,
  //     max:10
  //   },
  //   positionY:{
  //     value:2.5,
  //     min:-10,
  //     max:10
  //   },
  //   positionZ:{
  //     value:2.5,
  //     min:-10,
  //     max:10
  //   },
  //   rotationX:{
  //     value:0,
  //     min:-10,
  //     max:10
  //   },
  //   rotationY:{
  //     value:0,
  //     min:-10,
  //     max:10
  //   },
  //   rotationZ:{
  //     value:0,
  //     min:-10,
  //     max:10
  //   },
  //   scale:{
  //     value:1,
  //     min:0.1,
  //     max:10
  //   }
  // })
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className=" w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans ">
          Hi, I am Suhail <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Full Stack Developer & Building Projects
        </p>
      </div>
      <div className=" w-full h-full absolute inset-0 lg:mt-20 md:mt-20">
        {/* <Leva /> */}
        <Canvas className="w-full h-full lg:mt-20 md:mt-20 sm:mt-20">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HackerRoom
              scale={sizes.deskScale}
              position={sizes.deskPosition}
              rotation={[-6.0, -3.2, 0]}
              // scale={isMobile ? 0.08 : [0.1, 0.1, 0.1]}
              // position={[0.7, -7.7, 10.0]}
              // rotation={[-6.0, -3.2, 0]}
              // position={[x.positionX, x.positionY, x.positionZ]}
              // rotation={[x.rotationX,x.rotationY,x.rotationZ]}
              // scale={[x.scale,x.scale,x.scale]
            />
            <group>
              <Target position={sizes.targetPosition} scale={sizes.targetScale}/>
              <ReactLogo />
              <Cube position={sizes.cubePosition}/>
              <Rings position={sizes.ringPosition}/>
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
