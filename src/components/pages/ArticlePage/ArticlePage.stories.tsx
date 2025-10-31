import { Meta, StoryObj } from '@storybook/react';

// Components
import {
    AudioAsset,
    Breadcrumbs,
    Header,
    LeftNavLayout,
    LeftNavigation,
    Article,
    ChildrenAnimalMotif,
    Footer
} from '@/components';

// Utils
import { disabledControl } from '@/sb-tools';

// Mocks
import { mockAudioAsset } from '@/mocks/audio-asset';
import { mockBreadcrumbs } from '@/mocks/breadcrumbs';
import { mockHeader } from '@/mocks/header';
import { mockLeftNavigation } from '@/mocks/sitecore';
import { mockArticle } from '@/mocks/article';
import { mockChildrensAnimalMotif } from '@/mocks/childrens-animal-motif';
import { mockFooter } from '@/mocks/footer';

export default {
    title: 'Design System/pages/ArticlePage',
    component: LeftNavLayout,
    argTypes: {
        breadcrumbsSection: disabledControl,
        aboveLeftNavSection: disabledControl,
        leftNavLinks: disabledControl,
        leftNavContent: disabledControl,
        belowLeftNavSection: disabledControl
    },
    args: {
        className: '',
        breadcrumbsSection: (
            <Breadcrumbs {...mockBreadcrumbs.auroraHealthCare} />
        ),
        aboveLeftNavSection: <Header {...mockHeader.auroraHealthCare} />,
        leftNavLinks: <LeftNavigation navigations={mockLeftNavigation} />,
        leftNavContent: (
            <Article {...mockArticle.withImageAndSocialMediaLinks} />
        ),
        belowLeftNavSection: (
            <>
                <ChildrenAnimalMotif {...mockChildrensAnimalMotif.default} />
                <Footer {...mockFooter.auroraHealthCare} />
            </>
        )
    }
} satisfies Meta<typeof LeftNavLayout>;

type Story = StoryObj<typeof LeftNavLayout>;

export const ArticlePageFull: Story = {
    render: () => {
        return (
            <>
                {/* AbovePageContent */}
                <Header {...mockHeader.advocateHealthCare} />
                <Breadcrumbs {...mockBreadcrumbs.auroraHealthCare} />

                {/* Main Content */}
                <Article {...mockArticle.withImageAndSocialMediaLinks} />
                <AudioAsset {...mockAudioAsset.default} />

                {/* Below Page Content */}
                <ChildrenAnimalMotif {...mockChildrensAnimalMotif.default} />
                <Footer {...mockFooter.auroraHealthCare} />
            </>
        );
    }
};
