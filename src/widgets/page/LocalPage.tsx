import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import Block from '@dojo/framework/widget-core/meta/Block';
import { tsx } from '@dojo/framework/widget-core/tsx';
import i18n from '@dojo/framework/i18n/i18n';

import compiler from '../../scripts/compile-local.block';
import { getLanguageFromLocale } from '../../util/language';

import Page from './Page';

export interface LocalPageProperties {
	path: string;
	hasLeftSideMenu?: boolean;
	warpInPage?: boolean;
}

export default class LocalPage extends WidgetBase<LocalPageProperties> {
	protected render() {
		const { path, hasLeftSideMenu = false, warpInPage = true } = this.properties;

		const content: any = this.meta(Block).run(compiler)({
			path,
			locale: getLanguageFromLocale(i18n.locale)
		});

		if (!warpInPage) {
			return content;
		}

		return <Page hasLeftSideMenu={hasLeftSideMenu}>{content}</Page>;
	}
}
