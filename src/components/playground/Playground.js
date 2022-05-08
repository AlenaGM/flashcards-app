import './playground.scss';
import Card from '../card/Card';
import words from '../../resources/data/words.json';

const Playground = () => {

    return (
        <>
            <div className="app__playground playground">
            {
                words.map((word) => {
                    const {id, ...wordProps} =word;
                    return (
                            <Card key={id} {...wordProps}/>
                    )
                })
            }
            </div>
        </>
    )
}

export default Playground;
