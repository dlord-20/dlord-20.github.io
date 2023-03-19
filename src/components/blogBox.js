import BlogCategories from './blogCategories';
import Button from './button';
import Image from './image';

export default function BlogBox(props) {
    const subtitle = props.subtitle;
    const title = props.title;
    const previewText = props.previewText;
    const categories = props.categories;
    const coverImage = props.image;
    const date = props.date;
    const displayDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;

    return (
        <div className='blog-box-container'>
            <div className='blog-box-image'>
                <Image img={{
                    alt: coverImage.src,
                    height: "100%",
                    width: "100%",
                    src: coverImage.src,
                }}/>
            </div>
            <div className='blog-box-info'>
                <div className='blog-box-categories-text-container'>
                    <div className='blog-box-categories'>
                        <BlogCategories categories={categories}/>
                    </div>
                    <div className='blog-box-text'>
                        <h5>{subtitle}</h5>
                        <h3>{title}</h3>
                        <p><i>"{previewText}"</i></p>
                    </div>
                </div>
                <div className='blog-box-button'>
                    {/* CREATE THIRD BUTTON TYPE -> c */}
                    <Button 
                        text="Keep Reading" 
                        type="b" 
                        link={'blog/' + title.toLowerCase()}
                    />
                    <p><span className='date'><i>Last Updated:<br/>{displayDate}</i></span></p>
                </div>
            </div>
        </div>
    );
}