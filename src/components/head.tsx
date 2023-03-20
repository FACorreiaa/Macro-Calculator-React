import { Helmet } from 'react-helmet';

type HeadComponentProps = {
	title: string;
	content: string;
};
function HeadComponent({ title, content }: HeadComponentProps) {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name="keywords" content="HTML,CSS,JavaScript" />
			<meta name="description" content={content} />
		</Helmet>
	);
}

export default HeadComponent;
