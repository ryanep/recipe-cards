import fs from "node:fs/promises";
import client from "node:https";
import path from "node:path";

const imageUrls = [
  "https://cdn.sanity.io/images/21t4zq9k/production/bbd6cebbb8990a2a002b01ba5213aa4e6e0a36e7-832x468.jpg",
  "https://cdn.sanity.io/images/21t4zq9k/production/b8b43f752eb0f799626055617b3767d504b3ea13-500x500.jpg",
  "https://cdn.sanity.io/images/21t4zq9k/production/5a5283431b03b642b324d88367558a1c8c525cab-4032x3024.jpg",
  "https://cdn.sanity.io/images/21t4zq9k/production/c2638c258d665919b2b643241ad03df462bcffe0-1160x1618.jpg",
  "https://cdn.sanity.io/images/21t4zq9k/production/d96c131de8ed8a4ffa1bceb0b52b9393b87930c3-320x320.jpg",
  "https://cdn.sanity.io/images/21t4zq9k/production/5e8ec902a5cbd53a4dcca9cc4a4a795b6a96e58f-981x1250.jpg",
  "https://cdn.sanity.io/images/21t4zq9k/production/d05ad91aa875684737cfde7a10cf32ef119d4a72-400x320.jpg",
  "https://cdn.sanity.io/images/21t4zq9k/production/a3de80959afd5c2348e6f66f54d583d88c400eeb-2477x1651.jpg",
  "https://cdn.sanity.io/images/21t4zq9k/production/3ec3da13c40fb8aa9320761fb6c1c160d5b9eabb-400x333.jpg",
  "https://cdn.sanity.io/images/21t4zq9k/production/359342fc382dbfa7a803ee3a37cbc9d662082189-400x320.jpg",
  "https://cdn.sanity.io/images/21t4zq9k/production/589ad6c0ac7f9074a6a63f774d76173ad5c50773-1400x919.jpg",
  "https://cdn.sanity.io/images/21t4zq9k/production/50a31e0e5d355d227d22e1df1f9203de4836f6d7-440x400.webp",
  "https://cdn.sanity.io/images/21t4zq9k/production/24e18bd52fe84300734e3f303fd97835bccc70d1-400x320.jpg",
  "https://cdn.sanity.io/images/21t4zq9k/production/3bdc52def34f4b98ebc3c88276af5f5525ecc26e-400x320.jpg",
  "https://cdn.sanity.io/images/21t4zq9k/production/46f7669762e0c4b1f9ee1cd30a97e952ce61a8eb-275x183.jpg",
  "https://cdn.sanity.io/images/21t4zq9k/production/408067c876fe52c13b54381186d17b59d2b69116-1200x799.jpg",
  "https://cdn.sanity.io/images/21t4zq9k/production/fb462cac7405443619d325e250ea15932b276db4-440x400.jpg",
  "https://cdn.sanity.io/images/21t4zq9k/production/5cf4bffa650ac8e8ef5d44cb7a2f63a902e7f307-400x320.jpg",
  "https://cdn.sanity.io/images/21t4zq9k/production/e5518a09867d1013d7442cd8328b8d449df2b719-1200x1800.jpg",
  "https://cdn.sanity.io/images/21t4zq9k/production/da2f99f9997ffb6151bd7f3f1188602c43ccc7cc-759x506.jpg",
  "https://cdn.sanity.io/images/21t4zq9k/production/e462321e78edb44a02d9aaf4f442dca332b29456-400x320.jpg",
  "https://cdn.sanity.io/images/21t4zq9k/production/1cafd239865a35c0d18fe755d908ccf4145837e3-600x900.jpg",
  "https://cdn.sanity.io/images/21t4zq9k/production/be9c87731ae438bab8ccf6bf08de7ba7c71f1b1f-680x900.jpg",
  "https://cdn.sanity.io/images/21t4zq9k/production/b36a01aa87a177d92c329f1f7b7103e11d22f189-400x320.jpg",
  "https://cdn.sanity.io/images/21t4zq9k/production/c0da7abbc4d35026ff0c904b0812fa6a4237d617-720x720.jpg",
  "https://cdn.sanity.io/images/21t4zq9k/production/b359031117fd2890ef3806130e0be942bc108d7c-1456x1993.jpg",
  "https://cdn.sanity.io/images/21t4zq9k/production/d89f1b9e766b6397f898eca6d41b68a03a62c93a-700x969.jpg",
  "https://cdn.sanity.io/images/21t4zq9k/production/61b5233a021eed41d38e2ab0f48f11b4b2534aac-1525x1525.jpg",
  "https://cdn.sanity.io/images/21t4zq9k/production/849d5dd628b2826f8c0cfad130c844dbbf9c85e2-4032x3024.jpg",
  "https://cdn.sanity.io/images/21t4zq9k/production/fe5f1ba9d9e5a1f979bdc4e55adeb3da240bb9fe-400x320.jpg",
  "https://cdn.sanity.io/images/21t4zq9k/production/a4080d3f3af862a538335b0384e6d6920e0c4ada-4032x3024.jpg",
  "https://cdn.sanity.io/images/21t4zq9k/production/5442f20a3f5ca752e8649e4088c4540dc6187a51-4032x3024.jpg",
  "https://cdn.sanity.io/images/21t4zq9k/production/75a443662171ba1d19229ea2c2ec1573512e849d-768x1156.jpg",
  "https://cdn.sanity.io/images/21t4zq9k/production/01ca3d120500318504f476528df8609b994bffb7-960x641.jpg",
  "https://cdn.sanity.io/images/21t4zq9k/production/5b1b837f842bd8e64148b7266c6be4ff0db15b8e-720x480.jpg",
  "https://cdn.sanity.io/images/21t4zq9k/production/3ba39e8a0689dc6a39ab14befc91efc2c19824ff-1080x1350.webp",
  "https://cdn.sanity.io/images/21t4zq9k/production/51a588956e1f5980d0a982d5d38860555c3c20bd-1100x1653.jpg",
];

const main = () => {
  for (const imageUrl of imageUrls) {
    client.get(imageUrl, async (response) => {
      const imageName = imageUrl.replace(
        "https://cdn.sanity.io/images/21t4zq9k/production/",
        ""
      );
      const outputPath = path.join(`./output/${imageName}`);

      await fs.writeFile(outputPath, response);
    });
  }
};

main();
