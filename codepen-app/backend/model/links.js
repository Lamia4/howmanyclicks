import mongoose from "mongoose";

const linksSchema = mongoose.Schema({

    title: {
        type: String,
    },
    text: {
        type: String,
    },
    imgUrl: {
        type: String,
    },
    link: {
        type: String,
    }
});

const Link = mongoose.model("Link", linksSchema);

async function createLink (title, text, imgUrl, link) {
	
	const linkResult = new Link({
		title,
        text,
        imgUrl,
        link
	});
	console.log("before save");
    console.log(linkResult);
	return await linkResult.save();
};

async function readAll () {
    
	return await Link.find();
};

export default {
    createLink,
    readAll
}