import { bind } from "cuelume";
import { useEffect } from "react";

export function CuelumeProvider({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		bind();
	}, []);
	return <>{children}</>;
}
