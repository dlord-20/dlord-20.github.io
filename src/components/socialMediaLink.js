import { 
    Link
} from 'react-router-dom';

export default function SocialMediaLink(props) {
    const {socialMedia, article, link, icon} = props;
    const {title, coverImage, subtitle} = article
    const {alt, src} = coverImage;

    return (
        <div className='button-container'>
            <Link to={`/${link}`}  target='_blank'>
                <div className={`social-icon`}>
                    {socialMedia}
                    {icon}
                    {link}
                    {title}
                    {alt}
                </div>
            </Link>
        </div>
    );
}