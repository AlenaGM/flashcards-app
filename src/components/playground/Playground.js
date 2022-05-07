import './playground.scss';
import Card from '../card/Card';
import words from '../../resources/data/words.json';

const Playground = () => {

    return (
        <>
            <div className="app__playground playground">
            {
                words.map((word) =>
                    <div className="playground__card card" key={word.id}>
                            <Card
                                english={word.english}
                                transcription={word.transcription}
                                russian={word.russian}/>
                    </div>
                )
            }
            </div>
        </>
    )
}

export default Playground;