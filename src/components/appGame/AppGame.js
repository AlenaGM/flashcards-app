import { useState } from 'react';

import Card from '../card/Card';


import './appGame.scss';


const AppGame = ({words}) => {

    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = () => {
        if (slideIndex !== words.length) {
        setSlideIndex(slideIndex + 1);
        } else if (slideIndex === words.length) {
        setSlideIndex(1);
        }
    };

    const prevSlide = () => {
        if (slideIndex !== 1) {
        setSlideIndex(slideIndex - 1);
        } else if (slideIndex === 1) {
        setSlideIndex(words.length);
        }
    };

    const cards = words.map((word) => {
        const {id, ...wordProps} =word;
        return (
                <Card
                    key={id}
                    {...wordProps}/>
        )
    })

    return (
        <div className="app__game game">
            <div><i className="fas fa-arrow-left icon icon__arrow" onClick = {prevSlide}></i></div>
            {cards[slideIndex-1]}
            <div><i className="fas fa-arrow-right icon icon__arrow" onClick = {nextSlide}></i></div>
        </div>
    )
}

export default AppGame;