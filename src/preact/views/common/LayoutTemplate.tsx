import type { TLayoutTemplate, IHead } from '../../custom_types';
import { PreactJsxFactory as JsxFactory } from '../jsx_factory';
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

export default LayoutTemplate;
