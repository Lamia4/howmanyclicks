import React, { useState, useEffect } from 'react'
import NewLink from "../comp/NewLink.js";

import "./Home.css"

function Home() {

    const [homeLinks, setHomeLinks] = useState([])


    const url = 'http://localhost:3435/links';

    useEffect(() => {
        fetch(url).then((response) => {

            return response.json();
        }).then((jsonData) => {

            console.log(jsonData);
            setHomeLinks(jsonData)

        }).catch((error) => {

            console.log(error);
        });
    }, [])



    const [newLinksForm, setNewLinksForm] = useState(
        {
            title: "",
            text: "",
            imgUrl: "",
            link: ""
        })




    return (
        <div>

            <NewLink newLinksForm={newLinksForm} setNewLinksForm={setNewLinksForm} homeLinks={homeLinks} setHomeLinks={setHomeLinks} />

            <main className="allLinks" >
                {homeLinks.map((value, i) => {
                    return <div className="links" key={i} >
                        <h1> {value.title} </h1>
                        <p>
                            {value.text}
                        </p>
                        <img src={value.imgUrl} alt="codepen-screenshot" />
                        <a href={`http://localhost:3435/links/${value.title}`} target="_blank">Link to {value.title} {value.count} </a>

                    </div>
                })}
            </main>


        </div>
    )
}

export default Home
