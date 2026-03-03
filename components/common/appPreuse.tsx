"use client";

import { useEffect, useState } from "react";

const AppPreuse: React.FC = () => {
    const [shouldLoadIframe, setShouldLoadIframe] = useState(false);

    useEffect(() => {
        setShouldLoadIframe(true);
    }, []);

    return (
        <div 
            className="relative w-[295.4px] h-[581px] flex items-center justify-center"
        >   
            {shouldLoadIframe && (
            <iframe src="https://codin.inu.ac.kr/" 
                sandbox="allow-scripts allow-same-origin allow-popups"
                className="z-5 absolute left-[-25%] top-[-24%] w-[150%] h-[150%] scale-[0.57] origin-center"
                title="Codin 앱 미리보기">
            </iframe>
            )}
            <div 
                className="z-10 w-full h-full bg-cover bg-center pointer-events-none"
                style={{ backgroundImage: "url('/images/iphone.webp')" }}
            />
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <div className="bg-white w-[260.4px] h-[541px] rounded-md"/>
            </div>
            
        </div>
    );

};

export default AppPreuse;