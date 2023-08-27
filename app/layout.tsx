import './globals.scss';
import type { Metadata } from 'next';
import LocalFont from '@next/font/local';
import { Inter } from 'next/font/google';

export const metadata: Metadata = {
	title: 'Noob Dev 54',
	description: 'Software Engineer',
};

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
});

const calSans = LocalFont({
	src: '../public/fonts/CalSans-SemiBold.ttf',
	variable: '--font-calsans',
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className={[inter.variable, calSans.variable].join(' ')}>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
