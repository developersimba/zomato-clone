import React,{useState,useEffect, useRef} from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Menubar from './Menubar'
import Breaking from './Breaking'
import Footer from './Footer'

const Main = () => {

    const [news, setNews] = useState([])
    const [menu,setMenu] = useState("")
    const [search,setSearch] = useState([])

    const searchRef = useRef(null)


    const getNews = async () => {
        try {
            await fetch(`https://newsapi.org/v2/everything?q=${menu ? menu : "politics"}&sortBy=popularity&apiKey=6046867fa79f4b379c70524289a2823b`)
                .then(res => res.json())
                .then(json => setNews(json.articles))
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getNews()
    }, [menu])

  return (
    <div>
      <Navbar setMenu={setMenu} searchRef={searchRef}/>
      <Menubar news={news}/>
      <Breaking news={news} menu={menu}/>
      <Home news={news} search={search} />
      <Footer news={news} setSearch={setSearch} searchRef={searchRef} setMenu={setMenu}/>
    </div>
  )
}

export default Main
