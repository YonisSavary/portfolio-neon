const FLICKER_INTERVAL = 2000;//(ms) : one second by default  (1000ms by default)
const FLICKER_DURATION = 100;//(ms) : duration for one flicker animation (100ms by default)
const colors = ["red", "blue", "green", "purple", "yellow"];

colors.forEach(color => {
    /*
     * Apply the flicker effect to all the '.neon-title' classed elements
    */
    let target = document.querySelectorAll(`.neon-${color}-title`);
    if (target.length > 50){
        target.forEach((element)=>{
            element.style.animation =  `neon-${color}-flicker-long ${FLICKER_DURATION*10}ms infinite`;
        });
    }else{
        // if there are A LOT of title in the document, we apply a infinite animation
        // (as the flicker function draw a random number, it can be a performance-killer if there are too many elements)
        // unfortunately, we lose the random "side-effect", the titles will flick 1 time every 
        target.forEach((element)=>{
            
            /* Apply the flicker animation on a HTML element
            * Every FLICKER_INTERVAL, the parameter element will flicker 0-2 times
            */
            let rngBegin = Math.random() + 0.5;
            setInterval(()=>{
                let rng = Math.round(Math.random()*2);
                for (let i=0; i<rng; i++)
                {
                    element.style.animation =  `neon-${color}-flicker ${FLICKER_DURATION}ms ${rng}`;
                    setTimeout(()=>{
                        element.style.animation = "";
                    }, FLICKER_DURATION*rng);
                }
            }, FLICKER_INTERVAL* rngBegin);
        });
    }
    
})

