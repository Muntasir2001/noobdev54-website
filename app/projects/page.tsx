import Link from 'next/link';

import { Card } from '@/components/projects/Card';
import { Navbar } from '@/components/projects/Navbar';
import { Article } from '@/components/projects/Article';
import { allProjects } from '@/.contentlayer/generated';

export default async () => {
	const featured = allProjects.find((project) => project.isFeatured)!;

	return (
		<>
			<div className='relative pb-16'>
				<Navbar />
				<div className='px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32'>
					<div className='max-w-2xl mx-auto lg:mx-0'>
						<h2 className='text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl'>
							Projects
						</h2>
						<p className='mt-4 text-zinc-400'>
							Some of the projects are from work and some are on my own
							time.
						</p>
					</div>
					<div className='w-full h-px bg-zinc-800' />

					{/* featured */}
					<Card>
						<Link href={`/projects/featured.slug`}>
							<article className='relative w-full h-[15rem] p-4 md:p-8'>
								<h2
									id='featured-post'
									className='mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display'
								>
									{featured.title}
								</h2>
								<p className='mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300'>
									{featured.description}
								</p>
								<div className='absolute bottom-4 md:bottom-8'>
									<p className='hidden text-zinc-200 hover:text-zinc-50 lg:block'>
										Read more
										<span className='ml-1.5' aria-hidden='true'>
											&rarr;
										</span>
									</p>
								</div>
							</article>
						</Link>
					</Card>
					<div className='hidden w-full h-px md:block bg-zinc-800' />
				</div>
			</div>
		</>
	);
};
