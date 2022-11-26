import MyHeader from "components/molecules/MyHeader.js"
import Footer from "components/molecules/Footer.js"

function About(){
    return(
        <div>
            <MyHeader h1Text = 'Logo'/>
            <p>Jakis tekst</p>
            <Footer/>
        </div>  
    )
}

export default About