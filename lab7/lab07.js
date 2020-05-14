const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];
var DIV=document.getElementsByClassName("flex-container justify");//获取节点
//循环添加
    for(var i=0;i<works.length;i++) {
        var div1 = document.createElement("div");
        div1.setAttribute("class", "item");
        //第一级节点
        var h4 = document.createElement("h4");
        var text1 = document.createTextNode("Genre : " + works[i].tips);
        h4.appendChild(text1);
        div1.appendChild(h4);
        //第一个板块
        var div2 = document.createElement("div");
        div2.setAttribute("class", "inner-box");

        var h31 = document.createElement("h3");
        h31.setAttribute("style", "display: inline-block");
        var text2 = document.createTextNode(works[i].author);
        h31.appendChild(text2);

        var h5 = document.createElement("h5");
        h5.setAttribute("style", "display: inline-block;margin: 0 0 0 1em;");
        var text3 = document.createTextNode("lifetime:" + works[i].lifetime);
        h5.appendChild(text3);

        div2.appendChild(h31);
        div2.appendChild(h5);
        //第二个板块
        var div3 = document.createElement("div");
        div3.setAttribute("class", "inner-box");

        var h32 = document.createElement("h3");
        var text4 = document.createTextNode("Popular Photos");
        h32.appendChild(text4);
        div3.appendChild(h32);

        for (var j=0;j<works[i].photos.length;j++) {
            var image = document.createElement("img");
            image.setAttribute("class", "photo")
            image.setAttribute("src", works[i].photos[j]);
            div3.appendChild(image);
        }
        //第三个板块
        var button = document.createElement("button");
        var text5 = document.createTextNode("Visit");
        button.appendChild(text5);
       //按钮
        div1.appendChild(div2);
        div1.appendChild(div3);
        div1.appendChild(button);
        DIV[0].appendChild(div1);
        //逐次添加
    }


