import { useState } from 'react';
import Card from '../card/Card';
import './appGame.scss';


const AppGame = ({words}) => {

    const [slideIndex, setSlideIndex] = useState(1);
    const [wordsLearned, setWordsLearned] = useState([]);
    const [learnedNumber, setLearnedNumber] = useState(0);

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
        const checkedWords = [...wordsLearned];
        checkedWords.push(id);
        let result = [];
        for (let newCheck of checkedWords) {
            if (!result.includes(newCheck)) {
            result.push(newCheck);
            }
        }
        setWordsLearned(result);
        setLearnedNumber(result.length);
    }

    function declOfNum(n, text_arr) {
        n = Math.abs(n) % 100
        var n1 = n % 10
        if (n > 10 && n < 20) {
            return text_arr[2]
        }
        if (n1 > 1 && n1 < 5) {
            return text_arr[1]
        }
        if (n1 === 1) {
            return text_arr[0]
        }
        return text_arr[2]
    }


    const cards = words.map((word) => {
        const {id, ...wordProps} = word;
        return (
            <Card
                key={id}
                id={id}
                {...wordProps}
                addLearned={addLearned}/>
        )
    })

    return (
        <div className="app__game game">
            <div><i className="fas fa-arrow-left icon icon__arrow" onClick = {prevSlide}></i></div>
            <div>{cards[slideIndex-1]}
                <div className="game_counter">
                    Вы выучили {learnedNumber} {declOfNum(learnedNumber, ['слово', 'слова', 'слов'])} из {words.length}
                </div>
            </div>
            <div><i className="fas fa-arrow-right icon icon__arrow" onClick = {nextSlide}></i></div>
        </div>
    )
}

export default AppGame;