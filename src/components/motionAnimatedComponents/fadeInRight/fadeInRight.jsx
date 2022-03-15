import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
function MotionFadeInRight({
    onClick = ()=>{},
    className = "",
    children,
    variants,
    initial,
    animate,
    once,
    transition,
    threshold
}) {
    const controls = useAnimation();
    const { ref, inView } = useInView({triggerOnce: once || false, threshold: threshold || 0.6});
    useEffect(() => {
        console.log("faderight")
        if (inView) {
          controls.start('visible');
        }
        if (!inView && !once) {
          controls.start('hidden');
        }
      }, [controls, inView]);
    const motionVariants = {
        visible: { 
            opacity: 1, 
            translateX: 0, 
            transition: { 
                duration: 1,
                delay: 0,
                ease: "anticipate",
                ...transition
            }
         },
        hidden: { 
            translateX:  100 ,
            opacity: 0
        },
        ...variants
    };
    return (
        <motion.div 
         ref={ref}
         animate={controls}
         initial={"hidden"}
         variants={motionVariants}
         className={"  "  + className}
         onClick={onClick}
        >
            {children}
        </motion.div>
    );
}

export default MotionFadeInRight;