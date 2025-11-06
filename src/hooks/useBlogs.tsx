import { useQuery } from "@tanstack/react-query";
import { client } from "../lib/contentful";
export default function useBlogs() {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const response = await client.getEntries({
        content_type: "blog",
        order: "-fields.date",
      });
      return response.items
    },
  });
}
