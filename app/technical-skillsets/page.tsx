import { Github } from 'lucide-react';

import { Navbar } from '@/components/projects/Navbar';
import { Card } from '@/components/Card';

export default async () => {
	const skills = [
		{
			icon: <Github size={30} />,
			skill: 'GitHub',
		},
	];

	return (
		<>
			<div className='relative pb-16'>
				<Navbar />

				<div className='px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24'>
					<div className='max-w-2xl mx-auto lg:mx-0 mt-5 md:mt-0'>
						<h2 className='text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl md:mt-12'>
							Technical Skillsets
						</h2>
					</div>
					<div className='w-full h-px bg-zinc-800' />

					<div className='grid w-full grid-cols-2 lg:grid-cols-5 gap-5'>
						<Card>
							<div className='flex gap-3 items-center justify-center py-4 px-2'>
								<Github size={30} />
								<h3 className='text-2xl font-bold text-zinc-100 group-hover:text-white font-display'>
									GitHub
								</h3>
							</div>
						</Card>
						<Card>
							<div className='flex gap-3 items-center justify-center p-4'>
								<Github size={30} />
								<h3 className='text-2xl font-bold text-zinc-100 group-hover:text-white font-display'>
									GitHub
								</h3>
							</div>
						</Card>
					</div>
				</div>
			</div>
		</>
	);
};
