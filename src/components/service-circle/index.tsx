import type { FC } from "react";
import { motion } from "motion/react";
import Tooltip from "../tooltip";

const ServiceCircle: FC<Props> = ({ id, name, category, description }) => {
	return (
		<motion.div
			className="flex flex-col items-center justify-center cursor-pointer"
			// whileHover={{
			// 	rotate: [5, -5, 5],
			// 	x: [0.5, -0.5, 0.5],
			// 	y: [-0.5, 0.5, -0.5],
			// }}
			// transition={{
			// 	repeat: Number.POSITIVE_INFINITY,
			// 	repeatType: "loop",
			// 	duration: 0.4,
			// 	ease: "easeInOut",
			// }}
		>
			<Tooltip description={description}>
				<div className="relative drop-shadow-lg hover:drop-shadow-blue-500">
					<img
						src={`https://icon.icepanel.io/AWS/svg/${category}/${id}.svg`}
						alt={name}
						className="rounded-full shadow-lg"
					/>
				</div>
			</Tooltip>
			<span className="text-center text-xs mt-2 font-semibold">{name}</span>
		</motion.div>
	);
};

type Props = {
	id: string;
	name: string;
	category: string;
	description: string;
};

export default ServiceCircle;
