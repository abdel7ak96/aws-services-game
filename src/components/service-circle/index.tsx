import type { FC } from "react";
import { motion } from "motion/react";

const ServiceCircle: FC<Props> = ({ id, name, category }) => {
	return (
		<motion.div
			className="flex flex-col items-center justify-center"
			animate={{
				rotate: [5, -5, 5],
				x: [0.5, -0.5, 0.5],
        y: [-0.5, 0.5, -0.5],
			}}
			transition={{
				// repeat: Number.POSITIVE_INFINITY,
				// repeatType: "loop",
				duration: 0.4,
				ease: "easeInOut",
				delay: Math.random() * 0.2, // To give each icon a slightly different jiggle
			}}
		>
			<div className="relative w-1/2">
				<img
					src={`https://icon.icepanel.io/AWS/svg/${category}/${id}.svg`}
					alt={name}
					className="object-cover rounded-full shadow-lg"
				/>
			</div>
			<span className="text-center text-xs mt-2 font-semibold">{name}</span>
		</motion.div>
	);
};

type Props = {
	id: string;
	name: string;
	category: string;
};

export default ServiceCircle;
