import {Component} from "react";

class Row extends Component {

  constructor(props){
    super(props);
    this.state = {
      english : props.english,
      transcription : props.transcription,
      russian: props.russian,
      tags: props.tags,
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

//  onSave = () => {
//    let english = this.props.english;
//      if(this.state.english){
//        english = this.state.english;
//      }
//    let transcription = this.props.transcription;
//      if(this.state.transcription){
//        transcription = this.state.transcription;
//      }
//    let russian = this.props.russian;
//      if(this.state.russian){
//        russian = this.state.russian;
//      }
//    let tags = this.props.tags;
//      if(this.state.tags){
//        tags = this.state.tags;
//      }
//
//    const updatedWord = {
//      id: this.props.id,
//      english: english,
//      transcription: transcription,
//      russian: russian,
//      tags: tags
//    }
//
//    console.log(updatedWord);
//  }

  handleChange = (e) => {
    this.setState ({
      [e.target.name] : e.target.value
    })
  }

  render() {
    const {id} = this.props;
    const {english, transcription, russian, tags, isEdit, onDelete, onSave} = this.state;


    let classNames ='table__row';

    if(isEdit){
      classNames += ' row_edit';
    }

    return (

      <tr className={classNames}>
        {isEdit ?
          <>
            <td>{id}</td>
            <td><input type="text" className="input_edit" name="english" defaultValue={english} onChange={this.handleChange}/></td>
            <td><input type="text" className="input_edit" name="transcription" defaultValue={transcription} onChange={this.handleChange}/></td>
            <td><input type="text" className="input_edit" name="russian" defaultValue={russian} onChange={this.handleChange}/></td>
            <td><input type="text" className="input_edit" name="tags" defaultValue={tags} onChange={this.handleChange}/></td>
            <td>
                <i className="fas fa-check icon icon__save" onClick={onSave}> </i>
                <i className="fas fa-ban icon icon__cancel" onClick = {this.onCancel}></i>
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