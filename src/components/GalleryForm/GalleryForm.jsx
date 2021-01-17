import React, { useState } from "react";

function GalleryForm(props) {

    return (
        <div>
            <h2>Add Image</h2>
            <form>
                <input type="text" id="pathIn" placeholder="Image Path"/>
                <input type="text" id="descriptionIn" placeholder="Image Description"/>
                <button type="submit" id="submitBtn">Submit</button>
            </form>
        </div>
    )
}

export default GalleryForm;