import SocialMediaItem from "./socialMediaItem";


export default function GetSocialMediaIcons(props) {
    const {article} = props;
    const medias = ['facebook', 'twitter', 'linkedin'];
    const icons = [];

    medias.forEach(media => {
        icons.push(<SocialMediaItem
            socialMedia={media}
            article={article}
        />)
    });


    return (
        <div className="social-media-container">
            {icons}
        </div>
    );
}