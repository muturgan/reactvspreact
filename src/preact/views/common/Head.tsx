/** @jsx h */
import { h }  from 'preact';
import type { IFunctionComponent, IHead } from '../../custom_types';


export const Head: IFunctionComponent<IHead> = (props) =>

	<head>
		<meta charSet="utf-8" />
		<title>{props.title}</title>
	</head>
;
