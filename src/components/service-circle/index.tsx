import type { FC } from "react";

const ServiceCircle: FC<Props> = ({ id, name, category }) => {
	return (
		<div className="flex flex-col items-center justify-center">
			<div className="relative w-1/2">
				<img
					src={`src/assets/icons/${category}/${id}.svg`}
					alt={name}
					className="object-cover rounded-full shadow-lg"
				/>
			</div>
			<span className="text-center text-xs mt-2 font-semibold">{name}</span>
		</div>
	);
};

type Props = {
	id: string;
	name: string;
	category: string;
};

export default ServiceCircle;
