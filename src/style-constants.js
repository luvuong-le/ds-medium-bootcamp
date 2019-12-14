export const unit = value => value * 16 + 'px'

export const styleConstants = {
    paddings: {
        xsmall: unit(0.25),
        small: unit(0.5), // between cards
        medium: unit(0.75), // card content padding
        large: unit(1.5), // metween rails
    },
    colors: {
        black: '#000',
        grey: 'grey',
        green: 'green',
        violet: '#b392b0',
        yellow: '#ecedbe',        
    },
    borderRadiuses: {
        default: unit(0.125),
    },
    boxShadows: {
        default: '0 0 0 1px rgba(0,0,0,.15),0 2px 3px rgba(0,0,0,.2)', // cards
    },
    fontNames: {
        default: 'Georgia',
    },
    fontSizes: {
        t025: unit(0.25),
        t050: unit(0.50),
        t075: unit(0.75),
        t080: unit(0.80),
        t100: unit(1.00),
        
    },
    fontWeights: {
        light: 400,
        medium: 500,
        bold: 600,
    }
}
