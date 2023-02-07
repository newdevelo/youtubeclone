// Video
const videolist = [{
        id: 1,
        title: "100 + Computer Science Concepts Explained",
        channelname: "Fireship",
        views: "1,1M Views • 8 M",
        thumbnail: "./images/maxresdefaulte.jpg",
        channellogo: "./images/named.jpg",
        category: "Computer Science",
        link: "https://www.youtube.com/watch?v=-uleG_Vecis&ab_channel=Fireship",
    },
    {
        id: 2,
        title: "الشغف مع احمد الشقيري",
        channelname: "Dejavu & احمد الشقيري ",
        views: "281K views • 1 Years Ago",
        thumbnail: "./images/sddefault.jpg",
        channellogo: "./images/unnamede.jpg",
        category: "Self Improvement",
        link: "https://www.youtube.com/watch?v=fiGf8rCp6bw&t=2s&ab_channel=Dejavu%26%D8%A7%D8%AD%D9%85%D8%AF%D8%A7%D9%84%D8%B4%D9%82%D9%8A%D8%B1%D9%8A",
    },
    {
        id: 3,
        title: "أوكرانيا لعشاق القهوة و يبيعون القهوة بالنار",
        channelname: " رحاليستا Rahalista ",
        views: "281K views • 1 Years Ago",
        thumbnail: "./images/rahalista.jpg",
        channellogo: "./images/Rahalistaprofile.jpg",
        category: "Travel",
        link: "https://www.youtube.com/watch?v=ld9cXbOf-WE&ab_channel=%D8%B1%D8%AD%D8%A7%D9%84%D9%8A%D8%B3%D8%AA%D8%A7Rahalista",
    },

    {
        id: 4,
        title: "Café Latino - Putumayo Presents (Full Album)",
        channelname: "Rock In The Choya",
        views: "952K Views • 9 Months Ago",
        thumbnail: "./images/maxresdefault.jpg",
        channellogo: "./images/channels4_profile.jpg",
        category: "Music",
        link: "https://www.youtube.com/watch?v=kT-wiUv1VmE&ab_channel=RockInTheChoya",
    },

    {
        id: 5,
        title: "The Harder You Try, The Worse It Gets | Law of Reversed Effort",
        channelname: "Einzelgänger",
        views: "3M Views • 9 Months Ago",
        thumbnail: "./images/try.jpg",
        channellogo: "./images/unnamed.jpg",
        category: "Reading Books",
        link: "https://www.youtube.com/watch?v=-IlG32Pb43g&ab_channel=Einzelg%C3%A4nger",
    },

    {
        id: 6,
        title: "The Economy of Tomorrow | AI Revolution | Megacities | Documentary",
        channelname: "Moconomy",
        views: "441K Views • 3 Months Ago",
        thumbnail: "./images/maxresdefaultai.jpg",
        channellogo: "./images/channels4_profileee.jpg",
        category: "AI Revolution",
        link: "https://www.youtube.com/watch?v=jR2ho31tor4&t=1s&ab_channel=Moconomy",
    },

    {
        id: 7,
        title: "علاقة عاداتك وقوة عقلك الباطن - كتاب العادات الذرية - الجزء الاول",
        channelname: "دوباميكافين Dupamicaffeine",
        views: "567K Views • 9 Days Ago",
        thumbnail: "./images/video3.jpg",
        channellogo: "./images/dupamicaffeine.jpg",
        category: "Reading Books",
        link: "https://www.youtube.com/watch?v=ULZ5RypImrQ&ab_channel=%D8%AF%D9%88%D8%A8%D8%A7%D9%85%D9%8A%D9%83%D8%A7%D9%81%D9%8A%D9%86Dupamicaffeine",
    },

    {
        id: 8,
        title: "18 Amazing Upcoming Most Anticipated Games We Are Waiting For 2023 & Beyond PS5, XSX, PS4, XB1, PC",
        channelname: "MOB-X Game",
        views: "952K Views • 9 Months Ago",
        thumbnail: "./images/videogame.jpg",
        channellogo: "./images/mob-xgame.jpg",
        category: "Video Games",
        link: "https://www.youtube.com/watch?v=posibwX-DZE&ab_channel=MOB-XGame",
    },

    {
        id: 9,
        title: "for self care - r&b/soul playlist",
        channelname: "Bobby Nsenga",
        views: "1.9M views • 9 Months Ago",
        thumbnail: "./images/rnb.jpg",
        channellogo: "./images/channels400_profile.jpg",
        category: "Music",
        link: "https://www.youtube.com/watch?v=hj90cgTfZ8M&t=1007s&ab_channel=BobbyNsenga",
    },

    {
        id: 10,
        title: "Simon Sinek's Advice Will Leave You SPEECHLESS (MUST WATCH)",
        channelname: "Alpha Leaders",
        views: "7.2M views • 1 Years Ago",
        thumbnail: "./images/alpha10.jpg",
        channellogo: "./images/alpha.jpg",
        category: "Self Improvement",
        link: "https://www.youtube.com/results?search_query=Simon+Sinek%27s+Advice+Will+Leave+You+SPEECHLESS+(MUST+WATCH)",
    },
];

const videocontainer = document.querySelector(".video-container");
const filterbtns = document.querySelectorAll(".chiptest");

// load Items
window.addEventListener("DOMContentLoaded", function() {
    displayvideoItems(videolist);
});

//filter Items
filterbtns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const category = e.currentTarget.dataset.id;

        const videocategory = videolist.filter(function(videoitem) {
            if (videoitem.category === category) {
                return videoitem;
            }
        });
        //  console.log(videocategory);
        if (category === "all") {
            displayvideoItems(videolist);
        } else {
            displayvideoItems(videocategory);
        }
    });
});

function displayvideoItems(videoitem) {
    let displayvideo = videoitem.map(function(item) {
        // console.log(item);
        return `<div class="video-content-cover">
        <div class="video-content">
            <a href=${item.link} class="video-box">
                <img src=${item.thumbnail} alt="">
            </a>
            <div class="video-details">
                <div class="channel-logo">
                    <img src=${item.channellogo} alt="">
                </div>
                <div class="detail">
                    <h3 class="title">${item.title}</h3>
                    <div class="channel-name">${item.channelname}</div>
                    <div class="views-upload">
                        <div class="views">${item.views}</div>
                        <div class="upload"></div>
                    </div>
                </div>
            </div>
            <div class="hidden-content">
                <div class="btn"><i class="ri-time-line"></i>Watch later</div>
                <div class="btn"><i class="ri-play-list-2-line"></i>Add to queue</div>
            </div>
        </div>
    </div>`;
    });
    displayvideo = displayvideo.join("");
    videocontainer.innerHTML = displayvideo;
}