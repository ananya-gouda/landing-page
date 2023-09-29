import React from "react";
import "../stylesheets/About.css";

const About = () => {
    const posts = [
        {
            id: 1,
            title: "The beginning (2012)",
            desc: "React Meals has been serving fresh and cheesy delights for 9 years. Started in February 2012, we began our journey with the mission of delivering flavourful dishes. Onesta refers to an honest disposition and not hiding anything and we can surely say that we've got it in our name!",
            img: "https://cdn.freelogodesign.org/files/64285e3961b042b7a87c399a1dd0be32/thumb/logo_200x200.png?v=0",
        },
        {
            id: 2,
            title: "Outlets (29)",
            desc: "Bringing exceptionally delicious food and transparent communication has always kept us connected to our loyal customers. In this spirit of open communication, we are currently spreading Fresh, Moody and Cheesy smiles in 29 outlets.",
            img: "https://www.onestalove.in/wp-content/uploads/2021/08/About-us-2.png",
        },
        {
            id: 3,
            title: "Cheese",
            desc: "We use freshly sourced cheeses from our cheese factory. We manufacture authentic cheeses and create our recipes with no additional preservatives, to bring you pizzas you just can't stop drooling over!",
            img: "https://www.onestalove.in/wp-content/uploads/2021/08/CHEESE-PICTURE-OUR-STORY-PAGE.png",
        },
        {
            id: 4,
            title: "Locations",
            desc: "Onesta delivers delectable, mouth-watering pizzas in Bangalore, Mysore, Mangalore, Pune and Hyderabad.Now you know everything about us, but watch this space! We've only just begun. To know more & continue the conversation with your new favourite pizza place, use the hashtag #spreadonestly. Let's talk!",
            img: "https://www.onestalove.in/wp-content/uploads/2021/09/onesta-696x460-1.png",
        },
    ];

    return (
        <div className="home-about">
            <div className="posts-about">
                {posts.map((post) => (
                    <div className="post-about" key={post.id}>
                        <div className="img">
                            <img src={post.img} alt=" " />
                        </div>
                        <div className="content-about">
                            <h1>{post.title}</h1>
                            <p>{post.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
