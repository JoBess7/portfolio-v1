import { useEffect } from "react";
import { useState } from "react/cjs/react.development";


export default function Project(props) {

    const {last, index} = props;
    const constrainX = 15;
    const constrainY = 15;
    
    const [mouseIsOut, setMouseIsOut] = useState(false);
    const [renderedElement, setRenderedElement] = useState(null);
    const [transform, setTransform] = useState(
        {
            rotateX: 0,
            rotateY: 0
        }
    );

    useEffect(() => {
        setRenderedElement(document.getElementsByClassName("square")[index]);
    }, [index]);

    function rotateSquare(evt) {
        let elementRect = renderedElement.getBoundingClientRect();

        let squareWidth = elementRect.width;
        let squareHeight = elementRect.height;

        let squareCenterX = squareWidth/2;
        let squareCenterY = squareHeight/2;

        let x = evt.nativeEvent.offsetX;
        let y = evt.nativeEvent.offsetY;

        let calcX = -(y - squareCenterX - (squareHeight/2)) / constrainX;
        let calcY = (x - squareCenterY - (squareWidth/2)) / constrainY;
        
        setTransform({
            rotateX: calcX,
            rotateY: calcY
        })
    }

    return (
        <div 
            className={`square ${mouseIsOut ? "toInitialState" : ""}`}
            style={
                last 
                    ? 
                    { marginBottom: '100px',
                      transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`} 
                
                    : {transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`}
            }

            onMouseMove={(evt) => {
                rotateSquare(evt);
            }}

            onMouseEnter={() => {
                setMouseIsOut(false);
            }}

            onMouseOut={() => {
                setMouseIsOut(true);
            }}
            >
            aasdasdd
        </div>
    );
}