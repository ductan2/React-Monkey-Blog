import React from 'react';
import PropTypes from 'prop-types';

const Toggle = (props) => {
    const { on, onClick=()=>{}, ...rest } = props;
    console.log(on)
    return (
        <label>
            <input
                type="checkbox"
                checked={on}
                className="hidden-input"
                onChange={() => {}}
                onClick={onClick}
            />
            <div
                className={`w-[100px] inline-block h-[45px] cursor-pointer transition-all ${
                    !on ? 'bg-gray-300' : 'bg-green-500'
                } rounded-3xl `}
                {...rest}
            >
                <span
                    className={`bg-white transition-all rounded-full inline-block ml-2 translate-y-[4px] w-[36px] h-[36px] ${
                        !on ? 'translate-x-0' : 'translate-x-[50px]'
                    }`}
                ></span>
            </div>
        </label>
    );
};

Toggle.propTypes = {
    on: PropTypes.bool,
    onClick: PropTypes.func
};

export default Toggle;
