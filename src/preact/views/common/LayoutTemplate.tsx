import type { TLayoutTemplate, IHead } from '../../custom_types';
import { Head } from './Head';
import { h } from 'preact';


export const LayoutTemplate: TLayoutTemplate<IHead> = (headOptions) =>

   (content) =>

      <html>
         <Head title={headOptions.title} />
         <body>
            { content }
         </body>
      </html>
;

export default LayoutTemplate;
