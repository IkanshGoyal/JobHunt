import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from '../Posts/post';
import '../Posts/post.css';

const ShowPosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/posts');
                setPosts(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching posts:', error);
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='posts-container-main'>
            {posts.map((post) => (
                <Post
                    logo={post.author.profilePicture}
                    name={post.author.name}
                    date={post.date}
                    title={post.title}
                    content={post.description}
                    link={post.link}
                    likes={post.likes}
                    comments={post.comments}
                />
            ))}
        </div>
    );
};

export default ShowPosts;
