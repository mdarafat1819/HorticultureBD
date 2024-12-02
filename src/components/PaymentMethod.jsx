import { BsCashStack } from "react-icons/bs";
import './PaymentMethod.css';

function PaymentMethod() {
    return (
        <>
            {/* <h3 className="payment-method-title">Payment Method (Please select a payment method)</h3> */}
            <div className="payment-method">
                <span>ক্যাশ অন ডেলিভারি</span> <br />
                <span>পন্য হাতে পেয় টাকা পরিশোধ করুন</span><br />
                <div className="payment-method__type">
                    <input type="checkbox"></input> <BsCashStack className="payment-method__icon" /> <span>ক্যাশ অন ডেলিভারি</span>
                </div>
                <span>মোবাইল ওয়ালেট</span> <br />
                <span>মোবাইল ওয়ালেটের মাধ্যমে টাক পরিশোধ করুন</span>
                <div className="payment-method__online">
                    <div className="payment-method__type">
                        <input type="checkbox"></input>
                        <img src="https://raw.githubusercontent.com/mdarafat1819/Storage/main/bkash_logo.png"></img>
                    </div>
                    <div className="payment-method__type">
                        <input type="checkbox"></input>
                        <img src="https://raw.githubusercontent.com/mdarafat1819/Storage/main/nagad_logo.png"></img>
                    </div>
                    <div className="payment-method__type">
                        <input type="checkbox"></input>
                        <img src="https://raw.githubusercontent.com/mdarafat1819/Storage/main/rocket_logo.png"></img>
                    </div>
                </div>

                <div className="payment-method__terms">
                    <ol>
                        <li>
                            আপনার অর্ডারের প্রোডাক্টগুলো সাপ্লায়ারের কাছে না থাকলে সেগুলো ব্যাতিত অবশিষ্ট প্রোডাক্টগুলো পাঠিয়ে দেয়া হবে।
                            এসব ক্ষেত্রে আপনাকে ইমেইল/এসএমএস/হোয়াটসঅ্যাপ/ফোন এর মাধ্যমে জানিয়ে দেয়া হবে।
                        </li>
                        <li>
                            আপনার পেইড অর্ডারের প্রোডাক্ট NA হলে অথবা ক্যান্সেল হলে পেইড এমাউন্ট ৭-১০ কর্মদিবসের মাঝে রিফান্ড করা হবে ইনশাআল্লাহ।
                        </li>
                        <li>
                            সাপ্লায়ারের পক্ষ থেকে প্রোডাক্টের মূল্য পরিবর্তন হতে পারে।
                            এসব ক্ষেত্রে আপনাকে ইমেইল/এসএমএস/হোয়াটসঅ্যাপ/ফোন এর মাধ্যমে জানিয়ে দেয়া হবে।
                        </li>
                    </ol>
                    <input type="checkbox"></input>এই শর্তগুলো মেনে অর্ডার প্রদান করছি।
                </div>
            </div>
        </>
    );
}
export default PaymentMethod;