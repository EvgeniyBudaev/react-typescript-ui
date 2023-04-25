import type { z } from "zod";
import { postItemSchema, postsParamsSchema, postsSchema } from "./schemas";

export type TPostsParams = z.infer<typeof postsParamsSchema>;
export type TPost = z.infer<typeof postItemSchema>;
export type TPosts = z.infer<typeof postsSchema>;
