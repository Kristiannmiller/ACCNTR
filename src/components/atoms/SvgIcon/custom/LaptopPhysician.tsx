import { ComponentProps } from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

// Types
type Props = ComponentProps<'svg'> & Omit<FontAwesomeIconProps, 'icon'>;

export const LaptopPhysician = (props: Props) => {
    const { className, ...rest } = props;

    return (
        <svg
            className={className}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 734 512'
            {...rest}>
            <g className='fa-duotone-group'>
                <path
                    className='fa-secondary'
                    fill='currentColor'
                    d='M.5 420.5l0 18.3c0 40.3 33 73.3 73.3 73.3l586.5 0c40.3 0 73.3-33 73.3-73.3l0-18.3c0-9-8.2-18.3-18.3-18.3l-696.4 0c-10.1 0-18.3 8.2-18.3 18.3zM73.8 55l0 311.6 73.3 0 0-293.2 439.8 0 0 293.2 73.3 0 0-311.6c0-30.2-24.7-55-55-55L128.8 0c-30.2 0-55 24.7-55 55z'
                />
                <path
                    className='fa-primary'
                    fill='currentColor'
                    d='M404.9 256.8h4.2v30.5c-14.1 3.8-25.2 17-25.2 32.6v12.6c0 2.2 1.4 4.4 3 6l8.4 8.5c3.3 3.3 8.6 3.3 11.9 0s3.3-8.6 0-11.9l-6.4-6v-9.2c0-9.3 8-16.8 16.8-16.8s17.3 7.6 17.3 16.8v9.2l-6 6c-3.3 3.3-3.3 8.6 0 11.9s8.6 3.3 11.9 0l8.4-8.5c1.6-1.6 2.5-3.8 2.5-6v-12.6c0-15.7-10.8-29-25.2-32.6v-28.1c38.6 9.4 67.4 44 67.4 86.1v4.2c0 9.3-7.6 16.8-16.8 16.8H275.1c-9.3 0-16.8-7.6-16.8-16.8v-4.2c0-41.7 28.6-76.6 67.4-86.1v32.4c-12.1 3.7-21.1 14.9-21.1 28.3s13.2 29.6 29.4 29.6 29.4-13.3 29.4-29.6-8.9-24.6-21.1-28.3v-34.8h62.7-.1zm-84.1 63.3c0-7 6.1-12.6 12.6-12.6s12.6 5.6 12.6 12.6-5.2 12.6-12.6 12.6-12.6-5.6-12.6-12.6zM308.7 164.4c0-37.1 30.1-67.4 67.4-67.4s67.4 30.1 67.4 67.4-30.1 67.4-67.4 67.4-67.4-30.1-67.4-67.4z'
                />
            </g>
        </svg>
    );
};
