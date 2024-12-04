import type { IFunctionComponent } from './custom_types';
import { render as renderVNode } from 'preact-render-to-string';

export const renderPreact = <P extends {}>(component: IFunctionComponent<P>, props: P): string =>
{
	const vnode = component(props);
	return '<!DOCTYPE html>' + renderVNode(vnode);
};

export const renderStaticPreact = (component: IFunctionComponent<{}>): string =>
{
	return renderPreact(component, {});
};

export class Rendered<P extends {}> extends Buffer
{
	constructor(component: IFunctionComponent<P>, props: P)
	{
		const vnode = component(props);
		super(Buffer.from('<!DOCTYPE html>' + renderVNode(vnode)));
	}
}

export class StaticRendered extends Rendered<{}>
{
   constructor(component: IFunctionComponent<{}>)
   {
      super(component, {});
   }
}