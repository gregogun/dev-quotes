import React from 'react';
import './index.css';

const QuoteCard = ({ text, author, count, changeClicked }) => {

    const handleClick = () => changeClicked();

    return (
        <div className="container-box" onClick={handleClick}>
            <div className="text-box">
                <p className="container-box--text">{text}</p>
                <p className="container-box--cta-text">{author}</p>
            </div>
        </div>
    )

}

export default QuoteCard;