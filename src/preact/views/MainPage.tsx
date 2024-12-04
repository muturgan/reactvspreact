/** @jsx h */
import { h }  from 'preact';
import type { IFunctionComponent, IContent } from '../custom_types';
import { Layout } from './Layout';

const ar: number[] = [];
for (let i = 0; i < 1000; i++) {
	ar.push(i);
}


const MainPageTemplate: IFunctionComponent<IContent> = (props) =>
{
	const listItems = ar.map((number) =>
		<li key={String(number)}>{props.product}: {props.price + number}$</li>,
	);

	return <ul>{listItems}</ul>;
};


export const MainPage: IFunctionComponent<IContent> = (props: IContent) =>
{
	const content = MainPageTemplate(props);
	return Layout(content);
};
