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

export const renderStaticPreact = (component: FunctionComponent<{}>): string =>
{
   return renderPreact(component, {});
};

export class Rendered<P extends {}> extends Buffer
{
   // @ts-ignore
   constructor(component: FunctionComponent<P>, props: P)
   {
      const vnode = component(props);

      if (vnode === null) {
         throw new Error('vnode for rendering is null');
      }

      return Buffer.from('<!DOCTYPE html>' + renderVNode(vnode));
   }
}

export class StaticRendered extends Rendered<{}>
{
   constructor(component: FunctionComponent<{}>)
   {
      super(component, {});
   }
}