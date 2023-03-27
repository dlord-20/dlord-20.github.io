import SocialMediaItem from "./socialMediaItem";


export default function GetSocialMediaIcons(props) {
    const {article} = props;
    const medias = ['facebook', 'twitter', 'linkedin'];
    const icons = [];

    medias.forEach((media, i) => {
        icons.push(<SocialMediaItem
            socialMedia={media}
            article={article}
            key={i}
        />)
    });


    return (
        <div className="social-media-container">
            {icons}
        </div>
    );
}