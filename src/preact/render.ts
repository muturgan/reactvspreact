import type { FunctionComponent } from 'preact';
import renderVNode from 'preact-render-to-string';

export const renderPreact = <P extends {}>(component: FunctionComponent<P>, props: P): string =>
{
   const vnode = component(props);

   if (vnode === null) {
      throw new Error('vnode for rendering is null');
   }

   return '<!DOCTYPE html>' + renderVNode(vnode);
};
