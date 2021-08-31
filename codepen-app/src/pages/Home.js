import React, { useState } from 'react'
import NewLink from "../comp/NewLink.js";

import "./Home.css"

function Home({ homeLinks }) {


    const [linkTitle, setLinkTitle] = useState("")
    const [linkExp, setLinkExp] = useState("")
    const [linkImgUrl, setLinkImgUrl] = useState("")
    const [webSiteLink, setWebSiteLink] = useState("")



    return (
        <div>

            <NewLink linkTitle={linkTitle} linkExp={linkExp} />

            <main className="allLinks" >
                {homeLinks.map(value => {
                    return <div className="links">
                        <h1> {value.title} </h1>
                        <p>
                            {value.text}
                        </p>
                        <img src={value.imgUrl} alt="codepen-screenshot" />
                        <a href={value.link} >Link to {value.title} </a>

                    </div>
                })}
            </main>


        </div>
    )
}

export default Home
