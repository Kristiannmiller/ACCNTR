import { ComponentProps } from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

// Types
type Props = ComponentProps<'svg'> & Omit<FontAwesomeIconProps, 'icon'>;

export const MobilePhysician = (props: Props) => {
    const { className, ...rest } = props;

    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 320 512'
            className={className}
            {...rest}>
            <g className='fa-duotone-group'>
                <path
                    className='fa-secondary'
                    fill='currentColor'
                    d='M0 48L0 464c0 26.5 21.5 48 48 48l224 0c26.5 0 48-21.5 48-48l0-416c0-26.5-21.5-48-48-48L48 0C21.5 0 0 21.5 0 48zM64 64l192 0 0 0 0 320L64 384l0-92.3L64 64zm48 384c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 15.1c0 9.7-7.2 16.9-16 16.9l-64.9 0c-7.9 0-15.1-7.2-15.1-16z'
                />
                <path
                    className='fa-primary'
                    fill='currentColor'
                    d='M105.8 269.3V304c-13 3.9-22.6 16-22.6 30.3c0 17.5 14.2 31.6 31.6 31.6s31.6-14.2 31.6-31.6c0-14.3-9.5-26.4-22.6-30.3v-37.3c1.5-.1 3-.1 4.5-.1h62.7c2 0 3.5 .1 4.5 .1v32.6c-15.1 4-27.1 18.2-27.1 35v13.6c0 2.4 1.5 4.7 3.2 6.4l9 9c3.5 3.6 9.3 3.6 12.8 0c3.6-3.5 3.6-9.3 0-12.8l-6.9-6.4v-9.8c0-10 8.6-18.1 18.1-18.1c10.5 0 18.6 8.1 18.6 18.1v9.8l-6.4 6.4c-3.6 3.5-3.6 9.3 0 12.8c3.5 3.6 9.3 3.6 12.8 0l9-9c1.7-1.7 2.7-4 2.7-6.4v-13.6c0-16.8-11.5-31-27.1-35v-30c15.9 3.9 30.2 11.7 41.8 22.4V64H64v227.8c11.6-10.7 25.9-18.6 41.8-22.5h0zm22.1 65.1c0 7.5-5.5 13.6-13.6 13.6c-7 0-13.6-6-13.6-13.6s6.6-13.6 13.6-13.6c8 0 13.6 6 13.6 13.6zM87.7 167.2c0-39.9 32.4-72.3 72.3-72.3s72.3 32.4 72.3 72.3-32.4 72.3-72.3 72.3-72.3-32.4-72.3-72.3z'
                />
            </g>
        </svg>
    );
};
