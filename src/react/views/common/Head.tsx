import type { IFunctionComponent, IHead } from '../../custom_types';
import { ReactJsxFactory as JsxFactory } from '../jsx_factory';


export const Head: IFunctionComponent<IHead> = (props) =>

	<head>
		<meta charSet="utf-8" />
		<title>{props.title}</title>
	</head>
;
