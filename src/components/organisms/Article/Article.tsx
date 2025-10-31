import { cloneElement, ComponentProps, ReactElement, ReactNode } from 'react';
import { cx } from 'class-variance-authority';

// Components
import {
    Anchor,
    Container,
    MediaWithCaption,
    RichText,
    SvgIcon,
    SvgIconType,
    Text
} from '@/components';

// Styles
import styles from './Article.module.scss';

export type ArticleProps = ComponentProps<'article'> &
    ComponentProps<typeof Container> & {
        headline: ReactNode;
        subHeadline: ReactNode;
        publishDate: string;
        mainContent: ReactNode;
        shouldDisplaySocialMediaIcons?: boolean;
        socialShareLabel?: string;
        shouldHideSubHeadline?: boolean;
        image?: ReactNode;
        imageCaption?: ReactNode;
        imageStyle?: 'fullWidth' | 'floatRight';
        socialMediaLinks?: {
            icon: SvgIconType;
            link: ReactNode;
        }[];
    };

export const Article = (props: ArticleProps) => {
    const {
        className,
        headline,
        image,
        imageCaption,
        imageStyle = 'fullWidth',
        mainContent,
        publishDate,
        socialShareLabel = 'Share this story:',
        shouldDisplaySocialMediaIcons,
        shouldHideSubHeadline,
        socialMediaLinks,
        subHeadline,
        ...rest
    } = props;

    return (
        <Container
            tag='article'
            className={className}
            data-testid='article'
            {...rest}>
            <div className={styles['content-wrapper']}>
                {/* Headline */}
                <Text
                    tag='h1'
                    className={styles['article-headline']}
                    data-testid='article-headline'>
                    {headline}
                </Text>

                {/* SubHeadline */}
                {!shouldHideSubHeadline && (
                    <Text
                        tag='h2'
                        className={styles['article-sub-headline']}
                        data-testid='article-subheadline'>
                        {subHeadline}
                    </Text>
                )}

                {/* PublishDate */}
                <Text asChild>
                    <time
                        data-testid='article-publish-date'
                        dateTime={publishDate}>
                        {publishDate}
                    </time>
                </Text>

                {/* SocialMedia Icons */}
                {shouldDisplaySocialMediaIcons && (
                    <span
                        data-testid='article-social-media-icons'
                        className={styles['social-media']}>
                        {socialShareLabel}
                        {socialMediaLinks?.map((socialMediaLink, idx) => {
                            const { link, icon } = socialMediaLink;

                            return (
                                <Anchor key={idx}>
                                    {cloneElement(link as ReactElement, {
                                        children: (
                                            <SvgIcon
                                                className={
                                                    styles['social-icon']
                                                }
                                                icon={icon as SvgIconType}
                                            />
                                        )
                                    })}
                                </Anchor>
                            );
                        })}
                    </span>
                )}

                <div>
                    {/* Image and Caption */}
                    {image && (
                        <MediaWithCaption
                            className={cx(styles['article-image'], {
                                [styles['article-image-full-width']]:
                                    imageStyle === 'fullWidth',
                                [styles['article-image-float-right']]:
                                    imageStyle === 'floatRight'
                            })}
                            data-testid='article-image'
                            image={image}
                            imageSide={
                                imageStyle === 'floatRight'
                                    ? 'right'
                                    : undefined
                            }
                            imageContainerSize={
                                imageStyle === 'floatRight'
                                    ? 'thirty'
                                    : undefined
                            }
                            imageCaption={imageCaption}
                        />
                    )}

                    {/* Main Content */}
                    <RichText
                        className={styles['article-text']}
                        data-testid='article-body'>
                        {mainContent}
                    </RichText>
                </div>
            </div>
        </Container>
    );
};
