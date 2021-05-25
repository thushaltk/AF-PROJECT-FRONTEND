import React from 'react';

import Lottie from 'react-lottie';


const Loading = (props) => {
    var defaultOptions = {
        loop: props.loop,
        autoplay: true,
        animationData: props.setContent,
        rendererSettings:{
            preserveAspectRatio : 'xMidYMid slice'
        }
    };
    
    return ( 
        <>
        <br/><br />
            <Lottie
                options={defaultOptions}
                height={props.height}
                width={props.width}
            />
        </>
     );
}
 
export default Loading;