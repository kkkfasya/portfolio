import { play, type SoundName } from "cuelume";

export function useCuelume() {
	return { play: (name?: SoundName) => play(name) };
}
