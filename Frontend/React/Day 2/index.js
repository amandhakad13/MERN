const element1 = React.createElement("h1", {}, "Welcome to react 18");

const element2 = React.createElement("p", {}, "This is why i learning react");

const item1 = React.createElement("li", {}, "HTML");
const item2 = React.createElement("li", {}, "CSS");
const item3 = React.createElement("li", {}, "JS");

const list = React.createElement("ol", {}, [item1, item2, item3]);

const link = React.createElement("a", {href: "https://www.youtube.com"}, "Click to go youtube");

// ReactDOM.render(element1, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(element1);
// root.render(element2);
// root.render(list);
root.render(link);