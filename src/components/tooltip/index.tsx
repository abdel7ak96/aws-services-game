import type { ReactElement } from "react";
import { Tooltip as TooltipRadix } from "radix-ui";

const Tooltip = ({
	children,
	description,
}: { children: ReactElement; description: string }) => {
	return (
		<TooltipRadix.Provider delayDuration={100}>
			<TooltipRadix.Root>
				<TooltipRadix.Trigger asChild>{children}</TooltipRadix.Trigger>
				<TooltipRadix.Portal>
					<TooltipRadix.Content className="p-3 bg-white shadow border-1 border-gray-200 rounded-lg">
						<p className="max-w-xl text-sm">{description}</p>
						<TooltipRadix.Arrow className="fill-white"/>
					</TooltipRadix.Content>
				</TooltipRadix.Portal>
			</TooltipRadix.Root>
		</TooltipRadix.Provider>
	);
};

export default Tooltip;
