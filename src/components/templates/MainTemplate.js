import Footer from 'components/section/Footer.js'
import MyHeader from "components/section/MyHeader.js"

function MainTemplate (props) {
  return (
    <div>
      <MyHeader logo = "Instagram App"/>
        {props.children}
      <Footer/>
    </div>
  )
}

export default MainTemplate