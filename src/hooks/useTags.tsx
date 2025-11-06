import { useQuery } from "@tanstack/react-query";
import { client } from "../lib/contentful";

export default function usePostsWithTags(tag:string) {
  return useQuery({
    queryKey: ["blogs", "tag",tag],
    queryFn: async () => {
      const response = await client.getEntries({
        content_type: "blog",
        "fields.tag[in]": tag,
        order: ["-fields.date"],
      });
      return response.items;
    },
  });
}
