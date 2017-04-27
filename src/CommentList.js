import React, {Component} from 'react'
import Comment from './Comment'

export default class CommentList extends Component {
    state = {
        commentOpen: false
    }

    render() {
        const {comments} = this.props
        if(!comments){
            return (
                <div>
                    No Coments
                </div>
            )
        }
        const comment = comments.map((comment)=> <div key={comment.id}><Comment comment={comment}/></div>)
        return (
            <div>
                <div className="toggleComents" onClick={this.toggleOpenComment}>{this.state.commentOpen ? "Close Coments" : "Open Coments"}</div>
                {this.state.commentOpen ? comment: null}
            </div>
        )
    }

    toggleOpenComment = (ev) => {
        this.setState({
            commentOpen: !this.state.commentOpen
        })
    }

}