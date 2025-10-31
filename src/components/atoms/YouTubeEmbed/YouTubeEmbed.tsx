import { ComponentProps, useEffect } from 'react';
import { cx } from 'class-variance-authority';

// Styles
import styles from './YouTubeEmbed.module.scss';

declare global {
    interface Window {
        onYouTubeIframeAPIReady?(): void;
        YT?: typeof YT;
    }
}

export type YouTubeEmbedProps = ComponentProps<'div'> & {
    videoId: string;
    onReady?(player: YT.Player): void;
    isActive?: boolean;
};

const HOST = 'https://www.youtube-nocookie.com';
const YT_API_URL = 'https://www.youtube.com/iframe_api';
const YT_OPTIONS = '?controls=1&modestbranding=1&rel=0&showinfo=0';

export const YouTubeEmbed = (props: YouTubeEmbedProps) => {
    const { className, videoId, onReady, isActive, ...rest } = props;

    const getYoutubeEmbedQuery = (videoId: string) => {
        const domain = 'https://www.youtube-nocookie.com/embed/';
        return `${domain}${videoId}${YT_OPTIONS}`;
    };

    useEffect(() => {
        if (isActive && onReady && window !== undefined) {
            const onPlayerReady = (event: { target: YT.Player }) => {
                onReady(event.target);
            };

            const onYouTubeIframeAPIReady = () => {
                new window.YT.Player(`youtube-player-${videoId}`, {
                    events: {
                        onReady: onPlayerReady
                    },
                    videoId,
                    host: HOST,
                    playerVars: {
                        controls: 1,
                        modestbranding: 1,
                        rel: 0,
                        showinfo: 0
                    }
                });
            };

            if (window.YT && window.YT.Player) {
                onYouTubeIframeAPIReady();
            } else {
                const tag = document.createElement('script');
                tag.src = YT_API_URL;
                const firstScriptTag =
                    document.getElementsByTagName('script')[0];
                firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);

                window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
            }
        }
    }, [isActive, videoId, onReady]);

    return (
        <div
            className={cx(styles['youtube-embed-base'], className)}
            data-testid='youtube-embed'
            id={`youtube-player-${videoId}`}
            {...rest}>
            <iframe
                src={getYoutubeEmbedQuery(videoId)}
                allowFullScreen
                title='Embedded youtube'
            />
        </div>
    );
};
