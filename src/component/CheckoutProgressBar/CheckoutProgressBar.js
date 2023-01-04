/* eslint-disable no-magic-numbers */
/* eslint-disable @scandipwa/scandipwa-guidelines/jsx-no-conditional */
/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-dom-props */
import React from 'react';

import './CheckoutProgressBar.style';

/** @namespace ScandipwaApp/Component/CheckoutProgressBar */
export class CheckoutProgressBar extends React.PureComponent {
    render() {
        const { stepMap, checkoutStep } = this.props;
        const currentStep = Object.keys(stepMap).indexOf(checkoutStep);
        const allSteps = Object.values(stepMap).slice(0, -1);
        const line = 70 / Object.keys(allSteps).length;

        return (
            <div className="progress--bar">
                <div className="bar" />
                <div className="completed--bar" style={ { width: `${line * (currentStep + 1)}%` } } />
                { allSteps.map((item, index) => (
                    <div className="content-container" key={ item.url }>
                            <div className="bubble">
                                <div className={ `${currentStep >= index ? 'active-step-index step-index' : 'step-index'}` }>
                                    { currentStep > index ? <>&#10003;</> : index + 1 }
                                    { ' ' }
                                </div>
                            </div>
                            <div className="step-name"><p>{ item.url.slice(1,) }</p></div>
                    </div>
                )) }
            </div>
        );
    }
}
export default CheckoutProgressBar;
