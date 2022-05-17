import {Component} from "react";
import words from '../../resources/data/words.json';

class Row extends Component {

  constructor(props){
    super(props);
    this.state = {
      words,
      isEdit: false
    }
  }

  onEdit = () => {
    this.setState(({isEdit}) => ({
      isEdit:!isEdit
    }))

  }

  onCancel = () => {
    this.setState(({isEdit}) => ({
      isEdit:!isEdit
    }))

  }

  handleChange= (e) => {
    this.setState ({
      [e.target.name] : e.target.value
    })
  }

  render() {
    const {id, english, transcription, russian, tags, onDelete, onSave} = this.props;
    const {isEdit} = this.state;

    let classNames ='table__row';

    if(isEdit){
      classNames += ' row_edit';
    }

    return (

      <tr className={classNames}>
        {isEdit ?
          <>
          <td><input type="text" className="input_edit" name="id" defaultValue={id} onChange={this.handleChange}></input></td>
          <td><input type="text" className="input_edit" name="english" defaultValue={english} onChange={this.handleChange}></input></td>
          <td><input type="text" className="input_edit" name="transcription" defaultValue={transcription} onChange={this.handleChange}></input></td>
          <td><input type="text" className="input_edit" name="russian" defaultValue={russian} onChange={this.handleChange}></input></td>
          <td><input type="text" className="input_edit" name="tags" defaultValue={tags} onChange={this.handleChange}></input></td>
          <td>
              <i className="fas fa-check icon icon__save" onClick={onSave}> </i>
              <i className="fas fa-ban icon icon__cancel"
              onClick = {this.onCancel}
              ></i>
          </td>
          </>
          :
          <>
          <td>{id}</td>
          <td>{english}</td>
          <td>{transcription}</td>
          <td>{russian}</td>
          <td>{tags}</td>
          <td>
              <i className="fas fa-pen icon icon__edit" onClick = {this.onEdit}> </i>
              <i className="fas fa-trash icon icon__delete" onClick = {onDelete}></i>
          </td>
          </>
        }
      </tr>
    )
  }
}

export default Row;