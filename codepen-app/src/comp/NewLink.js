import React from 'react';
import "./NewLink.css"

function NewLink() {
    return (
        <div>
            <form className="container">

                <h3>Add a new link</h3>
                <br />


                <div className="row">
                    <div className="col-25">
                        <label for="fname">Title</label>
                    </div>
                    <div className="col-75">
                        <input type="text" placeholder="What is the name of the website?" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-25">
                        <label for="lname">Explanation</label>
                    </div>
                    <div className="col-75">
                        <input type="text" placeholder="Can you explain this website to me a little bit?" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-25">
                        <label for="lname">Image URL</label>
                    </div>
                    <div className="col-75">
                        <input type="text" placeholder="What is the address of the image?" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-25">
                        <label for="lname">Website URL</label>
                    </div>
                    <div className="col-75">
                        <input type="text" placeholder="Where do I go when I click?" />
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
