import BlogCategories from './blogCategories';
import Button from './button';
import Image from './image';

export default function BlogBox(props) {
    const {subtitle, title, previewText, categories, coverImage, date} = props;
    const displayDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
    const link = title.replace(/ /g,'-');

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
                        link={'blog/' + link.toLowerCase()}
                    />
                    <p><span className='date'><i>Last Updated:<br/>{displayDate}</i></span></p>
                </div>
            </div>
        </div>
    );
}