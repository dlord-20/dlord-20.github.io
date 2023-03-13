import Button from './button';
import Image from './image';

export default function BlogBox() {


    return (
        <div className='blog-box-container'>
            
            <div className='blog-box-image'>
                <Image img={{
                    alt: "test",
                    height: "100%",
                    width: "100%",
                    src: "Derek-Lord-Smiling-Small.jpg",
                }}/>
            </div>
            <div className='blog-box-info'>
                {/* Make this it's own component */}
                <div className='blog-box-categories'>
                    <Button text="Coding" type="b" link="link"/>
                    <Button text="Finance" type="b" link="link"/>
                    <Button text="AI" type="b" link="link"/>
                </div>
                <div className='blog-box-text'>
                    <h5>Subtitle here</h5>
                    <h3>Blog title</h3>
                    <p><i>"Preview Text..."</i></p>
                </div>
                <div className='blog-box-button'>
                    <Button text="button" type="b" link="link"/>
                </div>
            </div>
        </div>
    );
}