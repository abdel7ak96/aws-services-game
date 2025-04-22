const FloatingCard = (service: { id: string, name: string, description: string }) => {
	return (
		<div className="fixed max-w-xl z-10 bottom-15 left-1/2 -translate-x-1/2 bg-white p-5 shadow border-1 border-gray-200 rounded-lg">
			<h1 className="font-bold text-2xl">Description</h1>
			<p>
				{service.description}
			</p>
		</div>
	);
};

export default FloatingCard;
