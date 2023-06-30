import React from 'react';
import { Link } from'react-router-dom';

const Homepage = (props) => {
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
        </div>
    )
}

export default Homepage;