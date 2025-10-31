import {
    Image as JSSImage,
    RichText as JSSRichText,
    Text as JSSText,
    Link as JSSLink
} from '@sitecore-jss/sitecore-jss-react';

// Types
import { SideMediaAssetProps } from '@/components';

// Mocks
import { mockImages } from '@/mocks/images';
import { mockSitecoreLink } from '@/mocks/sitecore';
import { mockYoutubeEmbed } from '@/mocks/youtube-embed';

const mockSideMediaAssetDefault: SideMediaAssetProps = {
    headline: (
        <JSSText
            field={{
                value: 'Side Media Asset'
            }}
        />
    ),
    headlineTag: 'p',
    supportCopy: (
        <JSSRichText
            field={{
                value: '<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium <a href="#">voluptatum deleniti atque corrupti</a> quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellnetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis us, omnis voluptas assumenda est, omnis dolor repellnetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperioreAt vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo </p><p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, <a href="#">id est laborum et dolorum fuga</a>. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellnetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. At vero eos et accusamus <a href="#">et iusto odio dignissimos</a> ducimus qui blanditiis us, omnis voluptas assumenda est, omnis dolor repellnetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperioreAt vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo </p><p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellnetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis us, omnis voluptas assumenda est, omnis dolor repellnetur a sapiente delectus, <a href="#">ut aut reiciendis voluptatibus maiores</a> alias consequatur aut perferendis doloribus asperioreAt vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo </p>'
            }}
        />
    ),
    image: <JSSImage field={{ value: mockImages[1] }} />,
    videoId: undefined,
    imageCaption: (
        <JSSRichText
            field={{
                value: '<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores <a href="#">et quas molestias excepturi</a> sint occaecati cupiditate.</p>'
            }}
        />
    ),
    imageCtaLink: <JSSLink field={{ value: mockSitecoreLink }} />,
    imageSide: 'right',
    isImageBorderOn: false,
    imageContainerSize: 'fifty'
};

export const mockSideMediaAsset: Record<
    'default' | 'withVideo' | 'noOptionalProps',
    SideMediaAssetProps
> = {
    default: mockSideMediaAssetDefault,
    withVideo: {
        ...mockSideMediaAssetDefault,
        headlineTag: 'h2',
        image: undefined,
        videoId: mockYoutubeEmbed.videoId
    },
    noOptionalProps: {
        ...mockSideMediaAssetDefault,
        headline: undefined,
        imageCaption: undefined,
        imageCtaLink: undefined
    }
};
