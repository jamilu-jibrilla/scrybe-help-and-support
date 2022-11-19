import Articles from "../../components/articles/Articles"
import Cards from "../../components/Cards/Cards"
import Contact from "../../components/contact/Contact"
import Header from "../../components/header/Header"
import Input from "../../components/input/Input"

function HelpSupport({setDisplay}) {

  return (
    <div className="HelpSupport">
      <Header />
      <Input />
      <Cards setDisplay={setDisplay}/>
      <Articles />
      <Contact />
    </div>
  )
}

export default HelpSupport
