import Link from 'next/link';

import { Eye } from 'lucide-react';

import { Card } from '@/components/projects/Card';
import { Navigation } from '@/components/projects/Navigation';
import { allProjects } from '@/.contentlayer/generated';

export default async () => {
	return (
		<>
			<div className='relative pb-16'>
				<Navigation />
				<div className='px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32'></div>
			</div>
		</>
	);
};
