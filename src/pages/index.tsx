import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Homepage from "@site/src/components/Homepage";

import styles from './index.module.css';

function HomepageHeader() {
	return (
		<header className={clsx('hero hero--primary', styles.heroBanner)}>
			<div className="container">
				<Heading
					as="h1"
					className="hero__title"
				>
					GTEL MAPS Documentation
				</Heading>
				<p className="hero__subtitle">Nền tảng bản đồ toàn diện với hướng dẫn, ví dụ trực quan và tài liệu API chi tiết, giúp bạn xây dựng ứng dụng bản đồ chuyên nghiệp một cách dễ dàng! 🌍🚀</p>
				<div className={styles.buttons}>
					<Link
						className="button button--secondary button--lg"
						to="/docs/overview"
					>
						Bắt đầu
					</Link>
				</div>
			</div>
		</header>
	);
}

export default function Home(): ReactNode {
	return (
		<Layout
			title="GTEL MAPS DOCS"
			description="Tài liệu, hướng dẫn sử dụng | eKMap"
		>
			<HomepageHeader />

			<main>
				{/*<HomepageFeatures />*/}
				<Homepage/>
			</main>
		</Layout>
	);
}
