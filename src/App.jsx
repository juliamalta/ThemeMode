import ArticleList from "./Components/ArticleList/ArticleList"
import Header from "./Components/Header/Header"
import Form from "./Components/Form/Form"
import { useState } from "react"

const App = () => {
  const [user,setUser] = useState()
  const hasUser = Boolean(user)

  return (
  <div className="h-screen">
  
  <Header user={user}/>

  {hasUser && <ArticleList/>}
  {!hasUser && <Form onSubmit={setUser}/>}
  </div>
  
  )

}
export default App