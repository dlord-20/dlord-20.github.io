import { Link } from 'react-router-dom';
import Button from './button';
import Image from './image';

export default function BlogBox() {


    return (
        <div className='blog-box-container'>
            <div>
                <Image img={{
                    alt: "test",
                    height: "100%",
                    width: "100%",
                    src: "Derek-Lord-Smiling-Small.jpg",
                }}/>
                <h5>Subtitle here</h5>
                <h3>Blog title</h3>
                <p>Preview Text</p>
                <Button text="button" type="b" link="link"/>
            </div>
        </div>
    );
}