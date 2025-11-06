import { useQuery } from "@tanstack/react-query";
import { client } from "../lib/contentful";

export default function useBlogPost(uniqueUrl: string) {
  return useQuery({
    queryKey: ["blogPost", uniqueUrl],
    queryFn: async () => {
      const response = await client.getEntries({
        content_type: "blog",
        "fields.uniqueUrl": uniqueUrl,
        limit: 1,
      });
      return response.items[0];
    },
  });
}
