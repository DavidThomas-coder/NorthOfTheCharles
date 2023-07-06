import React, { useState, useEffect } from 'react';
import { Link } from'react-router-dom';
import PostTile from './PostTile';

const Homepage = (props) => {
    const [homeShow, setHomeShow] = useState({
        id: "",
        posts: [],
    });

    const fetchPosts = async () => {
        try {
            const response = await fetch("/api/v1/posts");
            if (response.ok) {
                const data = await response.json();
                setHomeShow((prevState) => ({ ...prevState, posts: data.posts }));
            } else {
                console.error("Failed to fetch posts:", response.statusText);
            }
            } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };      
    
    const postList =
    homeShow.posts.length > 0 ? (
        homeShow.posts.map((post) => (
            <PostTile
            key={post.id}
            post={post}
            user={users[post.userId]} // Pass the corresponding user data as props
            />
        ))
        ) : (
        <p>No posts yet!</p>
    );  

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <div>
            <div className="cell small-12 grid-x align-middle">
                <div className="cell small-6">
                    <img src="https://i.imgur.com/iEYaJFB.png" alt="river image" />
                </div>
                <div className="cell small-6">
                    <img src="https://i.imgur.com/lCJqaIy.png" alt="notc info" />
                </div>
            </div>

            <div className='developed-by'>
                <p><Link to="/developers">Developed</Link> by David Thomas, Solomon Montagno, and Todd Garrison</p>
            </div>
            <ul>{postList}</ul>
        </div>
    )
}

export default Homepage;