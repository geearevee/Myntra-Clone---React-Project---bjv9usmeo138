import React,{useContext} from 'react'
import "./payment.css"
import { productContext } from '../App';
import { useNavigate } from 'react-router-dom';
const Payment = () => {
  const navigate = useNavigate();
  const {setCart,setCartvalue} = useContext(productContext);
  function handleSubmit(e){
     e.preventDefault();
     navigate("/");
     alert('Your order has been placed successfully');
      setCartvalue(0);
      setCart([]);


  }
  return (
<div><h1>Choose Payment</h1>
<p id="choosen-paymenttype">Credit Card</p>
<ul className="payment-types">
  <li className="paymenttype pp unselected-left">
    <div className="box">
    <header>
      <div className="card" id="pp-card">
        <div className="flipper">
          <div className="front">
            <div className="shine"></div>
            <div className="shadow"></div>
            <div className="card-bg">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/513985/pp-front-bg.png" />
            </div>
          </div>
        </div>
      </div>
    </header>
    <form>
      <div className="form-content">
        <p><strong>About</strong></p>
 <p>This is a basic concept for a payment, checkout process. The user can select between the different payment types, each type has a seperate form to fill in the required data for the transaction. What I tried to provide:</p> 
      <ul>
        <li>A quick and easy way to fill the required form fields.</li>
        <li>Mobile friendly keyboard display</li>
        <li>Disabling auto-correction and spellcheck for names</li>
        <li>Avoid dropdown fields for a better UX.</li>
      </ul>     
      </div>
    </form>
    </div>
  </li>
  <li className="paymenttype selected cc">
    <div className="box">
    <header>
      <div className="card" id="cc-card">
        <div className="flipper">
          <div className="front">
            <div className="shine"></div>
            <div className="shadow"></div>
            <div className="card-bg">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/513985/cc-front-bg.png" />
            </div>
            <div className="card-content">
              <div className="credit-card-type"></div>
              <div className="card-number">
                <span>1234 1234 1234 1234</span>
                <span>1234 1234 1234 1234</span>
              </div>
              <div className="card-holder">
                <em>Card holder</em>
                <span>Your Name</span>
                <span>Your Name</span>
              </div>
              <div className="validuntil">
                <em>Expire</em>
                <div className="e-month">
                    <span>
                      MM
                    </span>
                    <span>
                      MM
                    </span>
                </div>
                <div className="e-divider">
                     <span>
                      /
                    </span>
                    <span>
                      /
                    </span>
                </div>
                <div className="e-year">
                    <span>
                      YY
                    </span>
                    <span>
                      YY
                    </span>
                </div>
                
              </div>
            </div>
          </div>

          <div className="back">
            <div className="shine"></div>
            <div className="shadow"></div>
            <div className="card-bg">
             <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/513985/cc-back-bg-new.png" />
            </div>
            <div className="ccv">
              <em>CCV Number</em>
              <strong></strong>
            </div>
            <div className="card-content">
              <div className="card-number">
                <span>4111 1111 1111 1111</span>
                <span>4111 1111 1111 1111</span>
              </div>
              <div className="card-holder">
                <span>Your Name</span>
                <span>Your Name</span>
              </div>
              <div className="validuntil">
                <span>
                  <strong className="e-month">MM</strong> /                 <strong className="e-year">YY</strong>
                </span>
                <span>
                  <strong className="e-month">MM</strong> /
                  <strong className="e-year">YY</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <form onSubmit={handleSubmit}>
      <div className="form-content">
        <div className="field">
          <input type="tel" id="cardnumber" maxLength="20" />
          <span className="focus-bar"></span>
          <label htmlFor="cardnumber">Card number</label>
        </div>
        <div className="field">
          <input type="text" autocorrect="off" spellCheck="false" id="cardholder" maxLength="25" />
          <span className="focus-bar"></span>
          <label htmlFor="cardholder">Card holder (Name on card)</label>
        </div>
        <div className="field-group">
          <div className="col-50">
            <label htmlFor="expires-month">Expire (Valid until)</label>   
            <div className="field expire-date">
              <div>
                <input type="tel" id="expires-month" placeholder="MM" allowed-pattern="[0-9]" maxLength="2"/>
                <span className="focus-bar"></span>
              </div>
              <div className="divider">/</div>
              <div>
                <input type="tel" id="expires-year" placeholder="YY" allowed-pattern="[0-9]" maxLength="2"/>
                <span className="focus-bar"></span>
              </div>
            </div>
          </div>
          <div className="col-50">
            <div className="field ccv">
              <input type="tel" id="ccv" autoComplete="off" maxLength="3" />
              <span className="focus-bar"></span>
              <label htmlFor="ccv">CCV</label>
            </div>
          </div>
        </div>
        <button><span>Submit</span></button>
      </div>
    </form>
    </div>
  </li>
  <li className="paymenttype ec unselected-right">
    <div className="box">
    <header>
      <div className="card" id="ec-card">
        <div className="flipper">
          <div className="front">
            <div className="shine"></div>
            <div className="shadow"></div>
            <div className="card-bg">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/513985/ec-front-bg.png" />
            </div>
          </div>
        </div>
      </div>
    </header>
    <form>
      <div className="form-content">
        <p><strong>This is just a demo</strong></p>
       <p>It is neither complete, nor optimized code. In CSS it is playing around with text-shadow, transformations, transitions and a few animations. Some quick coded JavaScript to handle the required interactions. Anyway it might be an inspiration or a starting point.</p>
        <p>Made with &#10084; by webandapp.fr</p>
      </div>
    </form>
     </div>
  </li>
</ul></div>
  )
}

export default Payment