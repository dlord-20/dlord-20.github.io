import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    Link
} from 'react-router-dom';
import { 
    faFacebookF,
    faTwitter,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons' ;

export default function SocialMediaItem(props) {
    const {socialMedia, article} = props;
    const {title} = article
    var customIcon;

    const getLink = () => {
        var customLink = "";
        const socialType = socialMedia.toLowerCase();
        const currentPage = window.location.href;

        switch (socialType) {
            case "facebook":
                customLink = `http://www.facebook.com/sharer/sharer.php?u=${currentPage}`;
                customIcon = faFacebookF;
                break;
            case "twitter": 
                customLink = `https://twitter.com/intent/tweet?url=${currentPage}&text=${title}`;
                customIcon = faTwitter;
                break;
            case "linkedin":
                customLink = `https://www.linkedin.com/shareArticle?mini=true&url=${currentPage}`;
                customIcon = faLinkedin;
                break;
            default:
                break;
        }

        return customLink;
    }

    return (
        <div className='button-container'>
            <Link to={getLink()}  target='_blank'>
                <div className='social-icon'>
                    <FontAwesomeIcon icon={customIcon}/>
                </div>
            </Link>
        </div>
    );
}