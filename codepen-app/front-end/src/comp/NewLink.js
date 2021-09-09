import React from 'react';
import "./NewLink.css"

function NewLink({ newLinksForm, setNewLinksForm, homeLinks, setHomeLinks }) {


    const newLinksAddFunc = (e) => {

        e.preventDefault();

        
            fetch('http://localhost:3435/links', {
            method: 'POST',
            body: JSON.stringify(newLinksForm),
            headers: {
            'Content-type': "application/json"// The type of data you're sending
            }
            }); 
            
    

        // localStorage.setItem("ourLinks", JSON.stringify(homeLinks.map(value => value)));

        // fetch('https://jsonplaceholder.typicode.com/posts', {
        // method: 'POST',
        // body: '', // The data
        // headers: {
        // 'Content-type': '' // The type of data you're sending
        // }
        // }); 


    }


    return (
        <div className="allNewContainer" >
            <form className="containerLink" onSubmit={newLinksAddFunc} >

                <h3>Add a new link</h3>
                <br />


                <div className="row">
                    <div className="col-25">
                        <label >Title</label>
                    </div>
                    <div className="col-75">
                        <input type="text" placeholder="What is the name of the website?" value={newLinksForm.title} onChange={(e) => setNewLinksForm({ ...newLinksForm, title: e.target.value })} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-25">
                        <label >Explanation</label>
                    </div>
                    <div className="col-75">
                        <input type="text" placeholder="Can you explain this website to me a little bit?" value={newLinksForm.text} onChange={(e) => setNewLinksForm({ ...newLinksForm, text: e.target.value })} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-25">
                        <label for="lname">Image URL</label>
                    </div>
                    <div className="col-75">
                        <input type="text" placeholder="What is the address of the image?" value={newLinksForm.imgUrl} onChange={(e) => setNewLinksForm({ ...newLinksForm, imgUrl: e.target.value })} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-25">
                        <label for="lname">Website URL</label>
                    </div>
                    <div className="col-75">
                        <input type="text" placeholder="Where do I go when I click?" value={newLinksForm.link} onChange={(e) => setNewLinksForm({ ...newLinksForm, link: e.target.value })} />
                    </div>
                </div>
                <div className="row">
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default NewLink
