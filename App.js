const parant = React.createElement("div",{id:"parant"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"This is the h1 tag"),
        React.createElement("h2",{},"This is the h2 tag")

    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"This is the h1 tag"),
        React.createElement("h2",{},"This is the h2 tag")
    ])
])
console.log(parant)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parant)