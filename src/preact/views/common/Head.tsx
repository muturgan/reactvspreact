import type { IFunctionComponent, IHead } from '../../custom_types';
import { h } from 'preact';


export const Head: IFunctionComponent<IHead> = (props) =>

   <head>
      <meta charSet="utf-8" />
      <title>{props.title}</title>
   </head>
;

export default Head;