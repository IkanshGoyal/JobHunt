import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './post';
import './post.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import Loading from '../Common/Loading';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [profile, setProfile] = useState(null);
    const [user] = useAuthState(auth);

    useEffect(() => {
        const fetchProfileAndPosts = async () => {
            try {
                const profileResponse = await axios.get(`http://localhost:8080/api/company/profile/${user.uid}`);
                setProfile(profileResponse.data);

                const postsResponse = await axios.get('http://localhost:8080/api/posts');
                const filteredPosts = postsResponse.data.filter(post => post.author.id === profileResponse.data.id);
                setPosts(filteredPosts);

                setLoading(false);
            } catch (error) {
                console.error('Error fetching profile and posts:', error);
                setLoading(false);
            }
        };

        if (user) {
            fetchProfileAndPosts();
        }
    }, [user]);

    if (loading) {
        return <Loading />;
    }

    if (!profile) {
        return <div>No profile data available.</div>;
    }

    return (
        <div className='posts-container'>
            {posts.map((post) => (
                <Post
                    key={post.id}
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

export default Posts;
