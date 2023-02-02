import { Link } from 'react-router-dom';

export default function Button() {


    return (
        <Link to={`/test`} >
            <div className="button">
                <p>Testing 123</p>
            </div>
        </Link>
    );
}