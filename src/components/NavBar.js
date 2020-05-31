import React from 'react'

import { Link } from 'react-router-dom'

function NavBar(props) {
    return (
        <div className="navbar">
            <Link className="link" to="/">Take me home</Link>
        </div>
    )
}

NavBar.propTypes = {

}

export default NavBar

