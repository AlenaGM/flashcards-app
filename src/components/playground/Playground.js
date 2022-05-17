import './playground.scss';
import Card from '../card/Card';
import words from '../../resources/data/words.json';
import { useState } from 'react';

const Playground = () => {

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
                <Card key={id} {...wordProps}/>
        )
    })

    return (
        <>
            <div className="app__playground playground">
                <div><i className="fas fa-arrow-left" onClick = {prevSlide}></i></div>
                {cards[slideIndex-1]}
                <div><i className="fas fa-arrow-right" onClick = {nextSlide}></i></div>
            </div>
        </>
    )
}

export default Playground;


