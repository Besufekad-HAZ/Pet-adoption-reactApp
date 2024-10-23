import { expect, test } from "vitest";
import { StaticRouter } from "react-router-dom/server";
import { render } from "@testing-library/react";
import Pet from "../Pet";

test("displays a default thumbnail", async () => {
  const pet = render(
    <StaticRouter location="">
      <Pet
        name={""}
        animal={"dog"}
        breed={""}
        images={[]}
        location={""}
        id={0}
      />
      ,
    </StaticRouter>,
  );

  const petThumbnail = await pet.findByTestId("thumbnail");
  expect((petThumbnail as HTMLImageElement).src).toContain("none.jpg");
  pet.unmount();
});
