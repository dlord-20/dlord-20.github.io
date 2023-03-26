import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';


export default function Image(props) {
    const image = props.img;


    return (
        <div className="image">
            <LazyLoadImage 
                alt={image.alt}
                height={image.height}
                width={image.width}
                src={require(`../images/${image.src}`)}
                effect="blur"
                visibleByDefault={image.src === `/${image.src}`}
        />
        </div>
    );
}

