import {test} from "@playwright/test";
import * as csv from "@fast-csv/parse";
//import {writeToPath} from "fast-csv";
//import { parse } from "@fast-csv/parse";
import { writeToPath } from "fast-csv";

test.only("CSV Test", async () => {
    let myObject: any = new Promise((resolve) => {
        let dataArray: JSON[] =[];
           csv.parseFile("./ReadMe.csv", {headers: true})
         .on("data", (data) => {
            dataArray.push(data);
         })
.on("end", () => {
    resolve(dataArray);
})
    })
    let output = await myObject;
    console.log(output);
    console.log(output[0]["Channel"]);

    //WRITING
const arr: any = Array.from(output);
await arr.unshift({Name: "Name", City: "City"})
await arr.push({
    Name: "Patil",
City: "Goa"
});
writeToPath("./temp.csv", arr );

})