import { useQuery } from "@tanstack/react-query";
import { client } from "../lib/contentful";
import i18n from "../i18n";

export default function useBlogPost(uniqueUrl: string) {
  return useQuery({
    queryKey: ["blogPost", uniqueUrl,i18n.language],
    queryFn: async () => {
      const response = await client.getEntries({
        content_type: "blog",
        "fields.uniqueUrl": uniqueUrl,
        limit: 1,
        locale: i18n.language,
      });
      return response.items[0];
    },
  });
}
