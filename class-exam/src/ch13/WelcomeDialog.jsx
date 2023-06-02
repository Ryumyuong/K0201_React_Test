import React from 'react';
import FancyBorder from './FancyBorder';

const WelcomeDialog = (props) => {
    return (
        <div>
            <FancyBorder color="red">
                <h1 className='Dialog-title'>
                    어서오세요
                </h1>
                <p className='Dialog-message'>
                    우리 사이트에 방문하신 것을 환영합니다.
                </p>
            </FancyBorder>
        </div>
    );
};

export default WelcomeDialog;