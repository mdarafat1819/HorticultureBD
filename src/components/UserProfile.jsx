import { useEffect, useState } from 'react';
import './UserProfile.css';

function UserProfile() {

    const [user, setUser] = useState(
        {
            name: "Yeasin Arafat",
            dob: "1999-04-12",
            gender: "male",
            image: "",
            phone: "+8801795100243",
            email: "mdarafat1819@gmail.com",
            address: "Sheikh Rasel Hall, BSMRSTU, Gopalganj Sadar, Gopalganj",
            password: "123456"
        }
    )

    const [formState, setFormState] = useState(
        {
            userInfoForm: "true",
            userContactForm: "true",
            userPasswordForm: "true"
        }
    );
    function toggleFormElements(form_id, isDisable) {
        const form = document.getElementById(form_id);
        const elements = form.elements;
        for (let i = 0; i < elements.length; i++) {
            elements[i].disabled = isDisable;
        }
    }
    function updateFormState(formId, state) {
        setFormState(prevState => ({
            ...prevState,
            [formId]: state
        }));
    }

    function InfoEditOrUpdate({ formId }) {
        const editBtnStyle = {
            userSelect: "none",
            fontSize: "small",
            color: "red",
        }
        const updateBtnStyle = { ...editBtnStyle };
        updateBtnStyle["color"] = "green";
        return (
            formState[formId] ? <a style={editBtnStyle}
                onClick={() => {
                    updateFormState(formId, false);
                }}
            >Edit</a>
                : <a style={updateBtnStyle}
                    onClick={() => {
                        updateFormState(formId, true);

                        const form = document.getElementById(formId);
                        const elements = form.elements;
                        for (let i = 0; i < elements.length; i++) {
                            console.log(elements);
                        }
                    }}
                >Update</a>
        );

    }
    useEffect(() => {
        console.log(user);
        toggleFormElements("userInfoForm", formState.userInfoForm);
        toggleFormElements("userContactForm", formState.userContactForm);
        toggleFormElements("userPasswordForm", formState.userPasswordForm);
    }, [formState]);

    function formHandler(event) {
        const { name, value } = event.target;
        console.log(user);
        setUser({
            ...user,
            [name]: value
        });
    }


    return (
        <>
            <div className='user-profile'>

                <div className='user-profile__menus'>
                    <div className='user-profile__greetings'>
                        <img src='https://raw.githubusercontent.com/mdarafat1819/Storage/main/cat.jpeg'></img>
                        <span>Hello, <br /> Mridul</span>
                    </div>
                    <a href=''>My Account</a>
                    <a href=''>My Orders</a>
                    <a href=''>Log Out</a>
                </div>

                <div className='user-profile__kyc-form'>
                    <div className='user-profile__personal-info'>
                        <form id="userInfoForm">
                            <h3>Personal Info:
                                {
                                    <InfoEditOrUpdate formId={"userInfoForm"} />

                                }
                            </h3>
                            <hr />
                            <label htmlFor='name'>Full Name: </label>
                            <input type='text' id="name" name='name' value={user.name} onChange={formHandler}></input>

                            <label htmlFor='dob'>Date Of Birth: </label>
                            <input type='date' id='dob' name="dob" value={user.dob} onChange={formHandler} ></input>

                            <label htmlFor='gender'>Gender:</label>
                            <input
                                type="radio"
                                id="male"
                                name='gender'
                                value="male"
                                checked={"male" === user.gender} 
                                onChange={formHandler}
                                ></input>
                            <span>Male</span>
                            <input
                                type="radio"
                                id="female"
                                name='gender'
                                value="female"
                                checked={"female" === user.gender}
                                onChange={formHandler}
                                ></input>
                            <span>Female</span>

                            <label htmlFor='profile-picture'>Profile Picture</label>
                            <input type='file' name='profile-picture'></input>
                        </form>

                    </div>

                    <div className='user-profile__contact-info'>
                        <form id="userContactForm">
                            <h3>Contact Info:
                                <InfoEditOrUpdate formId={"userContactForm"} />
                            </h3>
                            <hr />
                            <label htmlFor='mobile'>Phone Number: </label>
                            <input type='tel' id="mobile" name="phone" value={user.phone} onChange={formHandler}></input>

                            <label htmlFor='email'>E-mail</label>
                            <input type='email' id='email' name='email' value={user.email} onChange={formHandler}></input>

                            <label htmlFor='address'>Address: </label>
                            <textarea type="text" id="address" name='address' onChange={formHandler} value={user.address}></textarea>

                        </form>
                    </div>

                    <div className='user-profile__security'>
                        <form id="userPasswordForm">
                            <h3>Password
                                <InfoEditOrUpdate formId={"userPasswordForm"} />
                            </h3>
                            <hr />
                            <label htmlFor='current-password'>Your Current Passoword:</label>
                            <input
                                type='password'
                                id="current-password"
                                name='password'
                                value={user.password}
                                onChange={formHandler}
                            ></input>

                            {
                                !formState.userPasswordForm ? <>
                                    <label htmlFor='new-password'>New Password</label>
                                    <input type='password' id='new-password'></input>

                                    <label htmlFor='confirm-new-password'>Repeat New Password</label>
                                    <input type="password" id="confirm-new-password" name='user-address'></input>
                                </> : <></>
                            }
                        </form>
                    </div>


                </div>
            </div>
        </>
    );
}
export default UserProfile;