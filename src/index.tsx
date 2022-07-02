import ReactDOM from "react-dom";

let command = "";
switch (process.env.NODE_ENV) {
    case "development":
        command = "npm run start";
        break;
    case "v1_dev":
        command = "npm run buildV1";
        break;
    case "v2_dev":
        command = "npm run buildV2";
        break;
    case "v1_test":
        command = "npm run testV1";
        break;
    case "v2_test":
        command = "npm run testV2";
        break;
    case "production":
        command = "npm run build";
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
        process.env.NODE_ENV ： {process.env.NODE_ENV}
        <br />
        process.env.BASENAME ：{process.env.BASENAME}
    </div>,
    document.getElementById("root"),
);
