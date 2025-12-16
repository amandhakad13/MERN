// const element1 = document.createElement("h1");
// element1.textContent = "Welcome to React";
// element1.style.color = "white";
// element1.style.backgroundColor = "blue";
// element1.style.fontSize = "35px";

// const element2 = document.createElement("h2");
// element2.textContent = "We will learn how to make react";
// element2.style.color = "white";
// element2.style.backgroundColor = "black";
// element2.style.fontSize = "30px";

// const root = document.getElementById("root");
// root.append(element1);
// root.append(element2);

// styles = {
//     color:"white",
//     backgroundColor:"blue", 
//     fontSize:"35px"
// }

// children = [item1, item2, item3]

styles = {
    href : "https://www.youtube.com"
}

const React = {
    createElement : function(tag, styles, children) {
        const element = document.createElement(tag);

        if(tag === "a") {
            element.href = styles.href;
        }

        if(typeof children === "object") {
            for(let val of children) {
                element.append(val);
            }
        }
        else {
            element.textContent = children;
        }

        for(let key in styles) {
            element.style[key] = styles[key];
        }

        return element;
    }
}

const ReactDom = {
    render : function(root, element) {
        root.append(element);
    }
}

const element1 = React.createElement("h1",{color:"white", backgroundColor:"blue", fontSize:"35px"},"Welcome to React");
const element2 = React.createElement("h2",{color:"white", backgroundColor:"black", fontSize:"30px"}, "We will learn how to make react");

const item1 =  React.createElement("li",{},"HTML");
const item2 =  React.createElement("li",{},"CSS");
const item3 =  React.createElement("li",{},"JS");

const list1 = React.createElement("ul",{color:"white", backgroundColor:"blue", fontSize:"25px"}, [item1, item2, item3]);

const link = React.createElement("a",{href:"https://www.youtube.com"}, "Go to youtube")
console.log(typeof link);

ReactDom.render(document.getElementById("root"), element1);
ReactDom.render(document.getElementById("root"), element2);
ReactDom.render(document.getElementById("root"), list1);
ReactDom.render(document.getElementById("root"), link);