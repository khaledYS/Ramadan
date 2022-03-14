import { Children } from "react";

function WideBtn({
        title,
        className,
        children, 
        onClick = ()=>{}
    }) {
    return (
        <button 
            className={"ar wide-btn bg-[#363b41] px-8 py-4 rounded-md hover:bg-[#4A525A] min-w-[300px] my-1 text-2xl" + className}
            onClick={onClick}
            >

            {title}
            {children}
        </button>
    );
}

export default WideBtn;