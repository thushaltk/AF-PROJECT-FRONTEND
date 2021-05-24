import React from 'react';

import Lottie from 'react-lottie';
import * as WorldLoading from '../../../public/world-loading.json';

const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: WorldLoading,
    rendererSettings:{
        preserveAspectRatio : 'xMidYMid slice'
    }
};

const Loading = () => {
    return ( 
        <>
        <br/><br />
            <Lottie
                options={defaultOptions}
                height={400}
                width={400}
            />
        </>
     );
}
 
export default Loading;