import { notFound } from 'next/navigation';
import { allProjects } from 'contentlayer/generated';
import { Header } from './header';

type Props = {
	params: {
		slug: string;
	};
};

export async function generateStaticParams(): Promise<Props['params'][]> {
	return allProjects.map((p) => ({
		slug: p.url,
	}));
}

export default async function PostPage({ params }: Props) {
	const slug = params?.slug;
	const project = allProjects.find((project) => project.url === slug);
	project!.body.raw;

	if (!project) {
		notFound();
	}

	return (
		<div className='bg-zinc-50 min-h-screen'>
			<Header project={project} />

			<article className='px-4 py-12 mx-auto prose prose-zinc prose-quoteless'>
				{/* <Mdx /> */}
			</article>
		</div>
	);
}
