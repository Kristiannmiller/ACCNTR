import { Meta, StoryObj } from '@storybook/react';
import { Image as JssImage } from '@sitecore-jss/sitecore-jss-react';

// Components
import {
    Breadcrumbs,
    Header,
    LeftNavLayout,
    Article,
    ChildrenAnimalMotif,
    Footer
} from '@/components';

// Utils
import { disabledControl } from '@/sb-tools';

// Mocks
import { mockBreadcrumbs } from '@/mocks/breadcrumbs';
import { mockHeader } from '@/mocks/header';
import { mockArticle } from '@/mocks/article';
import { mockChildrensAnimalMotif } from '@/mocks/childrens-animal-motif';
import { mockFooter } from '@/mocks/footer';
import { mockBlogImages } from '@/mocks';

export default {
    title: 'Design System/pages/BlogPage',
    component: LeftNavLayout,
    argTypes: {
        breadcrumbsSection: disabledControl,
        aboveLeftNavSection: disabledControl,
        leftNavLinks: disabledControl,
        leftNavContent: disabledControl,
        belowLeftNavSection: disabledControl
    }
} satisfies Meta<typeof LeftNavLayout>;

type Story = StoryObj<typeof LeftNavLayout>;

export const BlogPageStandardImage: Story = {
    render: () => {
        return (
            <>
                {/* AbovePageContent */}
                <Header {...mockHeader.advocateHealthCare} />
                <Breadcrumbs {...mockBreadcrumbs.auroraHealthCare} />

                {/* Main Content */}
                <Article
                    {...mockArticle.withImageRightAligned}
                    image={<JssImage field={mockBlogImages.standard} />}
                />

                {/* Below Page Content */}
                <ChildrenAnimalMotif {...mockChildrensAnimalMotif.default} />
                <Footer {...mockFooter.auroraHealthCare} />
            </>
        );
    }
};

export const BlogPageLargeImage: Story = {
    render: () => {
        return (
            <>
                {/* AbovePageContent */}
                <Header {...mockHeader.advocateHealthCare} />
                <Breadcrumbs {...mockBreadcrumbs.auroraHealthCare} />

                {/* Main Content */}
                <Article
                    {...mockArticle.withImageRightAligned}
                    image={<JssImage field={mockBlogImages.large} />}
                />

                {/* Below Page Content */}
                <ChildrenAnimalMotif {...mockChildrensAnimalMotif.default} />
                <Footer {...mockFooter.auroraHealthCare} />
            </>
        );
    }
};

export const BlogPageTallImage: Story = {
    render: () => {
        return (
            <>
                {/* AbovePageContent */}
                <Header {...mockHeader.advocateHealthCare} />
                <Breadcrumbs {...mockBreadcrumbs.auroraHealthCare} />

                {/* Main Content */}
                <Article
                    {...mockArticle.withImageRightAligned}
                    image={<JssImage field={mockBlogImages.tall} />}
                />

                {/* Below Page Content */}
                <ChildrenAnimalMotif {...mockChildrensAnimalMotif.default} />
                <Footer {...mockFooter.auroraHealthCare} />
            </>
        );
    }
};

export const BlogPageSmallImage: Story = {
    render: () => {
        return (
            <>
                {/* AbovePageContent */}
                <Header {...mockHeader.advocateHealthCare} />
                <Breadcrumbs {...mockBreadcrumbs.auroraHealthCare} />

                {/* Main Content */}
                <Article
                    {...mockArticle.withImageRightAligned}
                    image={<JssImage field={mockBlogImages.small} />}
                />

                {/* Below Page Content */}
                <ChildrenAnimalMotif {...mockChildrensAnimalMotif.default} />
                <Footer {...mockFooter.auroraHealthCare} />
            </>
        );
    }
};
