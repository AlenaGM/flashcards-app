import {Component} from "react";
class Row extends Component {

  constructor(props){
    super(props);
    this.state = {
      id: props.id,
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

  handleChange = (e) => {
    this.setState ({
      [e.target.name] : e.target.value
    })
  }

  onSave = () => {
    this.setState(({isEdit}) => ({
      isEdit:!isEdit,
      id : this.state.id,
      english : this.state.english,
      transcription : this.state.transcription,
      russian: this.state.russian,
      tags: this.state.tags,
    }))
  }

  onCancel = () => {
    this.setState(({isEdit}) => ({
      isEdit:!isEdit,
      id:this.props.id,
      english:this.props.english,
      transcription:this.props.transcription,
      russian:this.props.russian,
      tags:this.props.tags
    }))
  }

  render() {
    const {onDelete} = this.props;
    const {id, english, transcription, russian, tags, isEdit} = this.state;

    let classNames ='table__row';

    if(isEdit){
      classNames += ' row_edit';
    }

    return (
      <tr className={classNames}>
        {isEdit ?
          <>
            <td><input type="text" className="input_edit" name="id" defaultValue={id} onChange={this.handleChange}/></td>
            <td><input type="text" className="input_edit" name="english" defaultValue={english} onChange={this.handleChange}/></td>
            <td><input type="text" className="input_edit" name="transcription" defaultValue={transcription} onChange={this.handleChange}/></td>
            <td><input type="text" className="input_edit" name="russian" defaultValue={russian} onChange={this.handleChange}/></td>
            <td><input type="text" className="input_edit" name="tags" defaultValue={tags} onChange={this.handleChange}/></td>
            <td>
                <i className="fas fa-check icon icon__save" onClick={this.onSave}> </i>
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