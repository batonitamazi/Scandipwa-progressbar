import CheckoutProgressBar from 'Component/CheckoutProgressBar/CheckoutProgressBar';
import ContentWrapper from 'Component/ContentWrapper';
import {
    Checkout as CheckoutMain,
} from 'SourceRoute/Checkout/Checkout.component';

/** @namespace ScandipwaApp/Route/Checkout/Component */
export class CheckoutComponent extends CheckoutMain {
    render() {
        const { checkoutStep } = this.props;

        return (
            <main block="Checkout">
                <CheckoutProgressBar checkoutStep={ checkoutStep } stepMap={ this.stepMap } />
                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                >
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>

        );
    }
}

export default CheckoutComponent;
