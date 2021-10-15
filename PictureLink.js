import { Link } from "react-router-dom";

function PictureLunk(props) {
  return (
    <Link to={`html/${props.pageName}.html`}>
      <img
        srcSet={`${props.highResThumb} ${4 * props.width}w,
       ${props.lowResThumb}  ${props.width}w`}
        sizes={`(min-width: 481px) 25vw,
       100vw`}
        src={props.lowResThumb}
        alt={props.alt}
        width={props.width}
        height={props.height}
      />
    </Link>
  );
}

export default ThumbnailLink;
