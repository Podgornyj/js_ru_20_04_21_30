import React, {Component} from 'react'

class AddCommentForm extends Component {

    state={
        comment: '',
        user: ''
    }

    render(){
        return(
            <form>
                Comment:<br/>
                <input type="text" value={this.state.comment} onChange={this.handleChange('comment')} /><br/>
                User:<br/>
                <input type="text" value={this.state.user} onChange={this.handleChange('user')} />
            </form>
        )
    }

    handleChange = (type, ...a) =>{
        console.log(type);
        console.log(a);
    }
}

export default AddCommentForm