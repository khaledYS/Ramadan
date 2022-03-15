import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
function MotionFadeInLeft({
    onClick = ()=>{},
    className = "",
    children,
    variants,
    initial,
    animate,
    once,
    transition,
    visible,
    hidden,
    triggerOnce,
    threshold
}) {
    const controls = useAnimation();
    const { ref, inView } = useInView({triggerOnce: triggerOnce || false, threshold: threshold || 0.6});
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
            opacity: 1, 
            translateX: 0, 
            transition: { 
                duration: 1,
                delay: 0,
                ease: "anticipate",
                ...transition
            },
            ...visible
         },
        hidden: { 
            translateX:  -100 ,
            opacity: 0,
            ...hidden
        },
        ...variants
    };
    return (
        <motion.div 
         ref={ref}
         animate={controls}
         initial="hidden"
         variants={motionVariants}
         className={"  "  + className}
         onClick={onClick}
        >
            {children}
        </motion.div>
    );
}

export default MotionFadeInLeft;