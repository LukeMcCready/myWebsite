function ImageFigure(props){
  return (
    <figure>
    <img src={props.src}
         alt={props.alt} 
         width = {props.width}
         height = {props.height}> />
    <figcaption>{props.caption}</figcaption>
</figure>

  )
}
export default ImageFigure