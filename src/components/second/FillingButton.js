export default function FillingButton(props) {

    // Destructure props.
    const {link} = props;

    return(
        <div className="filling-button"
            >
            <div className="button-flex">
                <a href={link} className="filling-button-text">
                    {props.text}
                </a>
            </div>
        </div>
    );
} 

