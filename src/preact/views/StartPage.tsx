import type { IFunctionComponent } from '../custom_types';
import { Layout } from './Layout';
import { h } from 'preact';
const React = {
   createElement: h,
};


const StartPageTemplate: IFunctionComponent = () =>
{
   return <ul>
      <li>React string <a href="/react" target="_blank">{'=>'}</a></li>
      <li>React stream <a href="/react/stream" target="_blank">{'=>'}</a></li>
      <li>Preact string <a href="/preact" target="_blank">{'=>'}</a></li>
      <li>Preact buffer <a href="/preact/buffer" target="_blank">{'=>'}</a></li>
   </ul>;
};


export const StartPage: IFunctionComponent = () =>
{
   const content = StartPageTemplate({});

   if (content === null) { throw new Error('start page content is null'); }

   return Layout(content);
};

export default StartPage;
