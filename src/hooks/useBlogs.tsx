import { useQuery } from "@tanstack/react-query";
import { client } from "../lib/contentful";
import i18n from "../i18n";
export default function useBlogs() {
  return useQuery({
    queryKey: ["blogs",i18n.language],
    queryFn: async () => {
      const response = await client.getEntries({
        content_type: "blog",
        order: ["-fields.date"],
        locale: i18n.language,
      });
      return response.items
    },
  });
}
