import { z } from 'zod';

export const JokeSchema = z.object({
	id: z.string(),
	status: z.number(),
	joke: z.string(),
});

export type Joke = z.infer<typeof JokeSchema>;
