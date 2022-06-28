import ReactDOM from "react-dom";

let command = "";
switch (process.env.NODE_ENV) {
    case "development":
        command = "npm run start";
        break;
    case "development_dev":
        command = "npm run build";
        break;
    case "test":
        command = "npm run build-dev";
        break;
}

ReactDOM.render(
    <div
        style={{
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "#000",
            color: "yellow",
            padding: "15px 20px",
            zIndex: 200,
        }}
    >
        指令: {command}
        <br />
        <br />
        process.env.NODE_ENV:{process.env.NODE_ENV}
    </div>,
    document.getElementById("root"),
);
