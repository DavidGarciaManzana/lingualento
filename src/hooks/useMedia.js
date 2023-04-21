import React from 'react';


function useMedia() {
    const [viewportWidth, setViewportWidth] = React.useState(0)

    React.useEffect(() => {
            if (typeof window !== 'undefined') {
                setViewportWidth(window.innerWidth);
            }
        }, [])

    return viewportWidth;

}

export default useMedia;