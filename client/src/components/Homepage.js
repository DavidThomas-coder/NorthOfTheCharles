import React from 'react';
import { Link } from'react-router-dom';

const Homepage = (props) => {
    return (
        <div>
            <h1>North Of The Charles</h1>
            <h4>Post Your Northern Views</h4>

            <div className='developed-by'>
                <p><Link to="/developers">Developed</Link> by David Thomas, Solomon Montagno, and Todd Garrison</p>
            </div>
        </div>
    )
}

export default Homepage;