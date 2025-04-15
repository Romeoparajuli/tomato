import React from 'react'
import './Header.css'
export const Header = () => {
    return (
        <div className='header'>
            <div className="header-contents">
                <h2>
                    Order your <br />
                    <span>favourite food here</span>
                </h2>
                <p>Craving something delicious?</p>
                <p>Discover a world of bold flavors and classic favorites, all crafted with fresh ingredients, passion, and a dash of love — because great food should impress, satisfy, and feel like home.</p>
                <button>View Menu</button>

            </div>
        </div>
    )
}
export default Header