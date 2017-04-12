import React from 'react';

function Button(props) {
    return (
        <button className={props.className} onClick={props.onClick}>
            {
                props.value
            }

        </button>
    );
}
Button.propTypes ={
    className: React.PropTypes.string

};
export default Button;