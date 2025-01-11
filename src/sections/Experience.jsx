import { Canvas } from '@react-three/fiber';

import { workExperiences } from '../constants/index.js';
import {OrbitControls} from "@react-three/drei";
import {Suspense, useState} from "react";
import CanvasLoader from "../components/CanvasLoader.jsx";
import Developer from "../components/Developer.jsx";

const WorkExperience = () => {
    const [animationName, setAnimationName] = useState('idle');

    return (
        <section className="c-space my-20" id="work">
            <div className="w-full text-white-600">
                <p className="head-text">My Work Experience</p>

                <div className="work-container">
                    <div className="work-canvas">
                        <Canvas>
                            <ambientLight intensity={2}/>
                            <spotLight position={[10,10,10]} angle={0.15} penumbra={1}/>
                            <directionalLight position={[10,10,10]} intensity={1}/>
                            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2}/>
                            <Suspense fallback={<CanvasLoader/>}>
                                <Developer position-y={-3} scale={3} rotation={[Math.PI / 16, 0, 0]} animationName={animationName}/>
                            </Suspense>
                        </Canvas>
                    </div>

                    <div className="work-content">
                        <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                            {workExperiences.map(({id, name, pos, icon, duration, title, animation}) => (
                                <div
                                    key={id}
                                    onClick={() => setAnimationName(animation.toLowerCase())}
                                    onPointerOver={() => setAnimationName(animation.toLowerCase())}
                                    onPointerOut={() => setAnimationName('idle')}
                                    className="work-content_container group">
                                    <div className="flex flex-col h-full justify-start items-center py-2">
                                        <div className="work-content_logo">
                                            <img className="w-full h-full" src={icon} alt="" />
                                        </div>

                                        <div className="work-content_bar" />
                                    </div>

                                    <div className="sm:p-5 px-2.5 py-5">
                                        <p className="font-bold text-white-800">{name}</p>
                                        <p className="text-sm mb-5">
                                            {pos} -- <span>{duration}</span>
                                        </p>
                                        <p className="group-hover:text-white transition-all ease-in-out duration-500">{title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;

//https://models.readyplayer.me/677aedae16d0f823940c85c4.glb