import React from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import './newsArticle.css'

function NewsArticle({ heading, subtitle }) {
    return (
        <div className="newsArticle">
            <div className="newsArticleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="newsArticleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
}

export default NewsArticle
