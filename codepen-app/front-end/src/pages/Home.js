import React, { useState } from 'react'
import NewLink from "../comp/NewLink.js";

import "./Home.css"

function Home() {


    let linksInfoLocalStorage = JSON.parse(localStorage.getItem("ourLinks"));

    const [homeLinks, setHomeLinks] = useState(linksInfoLocalStorage ? linksInfoLocalStorage : [
        {
            title: "CodePen",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nihil.",
            imgUrl: "https://i.ytimg.com/vi/H46C8rEaVHg/maxresdefault.jpg",
            link: "https://codepen.io/trending"
        },
        {
            title: "Youtube",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nihil.",
            imgUrl: "https://www.sozunuz.com/wp-content/uploads/2020/11/Youtube-%C3%87%C3%B6kt%C3%BC.jpg",
            link: "https://www.youtube.com/"
        },
        {
            title: "Amazon",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nihil.",
            imgUrl: "https://www.schweitzer-projects.de/images/Inhalte/aktuell/amazon-de.jpg",
            link: "https://www.amazon.de/"
        },

    ])


    localStorage.setItem("ourLinks", JSON.stringify(homeLinks.map(value => value)));


    const [newLinksForm, setNewLinksForm] = useState(
        {
            title: null,
            text: null,
            imgUrl: null,
            link: null
        })




    return (
        <div>

            <NewLink newLinksForm={newLinksForm} setNewLinksForm={setNewLinksForm} homeLinks={homeLinks} setHomeLinks={setHomeLinks} />

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
