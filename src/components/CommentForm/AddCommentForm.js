import React, {Component} from 'react'
import './style.css'

class AddCommentForm extends Component {

    state={
        comment: '',
        user: ''
    }

    render(){
        //отлично, только в классах не принято cammelCase использовать
        return(
            <form>
                Comment:<br/>
                <input type="text" className={this.state.comment && this.state.comment.length < 10? 'notValid':''} value={this.state.comment} onChange={this.handleChange('comment')} /><br/>
                User:<br/>
                <input type="text" className={this.state.user && this.state.user.length < 10? 'notValid':''} value={this.state.user} onChange={this.handleChange('user')} />
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
