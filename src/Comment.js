import React, {Component} from 'react'

//Это можно сделать Functional Component, по возможности используй их
export default function Comment ({comment}){

    return (
            <div>
                <div className="commentAuthor">
                    <b>{comment.user}</b>
                </div>
                <div className="commentText">
                    {comment.text}
                </div>
                    <hr/>
            </div>

            )
}
