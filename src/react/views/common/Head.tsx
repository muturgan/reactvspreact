import type { IFunctionComponent, IHead } from '../../custom_types';
import React = require('react');


export const Head: IFunctionComponent<IHead> = (props) =>

   <head>
      <meta charSet="utf-8" />
      <title>{props.title}</title>
   </head>
;

export default Head;
