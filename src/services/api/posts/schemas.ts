import { z } from "zod";

export const postsParamsSchema = z
  .object({
    userId: z.string(),
  })
  .nullish();

export const postItemSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  body: z.string(),
});

export const postsSchema = postItemSchema.array();
