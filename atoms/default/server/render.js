import mainHTML from "./atoms/default/server/templates/main.html!text";
import share from "./atoms/default/server/templates/share.html!text";
import rp from "request-promise";
import { writeFileSync } from "fs";
import Mustache from "mustache";

const partials = { share };

export async function render() {
  const html = await rp(
    "https://interactive.guim.co.uk/docsdata-test/13QMzpd9z4Nrf_U7GZ6-zJmY6mueOIJJnndXK5zJyvuY.json"
  );
  let htmlJson = JSON.parse(html);
  let victimData = htmlJson.sheets
  // writeFileSync('./assets/related.json', related)

  Object.keys(htmlJson).map((key) => {
    if (key.indexOf("copy") > -1) {
      htmlJson[key] = htmlJson[key].replace(/[\r\n]+/g, "\n").split("\n");
    }
  });

  // console.log(htmlJson)

  const copy = Mustache.render(mainHTML, victimData, partials);
  return copy;
}
