import { useQuery } from "@tanstack/react-query";
import { client } from "../lib/contentful";
import i18n from "../i18n";

/**
 * Custom React Query hook for fetching blog posts filtered by a specific tag
 *
 * @param {string} tag - The tag to filter blog posts by. Only posts containing this tag will be returned.
 * @returns {UseQueryResult} React Query result object containing:
 *   - data: Array of blog post entries from Contentful
 *   - isLoading: Boolean indicating if the initial load is in progress
 *   - isError: Boolean indicating if the request failed
 *   - error: Error object if the request failed
 *   - refetch: Function to manually refetch the data
 *
 * @example
 * // Usage in a component:
 * const { data: posts, isLoading, isError } = usePostsWithTags("react");
 *
 * @description
 * This hook fetches blog posts from Contentful that match the specified tag,
 * ordered by date in descending order (newest first). It uses React Query
 * for caching, background updates, and error handling.
 */
export default function usePostsWithTags(tag: string) {
  // Use React Query to fetch and manage blog post data
  return useQuery({
    /**
     * Query key for caching and invalidation
     * - "blogs": Root key for all blog-related queries
     * - "tag": Sub-key indicating this is a tag-filtered query
     * - tag: Specific tag value for precise caching
     *
     * This ensures queries for different tags are cached separately
     * and can be invalidated independently when needed.
     */
    queryKey: ["blogs", "tag", tag,i18n.language],

    /**
     * Async function that fetches data from Contentful
     * - Uses the Contentful client to make API requests
     * - Filters posts by the specified tag
     * - Orders results by date (newest first)
     *
     * @returns {Promise<Array>} Promise resolving to array of Contentful entries
     */
    queryFn: async () => {
      // Make API request to Contentful
      const response = await client.getEntries({
        // Target the "blog" content type in Contentful
        content_type: "blog",
        locale: i18n.language,

        /**
         * Filter posts that contain the specified tag
         * Contentful's [in] operator matches entries where the tag field
         * contains the provided tag value
         */
        "fields.tag[in]": tag,

        /**
         * Sort posts by date field in descending order (newest first)
         * The hyphen (-) prefix indicates descending order
         */
        order: ["-fields.date"],
      });

      // Return the array of blog post entries
      return response.items;
    },

    /**
     * React Query options (commented out but available for future use):
     *
     * - staleTime: How long data is considered fresh (default: 0)
     * - cacheTime: How long to keep unused data in cache (default: 5 minutes)
     * - retry: Number of retry attempts on failure (default: 3)
     * - refetchOnWindowFocus: Whether to refetch when window regains focus (default: true)
     * - enabled: Condition to enable/disable the query (default: true)
     *
     * @example
     * // Example of additional options:
     * staleTime: 5 * 60 * 1000, // 5 minutes
     * retry: 1,
     */
  });
}
