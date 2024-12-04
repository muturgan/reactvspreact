/** @jsx h */
import { h }  from 'preact';
import type { IFunctionComponent } from '../custom_types';
import { Layout } from './Layout';


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
	return Layout(content);
};
