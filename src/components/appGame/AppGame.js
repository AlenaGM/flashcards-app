import { useState } from 'react';
import Card from '../card/Card';
import './appGame.scss';


const AppGame = ({words}) => {

    const [slideIndex, setSlideIndex] = useState(1);
    const [wordsLearned, setWordsLearned] = useState(0);

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

    const addLearned = (id) => {
        setWordsLearned(wordsLearned + 1);
    }


    const cards = words.map((word) => {
        const {id, ...wordProps} = word;
        return (
                <Card
                    key={id}
                    {...wordProps}
                    onCheck={addLearned}
                    />
        )
    })

    return (
        <div className="app__game game">
            <div><i className="fas fa-arrow-left icon icon__arrow" onClick = {prevSlide}></i></div>
            <div>{cards[slideIndex-1]}
                <div className="game_counter">Вы выучили {wordsLearned}/{words.length} слов</div>
            </div>
            <div><i className="fas fa-arrow-right icon icon__arrow" onClick = {nextSlide}></i></div>
        </div>
    )
}

export default AppGame;