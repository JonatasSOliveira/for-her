import { Route } from "./types";

import texts from "../assets/texts.json";
import images from "../assets/images.json";
import paths from "../assets/paths.json";

const routes: Array<Route> = [];

for (let index = 0; index < paths.length; index++) {
  const text = texts[index]?.text ?? "Helo World";
  const imageName = images[index]?.image_name ?? "IMG_20220814_192711.jpg";
  const path = paths[index]?.path ?? "/";

  routes.push({
    path: path,
    text: text,
    imageName: imageName,
  });
}

export default routes;
