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
    },
    count: {
        type: Number,
        default: 0
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

async function findLink (title) {
    
    
    const findLink = await Link.findOne({title});
    console.log(title);
    if (findLink == null) return false;
    findLink.count++;
    await findLink.save();
	return findLink; //true
};


export default {
    createLink,
    readAll,
    findLink
}