import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
const Target=(props)=>{
    const targetRef=useRef()    
    const {scene}=useGLTF('/models/macbook.glb')
    useGSAP(()=>{
        gsap.to(targetRef.current.position,{y:targetRef.current.rotation.y+0.005,
            duration:10,
            repeat:-1,
 yoyo:true,
        })
    })
    return(<mesh {...props} ref={targetRef} rotation={[0,Math.PI/5,0]} >
      <primitive object={scene}/>  
    </mesh>)
}
useGLTF.preload('/models/macbook.glb')
export default Target