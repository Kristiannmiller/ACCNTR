import {
    useState,
    useEffect,
    useRef,
    ReactNode,
    cloneElement,
    ReactElement
} from 'react';
import SwiperCore from 'swiper';
import { Navigation, Thumbs, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { cx } from 'class-variance-authority';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

// Components
import { SvgIcon, YouTubeEmbed, Text, RichText } from '@/components';

// Styles
import styles from './MediaGalleryCarousel.module.scss';

// Types
export type MediaItem = {
    headline?: ReactNode;
    image?: ReactNode;
    supportCopy?: ReactNode;
    videoId?: string;
    /** deprecated */
    videoIdField?: ReactNode;
};

export type MediaGalleryCarouselProps = {
    shouldHideNavigation?: boolean;
    shouldHideThumbnails?: boolean;
    slides: MediaItem[];
};

SwiperCore.use([Navigation, Thumbs]);

const NUMBER_THUMBNAILS_SHOWN_BEFORE_SHOWING_SLIDE_CONTROLS = 4;

export const MediaGalleryCarousel = (props: MediaGalleryCarouselProps) => {
    const { slides, shouldHideThumbnails, shouldHideNavigation } = props;
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
    const [mainSwiper, setMainSwiper] = useState<SwiperCore>();
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const videoPlayers = useRef<{ [key: number]: YT.Player | null }>({});

    const handleVideoReady = (index: number) => (player: YT.Player) => {
        videoPlayers.current[index] = player;
    };

    const stopActiveVideo = () => {
        const activePlayer = videoPlayers.current[activeIndex];
        if (activePlayer) {
            activePlayer.stopVideo();
        }
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowLeft') {
                mainSwiper?.slidePrev();
            } else if (event.key === 'ArrowRight') {
                mainSwiper?.slideNext();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [mainSwiper]);

    const handleThumbnailKeyDown = (
        event: { key: string; preventDefault: () => void },
        idx: number
    ) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onSlideChange(idx);
        }
    };

    const onSlideChange = (idx: number) => {
        setActiveIndex(idx);
        mainSwiper?.slideTo(idx);
        thumbsSwiper?.slideTo(idx);
    };

    return (
        <div
            className={styles['media-gallery-carousel-base']}
            data-testid='media-gallery-carousel'
            tabIndex={0}>
            <div className={styles['active-slide-container']}>
                {/* Active Slide */}
                <Swiper
                    spaceBetween={10}
                    modules={[Thumbs, A11y]}
                    autoHeight
                    onSwiper={setMainSwiper}
                    navigation={{
                        prevEl: '.prev',
                        nextEl: '.next'
                    }}
                    thumbs={{
                        swiper:
                            thumbsSwiper && !thumbsSwiper.destroyed
                                ? thumbsSwiper
                                : null
                    }}
                    onSlideChange={({ activeIndex }) => {
                        stopActiveVideo();
                        setActiveIndex(activeIndex);
                    }}>
                    {slides.map((item, idx) => {
                        return (
                            <SwiperSlide key={idx}>
                                <MediaGallerySlide
                                    {...item}
                                    isActive={idx === activeIndex}
                                    isNextDisabled={idx === slides.length - 1}
                                    isPrevDisabled={idx === 0}
                                    onReady={handleVideoReady(idx)}
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>

            {/* Thumbnails */}
            {!shouldHideThumbnails && (
                <div className={styles['thumbnail-container']}>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={24}
                        slidesPerView={
                            NUMBER_THUMBNAILS_SHOWN_BEFORE_SHOWING_SLIDE_CONTROLS
                        }
                        modules={[Thumbs, A11y]}
                        autoHeight
                        navigation={
                            slides.length >
                                NUMBER_THUMBNAILS_SHOWN_BEFORE_SHOWING_SLIDE_CONTROLS && {
                                prevEl: '.prev-thumb',
                                nextEl: '.next-thumb'
                            }
                        }
                        className={styles['thumbnail-swiper']}>
                        {/* Thumbnail slides */}
                        {slides.map((item, idx) => {
                            const { videoId, image } = item;

                            return (
                                <SwiperSlide
                                    key={idx}
                                    tabIndex={0}
                                    onKeyDown={(e) =>
                                        handleThumbnailKeyDown(e, idx)
                                    }
                                    onClick={() => onSlideChange(idx)}
                                    className={cx(styles['swiper-slide'], {
                                        [styles['active-thumb']]:
                                            idx === activeIndex,
                                        [styles['inactive-thumb']]:
                                            idx !== activeIndex
                                    })}>
                                    {videoId ? (
                                        <div
                                            className={
                                                styles['thumbnail-with-icon']
                                            }
                                            data-testid='media-gallery-carousel-thumbnail'>
                                            <img
                                                src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
                                                alt='Video thumbnail'
                                                className={styles['thumbnail']}
                                            />
                                            {idx !== activeIndex && (
                                                <SvgIcon
                                                    className={
                                                        styles['play-icon']
                                                    }
                                                    icon='circlePlay'
                                                    color='white'
                                                />
                                            )}
                                        </div>
                                    ) : (
                                        image &&
                                        cloneElement(image as ReactElement, {
                                            className: styles['thumbnail'],
                                            'data-testid':
                                                'media-gallery-carousel-thumbnail'
                                        })
                                    )}
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>

                    {/* Thumbnail navigations */}
                    {!shouldHideNavigation &&
                        slides.length >
                            NUMBER_THUMBNAILS_SHOWN_BEFORE_SHOWING_SLIDE_CONTROLS && (
                            <>
                                <button
                                    className={cx(
                                        styles['swiper-thumb-button-prev'],
                                        'prev-thumb'
                                    )}
                                    disabled={activeIndex === 0}
                                    tabIndex={0}>
                                    <SvgIcon
                                        icon='chevronLeftSharp'
                                        color='denimBlue'
                                        role='button'
                                    />
                                </button>
                                <button
                                    className={cx(
                                        styles['swiper-thumb-button-next'],
                                        'next-thumb'
                                    )}
                                    disabled={activeIndex === slides.length - 1}
                                    tabIndex={0}>
                                    <SvgIcon
                                        icon='chevronRightSharp'
                                        color='denimBlue'
                                        role='button'
                                    />
                                </button>
                            </>
                        )}
                </div>
            )}
        </div>
    );
};
MediaGalleryCarousel.displayName = 'MediaGalleryCarousel';

// Types
type MediaGallerySlideProps = {
    headline?: React.ReactNode;
    image?: React.ReactNode;
    supportCopy?: React.ReactNode;
    videoId?: string;
    isActive?: boolean;
    onReady?(player: YT.Player): void;
    isNextDisabled?: boolean;
    isPrevDisabled?: boolean;
};

export const MediaGallerySlide = (props: MediaGallerySlideProps) => {
    const {
        headline,
        image,
        isActive,
        isNextDisabled,
        isPrevDisabled,
        onReady,
        supportCopy,
        videoId
    } = props;

    const tabIndex = isActive ? 0 : -1;
    return (
        <figure>
            <div className={styles['media-container']}>
                {videoId ? (
                    <div>
                        <YouTubeEmbed
                            videoId={videoId}
                            onReady={onReady}
                            isActive={!!isActive}
                            tabIndex={tabIndex}
                        />
                    </div>
                ) : (
                    image &&
                    cloneElement(image as ReactElement, {
                        tabIndex
                    })
                )}
                <button
                    className={cx(styles['swiper-button-prev'], 'prev')}
                    data-testid='media-gallery-carousel-arrow-left'
                    disabled={isPrevDisabled}>
                    <SvgIcon
                        icon='chevronLeftSharp'
                        color='white'
                    />
                </button>
                <button
                    className={cx(styles['swiper-button-next'], 'next')}
                    data-testid='media-gallery-carousel-arrow-right'
                    disabled={isNextDisabled}>
                    <SvgIcon
                        icon='chevronRightSharp'
                        color='white'
                    />
                </button>
            </div>
            <figcaption className={styles['slide-caption']}>
                {headline && (
                    <Text
                        className={styles['slide-headline']}
                        tag='p'
                        data-testid='media-gallery-carousel-slide-headline'
                        fontStyle='smParagraph'>
                        {headline}
                    </Text>
                )}
                {supportCopy && (
                    <RichText data-testid='media-gallery-carousel-slide-support-copy'>
                        {supportCopy}
                    </RichText>
                )}
            </figcaption>
        </figure>
    );
};
MediaGallerySlide.displayName = 'MediaGallerySlide';
