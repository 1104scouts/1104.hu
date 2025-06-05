import { defineCollection, z, getCollection } from "astro:content";
import {file, glob} from "astro/loaders";
import {BlogType} from "./blog_type.ts";

const patrols = defineCollection({
    loader: file("./data/patrols.json"),
    schema: z.object({
        id: z.string(),
        name: z.string(),
        foundation: z.number().optional(),
        placeholder: z.boolean().optional(),
        category: z.enum(["Jelölt", "Kiscserkész", "Cserkész", "Kósza", "Vezető"]).optional(),
        members: z.number().optional(),
        leaders: z.array(z.object({
            name: z.string(),
            image: z.string(),
        }))
    })
});

const blog = defineCollection({
    loader: glob({pattern: "**/*.md", base: "./data/blog"}),
    schema: z.object({
        title: z.string(),
        date: z.date(),
        type: z.nativeEnum(BlogType),
        excerpt: z.string(),
        author: z.string(),
        photography: z.string(),
        images: z.array(z.string()),
        link: z.string(),
        album: z.string().nullable(),
    })
})

export const collections = { patrols, blog };
