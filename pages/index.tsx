import Head from 'next/head';
import Image from 'next/image';

import styled from '@emotion/styled';

const Parent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	/* justify-content: center; */

	margin: 0 100px;
	margin-top: 10%;

	height: 100%;

	.logo {
		width: 250px;
	}

	.title {
		color: var(--white-color);
		margin-top: 30px;
		font-size: var(--heading-font-size);
		text-align: center;
	}

	.about-me {
		color: var(--white-color);
		font-size: var(--normal-font-size);
		margin-top: 20px;
		text-align: center;

		span {
			color: var(--primary-color);
		}
	}

	.footer {
		color: var(--white-color);
		margin-top: 100px;

		.icons {
			text-align: center;

			img {
				width: 30px;
			}
		}

		p {
			margin-top: 10px;
		}
	}

	@media screen and (max-width: 600px) {
		margin: 10% 50px 0 50px;
	}
`;

export default function Home() {
	return (
		<>
			<Head>
				<title>Noob Dev 54</title>
				<meta name='description' content='Noob Dev 54 - coming soon' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon-32x32.png'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Parent>
				<img
					src='/logo/noob_dev_final_cropped_transparent.svg'
					alt='Noob Dev logo'
					className='logo'
				/>
				<h1 className='title'>Website coming soon</h1>
				<p className='about-me'>
					I am <span>Noob Dev</span> (noob_dev54), 21 years old, final year
					Computer Science student and a Full Stack Developer.
				</p>
				<div className='footer'>
					<div className='icons'>
						<a
							href='https://www.instagram.com/noob_dev54'
							target='_blank'
						>
							<img
								src='/social-media-icons/instagram-icon.svg'
								alt='insta-icon'
								// onClick={(e) => e.preventDefault()}
							/>
						</a>
					</div>
					<p>Copyright ©2022 All rights reserved</p>
				</div>
			</Parent>
		</>
	);
}
