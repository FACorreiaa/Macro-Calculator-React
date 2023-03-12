import React from 'react';
import { Helmet } from 'react-helmet';

type HeadComponentProps = {
	title: string;
	name: string;
	content: string;
};
function HeadComponent({ title, name, content }: HeadComponentProps) {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name="keywords" content="HTML,CSS,JavaScript" />
			<meta name={name} content={content} />
		</Helmet>
	);
}

export default HeadComponent;
