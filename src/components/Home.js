import React from 'react'

import { Link } from 'react-router-dom'

function Home(props) {
    return (
        <div>
            <Link to="/nasaphoto">Link To NasaPhoto</Link>
        </div>
    )
}

Home.propTypes = {

}

export default Home

