import React from 'react'
import NewLink from "../comp/NewLink.js"

function Home({ homeLinks }) {



    return (
        <div>

            <NewLink />

            <main>
                {homeLinks.map(value => {
                    return <div className="links">
                        <h1> {value.title} </h1>
                        <p>
                            {value.text}
                        </p>
                        <img src={value.imgUrl} alt="codepen-screenshot" />
                        <a href={value.link} >Link to {value.title} </a>
                        <hr />
                    </div>
                })}
            </main>


        </div>
    )
}

export default Home
