import {
    Image as JSSImage,
    RichText as JSSRichText,
    Text as JSSText,
    Link as JSSLink
} from '@sitecore-jss/sitecore-jss-react';

// Mocks
import {
    mockSitecoreLink,
    mockSitecoreLongerText,
    mockSitecoreRichText,
    articleMockSitecoreText
} from '@/mocks/sitecore';
import { mockBlogImages, mockImages } from '@/mocks/images';

// Types
import { ArticleProps } from '@/components';

const mockArticleDefault: ArticleProps = {
    headline: <JSSText field={articleMockSitecoreText} />,
    subHeadline: <JSSText field={mockSitecoreLongerText} />,
    publishDate: 'June 9, 2016',
    mainContent: <JSSRichText field={mockSitecoreRichText} />,
    image: undefined,
    shouldDisplaySocialMediaIcons: undefined,
    socialShareLabel: 'Share this story:'
};

const mockArticleWithImage: ArticleProps = {
    ...mockArticleDefault,
    image: <JSSImage field={mockImages[2]} />,
    imageCaption: <JSSText field={articleMockSitecoreText} />
};

const mockSocialMediaLinks: ArticleProps = {
    ...mockArticleDefault,
    shouldDisplaySocialMediaIcons: true,
    socialMediaLinks: [
        {
            icon: 'facebook',
            link: <JSSLink field={mockSitecoreLink} />
        },
        {
            icon: 'twitter',
            link: <JSSLink field={mockSitecoreLink} />
        },
        {
            icon: 'linkedin',
            link: <JSSLink field={mockSitecoreLink} />
        },
        {
            icon: 'envelope',
            link: <JSSLink field={mockSitecoreLink} />
        }
    ]
};

const withImageAndSocialMediaLinks: ArticleProps = {
    ...mockArticleDefault,
    ...mockSocialMediaLinks,
    ...mockArticleWithImage,
    shouldDisplaySocialMediaIcons: true
};

const withImageRightAligned: ArticleProps = {
    ...withImageAndSocialMediaLinks,
    image: <JSSImage field={mockBlogImages.standard} />,
    imageStyle: 'floatRight',
    imageCaption: (
        <JSSRichText
            field={{
                value: '<p>Jim credits the quick response times of paramedics and two hospitals for saving his life after a massive stroke.</p>'
            }}
        />
    )
};

export const mockArticle: Record<
    | 'default'
    | 'withImage'
    | 'withSocialMediaLinks'
    | 'withImageAndSocialMediaLinks'
    | 'withImageRightAligned',
    ArticleProps
> = {
    default: mockArticleDefault,
    withImage: mockArticleWithImage,
    withSocialMediaLinks: mockSocialMediaLinks,
    withImageAndSocialMediaLinks: withImageAndSocialMediaLinks,
    withImageRightAligned: withImageRightAligned
};
