import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import axios from 'axios';
import type { Joke } from '~/types/joke';

export const useDadJoke = routeLoader$(async () => {
	const res = await axios.get<Joke>('https://icanhazdadjoke.com/', {
		headers: {
			Accept: 'application/json',
		},
	});
	return res.data;
});

export default component$(() => {
	const {
		value: { joke },
	} = useDadJoke();
	return <section class="section bright">{joke}</section>;
});
