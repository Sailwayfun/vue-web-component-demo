import { register } from "../../dist/index.js";
register();

const myHeader = document.querySelector("m-header");
console.log(myHeader);

myHeader.addEventListener("modechange", (e) => {
    console.log(e.target);
    if (myHeader.mode === "light") {
        myHeader.mode = "dark";
    } else {
        myHeader.mode = "light";
    }
});