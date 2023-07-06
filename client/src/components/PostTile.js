import React from "react";

const PostTile = (props) => {
    const { post, user } = props;

    return (
        <div className="post-tile">
            <div className="post-box">
                {user && (
                <div className="user-info">
                    <p>{user.firstName}</p>
                </div>
                )}
                <p className="post-media">{post.mediaURL}</p>
                <p className="post-body">{post.postBody}</p>
            </div>
        </div>
        );
};

export default PostTile;