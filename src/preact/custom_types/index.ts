import type { VNode, h } from 'preact';

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
   (props: P): h.JSX.Element;
}

export type TLayoutTemplate<O extends {}> = (headOptions: O) => <P = {}>(content: VNode<P>) => h.JSX.Element;

