export const fadeIn = (direction, delay) => {
    return {
        hidden : {
            y : direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
            opacity : 0,
            x : direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
        },
        show : {
            y : 0,
            x : 0,
            opacity : 1,
            transition : {
                type : 'tween',
                duration : 0.5,
                delay : delay,
                ease : [0.25 , 0.25, 0.25 , 0.75],
            }
        }
    }
}