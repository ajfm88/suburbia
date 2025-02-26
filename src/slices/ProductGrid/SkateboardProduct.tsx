import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

import { createClient } from "@/prismicio";

type Props = {
  id: string;
};

export async function SkateboardProduct({ id }: Props) {
  const client = createClient();
  const product = await client.getByID<Content.SkateboardDocument>(id);

  return (
    <div className="group relative mx-auto w-full max-w-72 px-8 pt-4 ">
      <PrismicNextImage alt="" field={product.data.image} width={150} />
    </div>
  );
}
