import fs from "node:fs/promises";
import path from "node:path";

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);

  const filePath = path.resolve(
    `./public/images/recipes/${searchParams.get("id")}.jpg`
  );

  const imageBuffer = await fs.readFile(filePath);

  const response = new Response(imageBuffer, {
    headers: {
      "Content-Type": "image/jpg",
    },
  });

  return response;
};
