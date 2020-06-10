import type { PropsWithChildren, ReactElement, WeakValidationMap, ValidationMap } from 'react';

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
   (props: PropsWithChildren<P>, context?: any): ReactElement<P, any> | null;
   propTypes?: WeakValidationMap<P>;
   contextTypes?: ValidationMap<any>;
   defaultProps?: Partial<P>;
   displayName?: string;
}

export type TLayoutTemplate<O extends {}> = (headOptions: O) => <P extends {}>(content: ReactElement<P>) => ReactElement<P> | null;

