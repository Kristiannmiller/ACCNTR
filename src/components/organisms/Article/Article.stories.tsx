import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { Article } from '@/components';

// Utils
import {
    classNameRegex,
    getRichTextFieldValue,
    getTextFieldValue
} from '@/utils';

// Mocks
import { mockArticle } from '@/mocks/article';

// Controls
import { textControl } from '@/sb-tools';

export default {
    title: 'Design System/organisms/C60 - News',
    component: Article,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17831-28941&t=US7aFVHHlVNYrKqi-4'
        },
        controls: { include: Object.keys(mockArticle.default) }
    },
    argTypes: {
        publishDate: {
            control: 'text'
        },
        headline: textControl,
        imageCaption: textControl,
        subHeadline: textControl
    }
} satisfies Meta<typeof Article>;

type Story = StoryObj<typeof Article>;

const unitTests: Story['play'] = async ({ canvasElement, args }) => {
    const { getByTestId, queryByTestId } = within(canvasElement);
    const content = getByTestId('article');
    const headline = getByTestId('article-headline');
    const body = getByTestId('article-body');
    const publishDate = getByTestId('article-publish-date');

    // Get the text values from the mock data
    const headlineText = getTextFieldValue(mockArticle.default.headline);
    const bodyText = getRichTextFieldValue(mockArticle.default.mainContent);
    const publishDateText = mockArticle.default.publishDate;

    const classNames = content.getAttribute('class')!;

    // Expect the article to have the correct class names
    await expect(classNames).toMatch(classNameRegex(classNames));

    // Expect the article to have the correct headline
    await expect(headline.innerHTML).toBe(headlineText);

    // Expect the article to have the correct body
    await expect(body.innerHTML).toBe(`<div>${bodyText}</div>`);

    // Expect the article to have the correct publish date
    await expect(publishDate.textContent).toBe(publishDateText);

    // Expect the article to have the correct subheadline
    const subheadline = await queryByTestId('article-subheadline');
    args.subHeadline
        ? await expect(subheadline).toBeInTheDocument()
        : await expect(subheadline).not.toBeInTheDocument();

    // Expect the article to have the correct social media icons
    const socialMediaIcons = await queryByTestId('article-social-media-icons');
    args.socialMediaLinks
        ? await expect(socialMediaIcons).toBeInTheDocument()
        : await expect(socialMediaIcons).not.toBeInTheDocument();

    // Expect there to be an image if the article has an image
    const image = await queryByTestId('article-image');
    args.image
        ? await expect(image).toBeInTheDocument()
        : await expect(image).not.toBeInTheDocument();
};

export const Default: Story = {
    args: mockArticle.default,
    play: unitTests
};

export const ArticleWithImage: Story = {
    args: mockArticle.withImage,
    play: unitTests
};

export const ArticleWithSocialMediaLinks: Story = {
    args: mockArticle.withSocialMediaLinks,
    play: unitTests
};

export const ArticleWithImageAndSocialMediaLinks: Story = {
    args: mockArticle.withImageAndSocialMediaLinks,
    play: unitTests
};

export const ArticleWithImageRightAligned: Story = {
    args: mockArticle.withImageRightAligned,
    play: unitTests
};
