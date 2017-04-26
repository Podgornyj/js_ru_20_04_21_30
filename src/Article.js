import React, {Component} from 'react'
import CommentList from './CommentList'

export default class Article extends Component {
/*
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }
*/
    state = {
        isOpen: false,
        //лучше внести этот стейт в CommentList, иначе компонент выходит очень прегруженным
        commentOpen: false
    }

    render() {
        const {article} = this.props
        return (
            <section>
                <h2 onClick={this.toggleOpen}>
                    {article.title}
                </h2>
                {this.getBody()}
                <div className="toggleComents" onClick={this.toggleOpenComment}>{this.state.commentOpen ? "Close Coments" : "Open Coments"}</div>
                {this.state.commentOpen ? <CommentList comments={article.comments}/>: null}
            </section>
        )
    }
            //{this.getComment(article.comments)}

    getBody() {
        return this.state.isOpen && <div>{this.props.article.text}</div>
    }
    // getComment(comment) {
    //     return this.state.commentOpen && <CommentList comments={comment}/>
    // }

    toggleOpen = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }
    toggleOpenComment = (ev) => {
        this.setState({
            commentOpen: !this.state.commentOpen
        })
    }
}
