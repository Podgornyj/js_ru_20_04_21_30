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

    handleChange = type => ev =>{
        let value = ev.target.value
        if(value.length > 20) return
        this.setState({
            [type]: value
        })
    }
}

export default AddCommentForm