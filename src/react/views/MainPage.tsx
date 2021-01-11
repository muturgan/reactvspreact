import type { IFunctionComponent, IContent } from '../custom_types';
import { ReactJsxFactory as JsxFactory } from './jsx_factory';
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

export const MainPage: IFunctionComponent<IContent> = (props) =>
{
   const content = MainPageTemplate(props);

   if (content === null) { throw new Error('main page content is null'); }

   return Layout(content);
};

export default MainPage;
