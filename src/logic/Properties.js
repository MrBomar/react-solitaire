const cardHeight = (orientation) => {
    if(orientation === 'portrait') {
        let width = window.innerWidth;
        let cardHeight = (((width * .92) - 50) / 7) / .64285714285714285714285714285714;
        return cardHeight;
    } else {
        let height = window.innerHeight;
        let cardHeight = height * .2044414437;
        return cardHeight;
    }
}

const cardWidth = (orientation) => {
    if(orientation === 'portrait') {
        let width = window.innerWidth;
        let cardWidth = ((width * .92) - 50) / 7;
        return cardWidth;
    } else {
        let height = window.innerHeight;
        let cardWidth = height * 13.14285714;
        return cardWidth;
    }
}

export {cardHeight, cardWidth};