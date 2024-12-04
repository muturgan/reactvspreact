import type { ReactElement, JSX } from 'react';

export interface IHello {
	text: string;
}

export interface IHead {
	title: string;
}

export interface IContent {
	product: string;
	price: number;
}

export interface IFunctionComponent<P = {}> {
	(props: P): JSX.Element;
}

export type TLayoutTemplate<O extends {}> = (headOptions: O) => <P extends {}>(content: ReactElement<P>) => JSX.Element;

