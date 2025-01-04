import { z, defineCollection} from "astro:content";
import { glob } from "astro/loaders";
// Define a `loader` and `schema` for each collection
const blog = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/blog" }),

    schema: ({ image }) =>
        z.object({
        title: z.string(),
        pubDate: z.string().transform((str) => new Date(str)),
        description: z.string(),
        author: z.string().default('macc'),
        imgUrl: image(),

            tags: z.array(z.string()).optional(),
        relatedPosts: z.array(z.string()).optional(),

    })
});

// Export a single `collections` object to register your collection(s)
export const collections = { blog };
