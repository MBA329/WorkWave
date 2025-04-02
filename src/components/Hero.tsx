import React from 'react';
import {motion,useInView} from 'framer-motion'
import { useRef } from 'react';

interface HeroProps{
  title:string;
  subtitle:string;
}
const Hero: React.FC<HeroProps> = (props) => {

  const titleref = useRef<HTMLHeadingElement>(null);
  const isTitleInView = useInView(titleref, {once:true,amount:0.2});
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const isSubtitleInView = useInView(subtitleRef, {once:true,amount:0.2});
  return (
    <div>
      <section className="bg-blue-50 text-indigo-600 h-screen pt-20 py-20 mb-4 flex justify-center items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center">
            <motion.h1 
            ref={titleref}
            initial={{opacity:0,y:50}}
            animate={isTitleInView ? {opacity:1, y:0} : {opacity:0, y:50}}
            transition={{
              duration:2,
              ease:[0.25,0.1,0.25,1],
              type:'spring',
            }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              {props.title}
            </motion.h1>
            <motion.p
             ref={subtitleRef}
             initial={{opacity:0,y:50}}
             animate={isSubtitleInView ? {opacity:1, y:0} : {opacity:0, y:50}}
             transition={{
               duration:2,
               ease:[0.25,0.1,0.25,1],
               type:'spring',
             }}
            className="my-4 text-lg sm:text-xl md:text-2xl text-blue-600">
              {props.subtitle}
            </motion.p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero