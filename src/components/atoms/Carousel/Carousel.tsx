import {
    useEffect,
    useMemo,
    useRef,
    useState,
    ComponentProps,
    ReactElement,
    useId
} from 'react';
import { cx } from 'class-variance-authority';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import {
    Scrollbar,
    A11y,
    Autoplay,
    EffectFade,
    Pagination
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

// Components
import { Container, SvgIcon } from '@/components';

// Styles
import styles from './Carousel.module.scss';
import { carouselControlsCVA } from '@/components/atoms/Carousel/styles';

// Utils
import { shouldUseInverseText } from '@/utils';

// Types
import { BACKGROUND_COLOR_TYPES } from '@/types';

export type CarouselProps<
    T extends { backgroundColor?: BACKGROUND_COLOR_TYPES | null }
> = Omit<ComponentProps<typeof Swiper>, 'slides'> & {
    backgroundColor?: BACKGROUND_COLOR_TYPES;
    slideTimingSeconds?: number;
    slides: ReactElement<T>[];
    controlsClass?: string;
    controlsPosition?: 'static' | 'absolute';
};

export const Carousel = <
    T extends {
        backgroundColor?: BACKGROUND_COLOR_TYPES;
    }
>(
    props: CarouselProps<T>
) => {
    const {
        backgroundColor,
        className,
        slideTimingSeconds = 6,
        slides = [],
        controlsClass,
        controlsPosition = 'absolute',
        ...rest
    } = props;
    const [isPaused, setIsPaused] = useState<boolean>(false);
    const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

    /** This is to prevent issues when multiple carousels are on the same page. */
    const uniqueId = useId().replaceAll(':', '-');

    const delay = slideTimingSeconds * 1000;
    const swiperRef = useRef<SwiperClass | undefined>();
    const firstCarouselControlButtonRef = useRef<HTMLButtonElement | null>(
        null
    );

    const onUpdateTabIndex = (newIndex: number) => {
        if (swiperRef.current) {
            const slides = swiperRef.current.slides;

            slides.forEach((slide, index) => {
                const tabbableElements = slide.querySelectorAll(
                    'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
                );
                const tabIndexValue = index === newIndex ? '0' : '-1';

                // Set the tabindex attribute to the tabbable elements inside the slide
                tabbableElements.forEach((el) =>
                    el.setAttribute('tabindex', tabIndexValue)
                );
            });
        }
    };

    const onTogglePause = () => {
        if (swiperRef.current) {
            const { autoplay } = swiperRef.current;
            if (isPaused) {
                autoplay.start();
                setIsPaused(false);
            } else {
                autoplay.stop();
                setIsPaused(true);
            }
        }
    };

    const onSlidePrev = () => {
        if (swiperRef.current) {
            const slidesCount = swiperRef.current.slides.length;
            const newIndex =
                swiperRef.current.activeIndex === 0
                    ? slidesCount - 1
                    : swiperRef.current.activeIndex - 1;

            swiperRef.current.slideTo(newIndex);
            setActiveSlideIndex(newIndex);
            onUpdateTabIndex(newIndex);
        }
    };

    const onSlideNext = () => {
        if (swiperRef.current) {
            const slidesCount = swiperRef.current.slides.length;
            const newIndex =
                swiperRef.current.activeIndex === slidesCount - 1
                    ? 0
                    : swiperRef.current.activeIndex + 1;

            swiperRef.current.slideTo(newIndex);
            setActiveSlideIndex(newIndex);
            onUpdateTabIndex(newIndex);
        }
    };

    const isInverse = useMemo(() => {
        const activeSlide = slides[activeSlideIndex];
        return shouldUseInverseText(
            activeSlide?.props?.backgroundColor || backgroundColor
        );
    }, [activeSlideIndex, slides, backgroundColor]);

    useEffect(() => {
        const handleSlideChange = () => {
            if (swiperRef.current) {
                onUpdateTabIndex(swiperRef.current.realIndex);
            }
        };

        if (swiperRef.current) {
            swiperRef.current.on('slideChange', handleSlideChange);
        }

        return () => {
            if (swiperRef.current) {
                swiperRef.current.off('slideChange', handleSlideChange);
            }
        };
    }, []);

    useEffect(() => {
        if (swiperRef.current) {
            onUpdateTabIndex(activeSlideIndex);
        }
    }, [activeSlideIndex]);

    useEffect(() => {
        const activeSlide = document.querySelector('.swiper-slide-active');
        const tabbableElements = activeSlide?.querySelectorAll(
            'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
        );

        // Get the last tabbable element inside the active slide
        const lastTabbableElement =
            tabbableElements?.[tabbableElements.length - 1];

        // Get the first button inside the carousel-controls div
        const firstCarouselControlButton =
            firstCarouselControlButtonRef.current;

        // Define the event listener
        const keydownListener = ((e: KeyboardEvent) => {
            // Check if the Tab key was pressed
            if (e.key === 'Tab' && !e.shiftKey) {
                // Prevent the default tab behavior
                e.preventDefault();

                // Set the focus to the first button inside the carousel-controls div
                firstCarouselControlButton?.focus();
            }
        }) as EventListener;

        // Add the event listener to the last tabbable element inside the active slide
        lastTabbableElement?.addEventListener('keydown', keydownListener);

        return () => {
            lastTabbableElement?.removeEventListener(
                'keydown',
                keydownListener
            );
        };
    }, []);
    return (
        <Swiper
            className={className}
            modules={[Scrollbar, A11y, Autoplay, EffectFade, Pagination]}
            effect='fade'
            data-testid='carousel'
            slidesPerView={1}
            loop
            pagination={{
                enabled: true,
                clickable: true,
                el: `.pagination-${uniqueId}`,
                renderBullet: () =>
                    `<button class="${styles['dot']}" type="button" title="slide navigation" />`,
                bulletClass: styles['dot'],
                bulletActiveClass: styles['dot-active']
            }}
            autoHeight
            autoplay={{
                delay
            }}
            onSwiper={(swiper) => {
                swiperRef.current = swiper;
                swiper.on('slideChange', () => {
                    setActiveSlideIndex(swiper.realIndex);
                    onUpdateTabIndex(swiper.realIndex);
                });

                const { autoplay, pagination } = swiper;

                const handleBulletClick = () => {
                    if (autoplay) {
                        autoplay.stop();
                        setIsPaused(true);
                    }
                };

                if (pagination?.bullets) {
                    pagination.bullets.forEach((bullet) => {
                        bullet.addEventListener('click', handleBulletClick);
                    });

                    return () => {
                        pagination.bullets.forEach((bullet) => {
                            bullet.removeEventListener(
                                'click',
                                handleBulletClick
                            );
                        });
                    };
                }
            }}
            {...rest}>
            {/* Slides */}
            {slides.map((slide, idx) => (
                <SwiperSlide
                    key={idx}
                    data-testid='carousel-slide'>
                    {slide}
                </SwiperSlide>
            ))}

            {/* Controls */}
            {!!slides?.length && (
                <Container
                    className={cx({
                        [styles['controls-absolute']]:
                            controlsPosition === 'absolute'
                    })}
                    backgroundColor={backgroundColor}>
                    <div>
                        <div
                            className={cx(
                                carouselControlsCVA({
                                    isInverse
                                }),
                                controlsClass
                            )}>
                            {/* Previous slide CTA */}
                            <button
                                onClick={onSlidePrev}
                                title='Previous slide'
                                ref={firstCarouselControlButtonRef}
                                type='button'
                                data-testid='carousel-previous-slide-btn'>
                                <SvgIcon icon='chevronLeftSharp' />
                            </button>

                            {/* Pause/Play autoplay CTA */}
                            <button
                                onClick={onTogglePause}
                                title={isPaused ? 'Play' : 'Pause'}
                                type='button'
                                data-testid='carousel-pause-play-btn'>
                                {isPaused ? (
                                    <SvgIcon icon={'play'} />
                                ) : (
                                    <SvgIcon icon={'pause'} />
                                )}
                            </button>

                            {/* Custom dot placement */}
                            <div
                                className={cx(
                                    `pagination-${uniqueId}`,
                                    styles['pagination']
                                )}
                            />

                            {/* Next slide CTA */}
                            <button
                                onClick={onSlideNext}
                                title='Next slide'
                                type='button'
                                data-testid='carousel-next-slide-btn'>
                                <SvgIcon icon='chevronRightSharp' />
                            </button>
                        </div>
                    </div>
                </Container>
            )}
        </Swiper>
    );
};
