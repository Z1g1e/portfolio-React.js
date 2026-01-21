import "../../../LandingStyles/HomePageStyles/LoginPageStyles/loginPage.css"

export default function MainSiteLoginAndRegMenu( {mode} ) {
    return (
        <div className="main-login-page-container">
            <div className="main-background-login-page">
                <div className="main-login-title-container">
                    <h1 className="login-title">{mode === "login" ? "Login" : "Register"}</h1>
                </div>
                <div className="main-inputs-and-button-container">
                    <input className="main-login-input-field" placeholder="Email" type="email" />
                    <input className="main-login-password-input-field" placeholder="Password" type="password" />

                    {mode === "register" && (
                        <input className="main-repeat-pswrd-input-fld" placeholder="Repeat password" type="password"/>
                    )}

                    <button className="main-login-button">
                        {mode === "login" ? "Sign in" : "Create account"}
                    </button>
                </div>
            </div>
        </div>
    );
}