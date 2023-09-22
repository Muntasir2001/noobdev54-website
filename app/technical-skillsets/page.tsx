import Image from 'next/image';

import { Github } from 'lucide-react';

import { Navbar } from '@/components/Navbar';
import { Card } from '@/components/Card';

export default async () => {
	const skills = [
		{
			icon: (
				<Image src='/icons/react.svg' width={30} height={30} alt='icon' />
			),
			skill: 'React',
		},
		{
			icon: (
				<Image src='/icons/nextjs.svg' width={30} height={30} alt='icon' />
			),
			skill: 'Next',
		},
		{
			icon: (
				<Image
					src='/icons/javascript.svg'
					width={30}
					height={30}
					alt='icon'
				/>
			),
			skill: 'JavaScript',
		},
		{
			icon: (
				<Image
					src='/icons/typescript.svg'
					width={30}
					height={30}
					alt='icon'
				/>
			),
			skill: 'Typescript',
		},
		{
			icon: (
				<Image
					src='/icons/styled-components.svg'
					width={30}
					height={30}
					alt='icon'
				/>
			),
			skill: 'Styled Components',
		},
		{
			icon: (
				<Image src='/icons/prisma.svg' width={30} height={30} alt='icon' />
			),
			skill: 'Prisma',
		},
		{
			icon: <Image src='/icons/ejs.svg' width={30} height={30} alt='icon' />,
			skill: 'EJS',
		},
		{
			icon: (
				<Image
					src='/icons/postgresql.svg'
					width={30}
					height={30}
					alt='icon'
				/>
			),
			skill: 'PostgreSQL',
		},
		{
			icon: (
				<Image
					src='/icons/expressjs.svg'
					width={30}
					height={30}
					alt='icon'
				/>
			),
			skill: 'Express.js',
		},
		{
			icon: (
				<Image src='/icons/html.svg' width={30} height={30} alt='icon' />
			),
			skill: 'HTML5',
		},
		{
			icon: <Image src='/icons/css.svg' width={30} height={30} alt='icon' />,
			skill: 'CSS3',
		},
		{
			icon: (
				<Image src='/icons/sass.svg' width={30} height={30} alt='icon' />
			),
			skill: 'Sass',
		},
		{
			icon: (
				<Image
					src='/icons/firebase.svg'
					width={30}
					height={30}
					alt='icon'
				/>
			),
			skill: 'Firebase',
		},
		{
			icon: (
				<Image src='/icons/mongodb.svg' width={20} height={20} alt='icon' />
			),
			skill: 'MongoDB',
		},
		{
			icon: (
				<Image src='/icons/vscode.svg' width={30} height={30} alt='icon' />
			),
			skill: 'Visual Studio Code',
		},
		{
			icon: (
				<Image src='/icons/vercel.svg' width={30} height={30} alt='icon' />
			),
			skill: 'Vercel',
		},
		{
			icon: (
				<Image src='/icons/svelte.svg' width={30} height={30} alt='icon' />
			),
			skill: 'Svelte',
		},
		{
			icon: <Image src='/icons/djs.svg' width={30} height={30} alt='icon' />,
			skill: 'Discord.js',
		},
		{
			icon: (
				<Image src='/icons/nodejs.svg' width={30} height={30} alt='icon' />
			),
			skill: 'Node.js',
		},
		{
			icon: (
				<Image src='/icons/docker.svg' width={30} height={30} alt='icon' />
			),
			skill: 'Docker',
		},
		{
			icon: <Image src='/icons/git.svg' width={30} height={30} alt='icon' />,
			skill: 'Git',
		},
		{
			icon: (
				<Image src='/icons/netlify.svg' width={30} height={30} alt='icon' />
			),
			skill: 'Netlify',
		},
		{
			icon: (
				<Image
					src='/icons/supabase.svg'
					width={30}
					height={30}
					alt='icon'
				/>
			),
			skill: 'Supabase',
		},
		{
			icon: (
				<Image src='/icons/adobeXd.svg' width={30} height={30} alt='icon' />
			),
			skill: 'Adobe XD',
		},
		{
			icon: (
				<Image src='/icons/figma.svg' width={30} height={30} alt='icon' />
			),
			skill: 'Figma',
		},
		{
			icon: (
				<Image src='/icons/python.svg' width={30} height={30} alt='icon' />
			),
			skill: 'Python',
		},
		{
			icon: (
				<Image src='/icons/fastapi.svg' width={30} height={30} alt='icon' />
			),
			skill: 'FastAPI',
		},
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

					<div className='w-full flex flex-wrap gap-5'>
						{skills.map((s, i) => (
							<Card>
								<div className='flex gap-4 items-center justify-center py-4 px-6 h-full'>
									{s.icon}
									<h3 className='text-2xl font-bold text-zinc-100 group-hover:text-white font-display'>
										{s.skill}
									</h3>
								</div>
							</Card>
						))}
					</div>
				</div>
			</div>
		</>
	);
};
