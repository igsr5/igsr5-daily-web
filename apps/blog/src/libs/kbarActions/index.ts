import { NextRouter } from 'next/router';
import { IconActionType, socialActions } from 'core/constants';
import { openExternalLink } from 'core/utils';

import { resumeUrl } from '../../../_config';
import categoryActions from './categories';
import postActions from './posts';

function generateKbarAction(router: NextRouter) {
  const routePostActions = postActions.map(postAction => {
    if (!postAction.parent) return postAction;
    return {
      ...postAction,
      perform: () => {
        router.push(`/${postAction.id}`);
      },
    };
  });

  const routeCategoryActions = categoryActions.map(categoryAction => {
    if (!categoryAction.parent) return categoryAction;
    return {
      ...categoryAction,
      perform: () => {
        router.push(`/category/${categoryAction.id}`);
      },
    };
  });

  const kbarActions: IconActionType[] = [...routePostActions, ...routeCategoryActions, ...socialActions];

  const resumeAction: IconActionType = {
    id: 'resume',
    name: 'Resume',
    subtitle: resumeUrl,
    section: 'Social',
    shortcut: [],
    keywords: 'contact, hire, job',
    icon: 'Info',
    perform: () => openExternalLink(resumeUrl),
  };

  if (typeof resumeUrl === 'string' && resumeUrl.length > 0) {
    kbarActions.push(resumeAction);
  }

  return kbarActions;
}

export default generateKbarAction;
