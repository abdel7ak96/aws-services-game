const FloatingCard = (service: { id: string, name: string, description: string }) => {
	return (
		<div className="fixed max-w-xl z-10 bottom-5 left-1/2 -translate-x-1/2 bg-white p-5 shadow border-1 border-gray-200 rounded-lg">
			<h1 className="font-bold text-2xl">{service.name}</h1>
			<p>
				a web service that you can use to automate the movement and
				transformation of data. With AWS Data Pipeline, you can define
				data-driven workflows, so that tasks can be dependent on the successful
				completion of previous tasks.
			</p>
		</div>
	);
};

export default FloatingCard;
