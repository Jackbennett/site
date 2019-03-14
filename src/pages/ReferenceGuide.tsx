import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { tsx } from '@dojo/framework/widget-core/tsx';

import { CompileRemoteBlockOptions } from '../scripts/compile-remote.block';
import RemotePage from '../widgets/page/RemotePage';
import Section from '../widgets/section/Section';

import ReferenceGuideMenu from './reference-guides/ReferenceGuideMenu';

export interface ReferenceGuideProperties extends CompileRemoteBlockOptions {
	route: string;
	page: string;
}

export default class ReferenceGuide extends WidgetBase<ReferenceGuideProperties> {
	protected render() {
		const { route, repo, branch, path, page } = this.properties;

		return (
			<Section key="section">
				<ReferenceGuideMenu route={route} repo={repo} branch={branch} path={path} />
				{page === 'introduction' || page === 'basic-usage' ? (
					<RemotePage repo={repo} branch={branch} path={`${path}/${page}.md`} hasLeftSideMenu />
				) : (
					<RemotePage
						repo={repo}
						branch={branch}
						path={`${path}/supplemental.md`}
						header={page}
						hasLeftSideMenu
					/>
				)}
			</Section>
		);
	}
}