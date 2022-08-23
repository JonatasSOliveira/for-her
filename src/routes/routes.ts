import { Route } from "./types";

import texts from "../assets/texts.json";
import images from "../assets/images.json";
import paths from "../assets/paths.json";

const routes: Array<Route> = [];

let textIndex = 0;
let imageIndex = 0;

for (let pathIndex = 0; pathIndex < paths.length; pathIndex++) {
  let text: string | undefined = texts[textIndex]?.text;
  let imageName: string | undefined = images[imageIndex]?.image_name;

  if (!text) {
    textIndex = 0;
    text = texts[textIndex].text;
  }
  if (!imageName) {
    imageIndex = 0;
    imageName = images[imageIndex].image_name;
  }

  const path = paths[pathIndex].path;

  routes.push({
    path: path,
    text: text,
    imageName: imageName,
  });

  textIndex += 1;
  imageIndex += 1;
}

export default routes;
