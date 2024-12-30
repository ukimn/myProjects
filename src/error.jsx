import { Link } from 'react-router-dom'
import './App.css'


const Error = () => {
    return(
        <>
            <h1>Sorry we can not find this page</h1>
            <Link to={"/"}>
                <button className='button'>Go Back!</button>
            </Link>
        </>
    )
}


export default Error;