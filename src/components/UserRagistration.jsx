import './UserRagistration.css';

function UserRagistration() {
    return <>
        <form>
        <div className="sign-up-form">
        <label htmlFor='name'>Name: </label>
        <input type="text" placeholder="Your Name" id='name' required></input>
        <label htmlFor='phone'>Phone: </label>
        <input type="tel" placeholder="Phone Number" id='phone' required></input>
            <label htmlFor='email'>E-mail: </label>
            <input type="email" placeholder="E-mail" id='email'></input>
            <label htmlFor="passowr1">Password</label>
            <input type="password" name="password1" id="password1" placeholder="Password" required></input>
            <label htmlFor="passowr2">Repeat Password</label>
            <input type="password" name="password1" id="password2" placeholder="Password" required></input>
            <button type="submit" value="Sign Up" className='sign-up-form__sign-up-btn'>Sign Up</button>
            <a href="/login" className='sign-up-form__sign-in-btn'>Already Member? Sign In</a>
        </div>
        </form>
    </>
}
export default UserRagistration;