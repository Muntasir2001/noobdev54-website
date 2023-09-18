import type { Projects } from '@/.contentlayer/generated';
import Link from 'next/link';
import { Eye, View } from 'lucide-react';

type Props = {
	project: Projects;
};

export const Article: React.FC<Props> = ({ project }) => {
	return (
		<Link href={`/projects/`}>
			<article className='p-4 md:p-8 flex flex-col justify-between'>
				<h2 className='z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display'>
					{/* {project.title} */} title
				</h2>
				<p className='z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200'>
					{/* {project.description} */} description
				</p>
			</article>
		</Link>
	);
};
