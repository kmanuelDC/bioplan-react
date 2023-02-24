
const Linkbtn = (props) => {

    return (
        <a
            type={props.type ? props.type : ''}
            className= {props.class}
            href={props.url ? props.url : '#'}
            target="_blank"
        >
            {props.icon ?
                <i className="pr-1">
                    {props.icon}
                </i>
                : ''
            }
            {props.children}
        </a>
    )
}
export default Linkbtn;