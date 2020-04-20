import mainHTML from "./atoms/default/server/templates/main.html!text";
import rp from "request-promise";
import { writeFileSync } from "fs";
import Mustache from "mustache";

export async function render() {
  const html = await rp(
    "https://interactive.guim.co.uk/docsdata-test/1dCS3JokLD47_Vz1HvKNx9HkVXbQsZYzfIRshglbNqpA.json"
  );
  let htmlJson = JSON.parse(html);
  writeFileSync("./assets/copy.json", htmlJson);
  // writeFileSync('./assets/related.json', related)

  Object.keys(htmlJson).map((key) => {
    if (key.indexOf("copy") > -1) {
      htmlJson[key] = htmlJson[key].replace(/[\r\n]+/g, "\n").split("\n");
    }
  });

  // console.log(htmlJson)

  const copy = Mustache.render(mainHTML, htmlJson, partials);
  return copy;
}
