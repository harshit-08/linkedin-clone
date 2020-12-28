import React from 'react'
import './widgets.css'
import InfoIcon from '@material-ui/icons/Info';

import NewsArticle from './NewsArticle';
function Widgets() {

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>Linkedin News</h2>
                <InfoIcon />
            </div>
            <NewsArticle heading="Corona Updates"
                subtitle="Cases are going down"
            />
            <NewsArticle heading="Tesla hits new heights"
                subtitle="Elon musk made a new announcement about flying cars"
            />
            <NewsArticle heading="Bitcoin breaks $22"
                subtitle="Crypto currency is a new big thing"
            />
            <NewsArticle heading="Is redux really good?"
                subtitle="Facebook team new meeting"
            />
            <NewsArticle heading="Microsoft"
                subtitle="Company is ready to launch new product"
            />
        </div>



    )
}

export default Widgets
