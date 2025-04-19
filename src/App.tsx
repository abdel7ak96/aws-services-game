import Logo from "./assets/logo.png";
import { servicesData } from "./constants/aws-services";
import ServiceCircle from "./components/service-circle";
import FloatingCard from "./components/floating-card";
import { useEffect, useMemo, useState } from "react";

function App() {
	const [services, setServices] = useState(servicesData);
	const [randomService, setRandomService] =
		useState<(typeof servicesData)[number]["services"][number]>();

	const flatServices = useMemo(
		() => services.flatMap((service) => service.services),
		[services],
	);

	useEffect(() => {
		const randomIndex = Math.floor(Math.random() * flatServices.length);
		const randomService = flatServices[randomIndex];
		setRandomService(randomService);
	}, [flatServices]);

	const handleServiceClick = (i: number, j: number) => {
		if (services[i].services[j].id === randomService?.id) {
			const newServices = [...services];
			newServices[i].services.splice(j, 1);
			setServices(newServices);
		}
	};

	return (
		<div className="p-10 mb-[160px]">
			<div className="flex items-center gap-x-4">
				<img className="w-20" src={Logo} alt="Logo" />
				<h1 className="text-4xl font-bold">AWS Cloud Services Game</h1>
			</div>

			<p className="mt-4 text-lg">
				Welcome to the AWS Cloud Services Game! Test your knowledge of AWS
				services and learn more about cloud computing.
			</p>

			<div className="flex justify-center">
				<button
					className="mt-6 px-4 py-2 bg-blue-500 hover:bg-blue-600 hover:shadow-md cursor-pointer text-white rounded-xl"
					type="button"
				>
					Start Game
				</button>
			</div>

			<div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-10">
				{services.map((service, i) => (
					<div
						key={service.category}
						className="border border-gray-200 p-4 rounded-lg shadow-md"
					>
						<h5 className="text-2xl">{service.category}</h5>
						<div className="border-1 border-gray-100" />
						<div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 items-start gap-4 mt-4">
							{service.services.map((s, j) => (
								<div
									key={s.id}
									onClick={() => handleServiceClick(i, j)}
									onKeyDown={(e) => e.key === "Enter" && handleServiceClick(i, j)}
								>
									<ServiceCircle category={service.category} {...s} />
								</div>
							))}
						</div>
					</div>
				))}
			</div>
			{randomService && <FloatingCard {...randomService} />}
		</div>
	);
}

export default App;
