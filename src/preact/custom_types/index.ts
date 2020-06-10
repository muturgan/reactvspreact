import type { RenderableProps, VNode } from 'preact';

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

export interface IFunctionComponent<P extends {}> {
   (props: RenderableProps<P>, context?: any): VNode<P> | null;
   displayName?: string;
   defaultProps?: Partial<P>;
}

export type TLayoutTemplate<O extends {}> = (headOptions: O) => <P extends {}>(content: VNode<P>) => VNode<P> | null;

