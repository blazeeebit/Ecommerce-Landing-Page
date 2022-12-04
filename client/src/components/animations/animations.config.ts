type AnimationsProps = {
    [key: string]: {}
}

const ANIMATIONS: AnimationsProps = {
    underLine: {
        initial: {
            width: 0
        },
        animate: {
            width: "100%"
        },
        exit: {
            width: 0
        },
        transition: {
            duration: 0.5
        }
    },
    openContent: {
        initial: {
            height: 0
        },
        animate: {
            height: 'auto',
            transition: {
                height: {
                    duration: 0.4
                }
            }
        },
        exit: {
            height: 0,
            transition: {
                height: {
                    duration: 0.4
                }
            }
        }
    },
    rotateIcon: {
        initial: {
            rotate: 0
        },
        animate: {
            rotate: 180
        },
        transition: {
            rotate: 0
        }
    }
}

export default ANIMATIONS