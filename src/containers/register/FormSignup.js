import react from "react";

const FormSignup = ()=>{
    return(
        <div className="form-content-right">
            <form className="form">
                <h1>Create Account</h1>
                <div className="form-input">
                    <label htmlFor="username" 
                    className="form-lable">
                       Username
                         </label>
                        <input
                        id='username'
                        type='text'
                        name='usrename'
                        classname='form-input'
                        placeholder="enter your name"/>
                </div>
                <div className="form-input">
                    <label htmlFor="email" 
                    className="form-lable">
                        Email
                        <input
                        id='email'
                        type='email'
                        name='email'
                        classname='form-input'
                        placeholder="enter your email"/>
                    </label>
                </div>
                <div className="form-input">
                    <label htmlFor="password" 
                    className="form-lable">
                        Password
                        <input
                        id='password'
                        type='password'
                        name='password'
                        classname='form-input'
                        placeholder="enter your password"/>
                    </label>
                </div>
                <div className="form-input">
                    <label htmlFor="Confirm Password" 
                    className="form-lable">
                       Confirm Password
                        <input
                        id='Confirm Password'
                        type='Confirm Password'
                        name='Confirm Password'
                        classname='form-input'
                        placeholder="enter your Confirm Password"/>
                    </label>
                </div>
                <button className="form-input-btn"  type="Submit">
                    Signup
                </button>
                <span className="form-input-login">
                    Already have an account? Login <a href="#">here</a>
                </span>
          </form> 
        </div>
    )
}
export default FormSignup;