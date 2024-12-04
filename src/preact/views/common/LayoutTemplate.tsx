/** @jsx h */
import { h }  from 'preact';
import type { TLayoutTemplate, IHead } from '../../custom_types';
import { Head } from './Head';


export const LayoutTemplate: TLayoutTemplate<IHead> = (headOptions) =>

	(content) =>

		<html>
			<Head title={headOptions.title} />
			<body>
				{ content }
			</body>
		</html>
;
