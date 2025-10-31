import { ComponentProps } from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

// Types
type Props = ComponentProps<'svg'> & Omit<FontAwesomeIconProps, 'icon'>;

export const KneeDuotone = (props: Props) => {
    const { className, ...rest } = props;

    return (
        <svg
            className={className}
            xmlns='
        http://www.w3.org/2000/svg'
            viewBox='0 0 330 512'
            {...rest}>
            <path
                className='fa-secondary'
                fill='currentColor'
                opacity='.4'
                d='M3.7 201.1c-11 21.9 7.3 47.5 18.3 58.5c3.7 3.7 11 7.3 14.6 11c18.3 11 21.9 3.7 21.9 0s-3.7-7.3-7.3-11C29.3 245 25.7 215.8 25.7 204.8c0-3.7 0-7.3-3.7-11c-7.3-14.6-18.3 7.3-18.3 7.3zM212.2 343.8c0 3.7 0 14.6 3.7 21.9l3.7 3.7L332.9 475.4l11-11c-3.7 0-102.4-124.3-102.4-124.3c-3.7-7.3-3.7-14.6-3.7-18.3c3.7-7.3 0-18.3-14.6-29.3c0 0 0 25.6-7.3 43.9c0 2.4-1.2 4.9-3.7 7.3z'
            />
            <path
                className='fa-primary'
                fill='currentColor'
                d='M65.9 252.3c14.6 3.7 21.9 11 25.6 18.3c0 7.3 7.3 11 14.6 14.6c36.6 18.3 43.9-11 47.5-32.9c0-11-3.7-21.9-7.3-29.3c-11-14.6-14.6-25.6-14.6-32.9v-3.7h0L197.5 0h-51.2l-32.9 109.7c-7.3 21.9-25.6 51.2-36.6 65.8c-3.7 7.3-7.3 11-14.6 11c-29.3 11-29.3 29.3-21.9 43.9c3.7 11 14.6 18.3 25.6 21.9zm135.3 84.1h0c11-21.9 11-36.6 11-36.6c-7.3-47.5-51.2-14.6-51.2-14.6c-36.6 32.9-80.5 0-80.5 0c-43.9-14.6-36.6 25.6-36.6 25.6c3.7 58.5 47.5 43.9 47.5 43.9c25.6-7.3 197.5 160.9 197.5 160.9l36.6-29.3-102.4-95.1c-14.6-21.9-21.9-51.2-21.9-54.9z'
            />
        </svg>
    );
};
