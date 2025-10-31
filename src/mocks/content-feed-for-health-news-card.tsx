// Types
import { ContentFeedForHealthNewsCardProps } from '@/components';

const contentFeedForHealthNewsCard: ContentFeedForHealthNewsCardProps = {
    excerpt: '',
    headline: '',
    imageSrc: '',
    shouldHideImagesOnMobile: false,
    shouldHideSupportCopyOnCards: false,
    url: ''
};

export const mockContentFeedForHealthNewsCard: Record<
    'one' | 'two' | 'three' | 'four' | 'five',
    ContentFeedForHealthNewsCardProps
> = {
    one: {
        ...contentFeedForHealthNewsCard,
        excerpt:
            'While egg prices soar, consider eating or baking with these foods instead.\n',
        headline:
            'Cutting back on buying expensive eggs? Try these alternatives.',
        url: 'https://www.ahchealthenews.com/2023/01/20/egg-alternatives/',
        imageSrc:
            'https://ahchealthenewscdn.azureedge.net/wp-content/uploads/2023/01/AdobeStock_77428784-260x150.jpeg'
    },
    two: {
        ...contentFeedForHealthNewsCard,
        excerpt: 'One man shares the key to his successful weight loss.\n',
        headline: 'Looking to lose weight? Consider this.',
        url: 'https://www.ahchealthenews.com/2022/08/08/looking-to-lose-weight-consider-this/',
        imageSrc:
            'https://ahchealthenewscdn.azureedge.net/wp-content/uploads/2022/08/AdobeStock_314327563-e1659649129484-260x150.jpeg'
    },
    three: {
        ...contentFeedForHealthNewsCard,
        excerpt:
            'Learn how to raise your &#8220;good&#8221; cholesterol. Learn how to raise your &#8220;good&#8221; cholesterol. Learn how to raise your &#8220;good&#8221; cholesterol. Learn how to raise your &#8220;good&#8221; cholesterol. Learn how to raise your &#8220;good&#8221; cholesterol. \n',
        headline: '6 ways to improve your good cholesterol',
        url: 'https://www.ahchealthenews.com/2022/08/05/increase-hdl-good-cholesterol/',
        imageSrc:
            'https://ahchealthenewscdn.azureedge.net/wp-content/uploads/2020/08/AdobeStock_341281610-260x150.jpeg'
    },
    four: {
        ...contentFeedForHealthNewsCard,
        excerpt: 'You could be at increased risk for repeat heart attacks.\n',
        headline: 'The link between the location of fat and your heart',
        url: 'https://www.ahchealthenews.com/2022/02/08/the-link-between-your-heart-and-the-location-of-your-fat/',
        imageSrc:
            'https://ahchealthenewscdn.azureedge.net/wp-content/uploads/2020/02/AdobeStock_308379255-260x150.jpeg'
    },
    five: {
        ...contentFeedForHealthNewsCard,
        excerpt: 'An expert explains what cheeses to avoid. \n',
        headline: 'We’ve got great news for cheese lovers',
        url: 'https://www.ahchealthenews.com/2021/12/29/love-cheese-weve-got-great-news-for-you/',
        imageSrc:
            'https://ahchealthenewscdn.azureedge.net/wp-content/uploads/2021/12/AdobeStock_204613500-260x150.jpeg'
    }
};
