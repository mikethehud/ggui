const baseSize = .25

const sizes = {
    micro:   `${baseSize*1}rem`,
    tiny:    `${baseSize*2}rem`,
    small:   `${baseSize*3}rem`,
    medium:  `${baseSize*5}rem`,
    large:   `${baseSize*8}rem`,
    xlarge:  `${baseSize*13}rem`,
    huge:    `${baseSize*21}rem`,
    massive: `${baseSize*34}rem`,
    immense: `${baseSize*55}rem`,
}

const colours = {
    bondi: {
        main: '#016FB9',
        dark: '#013D65',
        light: '#4696CC'
    },
    sand: {
        main: '#EAD2AC',
        dark: '#C0AC8D',
        light: '#F5EAD9'
    },
    jade: {
        main: '#00A676',
        dark: '#007956',
        light: '#45BE9B'
    },
    tomato: {
        main: '#FF6F59',
        dark: '#A34739',
        light: '#FF7C68'
    },
    space: {
        main: '#1D1D21',
        dark: '#313135',
        light: '#080809'
    },
    light: {
        main: '#FFF8F2',
        dark: '#FFF5EC',
        light: '#FFFFFF'
    }
}

const baseSpeed = .1;

const transitions = {
    faster: `${baseSpeed*1}s ease-in`,
    fast:   `${baseSpeed*2}s ease-in`,
    normal: `${baseSpeed*3}s ease-in`,
    slow:   `${baseSpeed*5}s ease-in`,
    slower: `${baseSpeed*8}s ease-in`,
}

export {
    sizes,
    colours,
    transitions
}