import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "animate.css";
function MotionFadeInUp({
    onClick = ()=>{},
    className = "",
    children,
    variants,
    initial,
    animate,
    duration,
    delay,
    opacityBefore,
    opacityAfter,
    translateYBefore,
    translateYAfter,
    once
}) {
    const controls = useAnimation();
    const { ref, inView } = useInView();
    useEffect(() => {
        if (inView) {
          controls.start('visible');
        }
        if (!inView && !once) {
          controls.start('hidden');
        }
      }, [controls, inView]);
    const motionVariants = {
        visible: { 
            opacity: opacityAfter || 1, 
            translateY: translateYAfter || "0%", 
            transition: { 
                duration: duration || 1,
                delay: delay || 0,
                ease: "anticipate"
            }
         },
        hidden: { 
            translateY: translateYBefore || "100%" ,
            opacity: opacityBefore || 0
        }
    };
    return (
        <motion.div 
         ref={ref}
         animate={animate || controls}
         initial={initial || "hidden"}
         variants={variants || motionVariants}
         className={"  "  + className}
         onClick={onClick}
        >
            {children}
        </motion.div>
    );
}

export default MotionFadeInUp;