import Footer from "components/section/Footer.js";
import MyHeader from "components/section/MyHeader.js";
import LoginRegisterForm from "components/section/LoginRegisterForm.js"
import MainTemplate from "components/templates/MainTemplate.js"

function LoginPage(){
    return(
        <MainTemplate>
            <LoginRegisterForm/>
        </MainTemplate>
    )
}

export default LoginPage;