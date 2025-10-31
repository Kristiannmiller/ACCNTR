import { ComponentProps } from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

// Types
type Props = ComponentProps<'svg'> & Omit<FontAwesomeIconProps, 'icon'>;

export const UserDoctorMessageDuotone = (props: Props) => {
    const { className, ...rest } = props;

    return (
        <svg
            className={className}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 640 512'
            {...rest}>
            <g className='fa-duotone-group'>
                <path
                    className='fa-secondary'
                    fill='currentColor'
                    d='M0 482.3c0-81 54-149.4 128-171.1l0 59.1c-23.1 6.9-40 28.3-40 53.7c0 30.9 25.1 56 56 56s56-25.1 56-56c0-25.4-16.9-46.8-40-53.7l0-65.4c6-.6 12.1-.9 18.3-.9l91.4 0c6.2 0 12.3 .3 18.3 .9l0 57.1c-27.6 7.1-48 32.2-48 62l0 40c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l0-24c0-17.7 14.3-32 32-32s32 14.3 32 32l0 24c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-40c0-29.8-20.4-54.9-48-62l0-50.8c74 21.7 128 90.1 128 171.1c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM96 128c0-45.7 24.4-88 64-110.9C179.8 5.7 201.9 0 224 0s44.2 5.7 64 17.1C327.6 40 352 82.3 352 128s-24.4 88-64 110.9s-88.4 22.9-128 0S96 173.7 96 128zm24 296c0-13.3 10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24s-24-10.7-24-24z'
                />
                <path
                    className='fa-primary'
                    fill='currentColor'
                    d='M384 48c0-26.5 21.5-48 48-48L592 0c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-48 0-83.2 62.4c-2.4 1.8-5.7 2.1-8.4 .8s-4.4-4.1-4.4-7.2l0-56-16 0c-26.5 0-48-21.5-48-48l0-128z'
                />
            </g>
        </svg>
    );
};
