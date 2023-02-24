
const openPage = (url) => {
    if (url=='') {
        return ;
    }
    window.open(url, '_blank');
};

const Buttonbtn = (props) => {
    return (
        <button
            type={props.type ? props.type : 'button'}
            className= {props.class}
            onClick={ () => openPage(props.url ? props.url : '')}
        >
            {props.icon ?
                <i className="pr-1">
                    {props.icon}
                </i>
                : ''
            }
            {props.children}
        </button>
    )
}
export default Buttonbtn;

