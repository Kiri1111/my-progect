import React from 'react';
import {CommentType} from "../App";
import SuperButton from "./SuperButton";

type CommentsPropsType = {
    comments: CommentType[]
    isLoading: boolean
    delComment: (idComment: number) => void
}
export const Comments = (props: CommentsPropsType) => {

    return (
        <div>
            <h1>comments</h1>
            {props.isLoading
                ? <h2>'one moment please.....'</h2>
                : <div>{props.comments.map(el => {
                        const delOneComment = () => {
                            props.delComment(el.id)
                        }
                        return (
                            <div key={el.id}>
                            <span>
                                {el.id}
                            </span>
                                <span>
                                {el.name}
                            </span>
                                <SuperButton callBack={delOneComment} title={'del'} isLoading={props.isLoading}/>
                            </div>
                        )
                    }
                )}
                </div>}


        </div>
    );
};

