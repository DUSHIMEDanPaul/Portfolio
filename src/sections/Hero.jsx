import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls } from '@react-three/drei'
import Character from '../Components/Character'
import CanvasLoader from '../Components/CanvasLoader'
import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants'
import Target from '../Components/Target'
 import Tv from '../Components/Tvs'
// import Cube from '../Components/Cube'
// import Rings from '../Components/Ring'
 import HeroCamera from '../Components/HeroCamera'
import Button from '../Components/Button'
const Hero=()=>{
  const x=useControls('Character',{
    positionX:{value:2.5,min:-10,max:10},
    positionY:{value:2.5,min:-10,max:10},
    positionZ:{value:2.5,min:-10,max:10},
    rotationX:{value:2.5,min:-10,max:10},
    rotationY:{value:2.5,min:-10,max:10},
    rotationZ:{value:2.5,min:-10,max:10},
    scale:{value:1,min:0.1,max:10}
  })
  const isMobile=useMediaQuery({maxWidth:768})
  const isSmall=useMediaQuery({maxWidth:440})
  const isTablet=useMediaQuery({minWidth:768,maxWidth:867})
  const sizes=calculateSizes(isSmall,isMobile,isTablet)
return(<section className='min-h-screen w-full flex flex-col relative' id='home'>
    <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
<p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'><span className='waving-hand'></span></p>
<p className='hero_tag text-gray_gradient'></p>
    </div>
    <div className='w-full h-full absolute inset-0'>
      {/* <Leva/> */}
      <Canvas>
        <Suspense fallback={<CanvasLoader />}>
          <PerspectiveCamera makeDefault position={[0, 0, 30]} />
          <OrbitControls enableZoom enablePan={false} minDistance={10} maxDistance={60} />
          <HeroCamera isMobile={isMobile}>

                      <Character scale={sizes.deskScale} rotation={[0,-Math.PI/2, 0]} position={sizes.deskPosition}  />
           
</HeroCamera>
      <group>
        <Target position={sizes.targetPosition} scale={5}/>
        <Tv position={sizes.reactLogoPosition} scale={1}/>
        
        {/* <Rings position={sizes.ringPosition} /> */}
      </group>
          <ambientLight intensity={5}/>
          <spotLight position={[4, 4, 1]} intensity={1000} />
          <directionalLight position={[0,5,0]} />
          <directionalLight position={[0,-5,0]} intensity={1} />
        </Suspense>
      </Canvas>
    </div>
    <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
<a href='#about' className='w-fit'>
  < Button name='let us work together' isBeam containerClass='sm:fit w-full sm:min-w-96'/>
</a>
    </div>
</section>)

}
export default Hero