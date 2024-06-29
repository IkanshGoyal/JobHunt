import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
import './post.css';

const Post = ({ logo, name, date, title, content, link, likes, comments }) => {
    const formattedDate = new Date(date).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    return (
        <div className='post-container'>
            <div className='profile'>
                <img className='logo' src={logo} alt='profile' />
                <h2 className='name'>{name}</h2>
                <h4 className='date'>{formattedDate}</h4>
            </div>
            <div className='title'>{title}</div>
            <div className='link'><FontAwesomeIcon icon={faLink} /> {link}</div>
            <div className='description'>{content}</div>
            <span className='like'><FontAwesomeIcon icon={faHeart} /> {likes.length}</span>
            <span className='comment'><FontAwesomeIcon icon={faComment} /> {comments.length}</span>
        </div>
    );
};

export default Post;
