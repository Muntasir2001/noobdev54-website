import Link from 'next/link';

import styles from './page.module.scss';
import Particles from '@/components/particles';

export default function Home() {
	return (
		<>
			<div className={styles.parent}>
				<nav className={styles.nav}>
					<Link href='/projects' className={styles.link}>
						Projects
					</Link>
					<Link href='/contact' className={styles.link}>
						Contact
					</Link>
				</nav>
				<div className={styles['glow-line']} />
				<Particles
					className={styles['particles-container']}
					quantity={100}
				/>
				<h1 className={styles.title}>Noob Dev 54</h1>
				<div className={styles['glow-line']} />
				<div className={styles.body}>
					<h2 className={styles['custom-heading']}>
						Hi, my name is Andreas, I'm building serverless and open
						source solutions at{' '}
						<Link
							target='_blank'
							href='https://upstash.com'
							className={styles['custom-link']}
						>
							Upstash
						</Link>
						<br />
						and working on{' '}
						<Link
							target='_blank'
							href='https://unkey.dev'
							className={styles['custom-link']}
						>
							unkey.dev
						</Link>{' '}
						at night.
					</h2>
				</div>
			</div>
		</>
	);
}
