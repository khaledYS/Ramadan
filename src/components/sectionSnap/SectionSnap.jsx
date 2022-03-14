import { useEffect } from "react";

function SectionSnap({children, className="", id}) {
    return (
        <section
         className={" section min-w-full min-h-full snap " + className}
         id={id}
         >
            {children}
        </section>
    );
}

export default SectionSnap;