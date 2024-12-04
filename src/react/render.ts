import { createElement, FunctionComponent, ComponentClass } from 'react';
import { renderToStaticMarkup, renderToStaticNodeStream } from 'react-dom/server';
import { mergeWithDoctypeStream } from '../common';

export const renderReact = <P extends {}>(component: FunctionComponent<P> | ComponentClass<P>, props: P): string =>
{
	return '<!DOCTYPE html>' + renderToStaticMarkup(
		createElement(component, props),
	);
};

export const renderReactStream = <P extends {}>(component: FunctionComponent<P> | ComponentClass<P>, props: P): NodeJS.ReadableStream =>
{
	return mergeWithDoctypeStream(
		renderToStaticNodeStream(
			createElement(component, props),
		),
	);
};
