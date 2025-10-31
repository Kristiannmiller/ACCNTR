import { ComponentProps, ReactElement, ReactNode, cloneElement } from 'react';

//Components
import { RichText, Image, Text, ContentContainer, Anchor } from '@/components';

// Styles
import styles from './BioCardDirectory.module.scss';

export type BioCardDirectoryProps = ComponentProps<typeof ContentContainer> & {
    additionalInformationLabel: ReactNode;
    bios: {
        additional?: ReactNode;
        email?: ReactNode;
        fax?: ReactNode;
        image: ReactNode;
        locations?: ReactNode;
        name: ReactNode;
        phone?: ReactNode;
        specialty?: ReactNode;
        title?: ReactNode;
        optionalLink?: ReactNode;
    }[];
    emailLabel: ReactNode;
    faxLabel: ReactNode;
    locationsLabel: ReactNode;
    phoneLabel: ReactNode;
    specialtyLabel: ReactNode;
    titleLabel: ReactNode;
};

export const BioCardDirectory = (props: BioCardDirectoryProps) => {
    const {
        additionalInformationLabel,
        bios,
        className,
        emailLabel,
        faxLabel,
        locationsLabel,
        phoneLabel,
        specialtyLabel,
        titleLabel,
        ...rest
    } = props;

    return (
        <ContentContainer
            className={className}
            {...rest}>
            <div
                className={styles['bio-card-directory']}
                data-testid='bio-card-directory'>
                {bios.map((bio, index) => {
                    const {
                        additional,
                        email,
                        fax,
                        image,
                        locations,
                        name,
                        phone,
                        specialty,
                        title,
                        optionalLink
                    } = bio;
                    return (
                        <div
                            key={index}
                            className={styles['bio-card']}
                            data-testid='bio-card'>
                            {image && (
                                <div
                                    className={styles['bio-card-image']}
                                    data-testid='bio-card-image'>
                                    <Image ratio='A4-portrait'>{image}</Image>
                                </div>
                            )}

                            <div className={styles['bio-card-details']}>
                                {name &&
                                    (optionalLink ? (
                                        <Anchor
                                            fontStyle='smLink'
                                            className={styles['name']}
                                            fontStyleCorp='smLink'>
                                            {cloneElement(
                                                optionalLink as ReactElement,
                                                {
                                                    children: (
                                                        <Text
                                                            asChild
                                                            fontStyle='mdHeading'>
                                                            {name}
                                                        </Text>
                                                    )
                                                }
                                            )}
                                        </Anchor>
                                    ) : (
                                        <Text
                                            className={styles['name']}
                                            fontStyle={'smParagraph'}
                                            fontStyleCorp={'smParagraph'}
                                            tag='p'>
                                            {name}
                                        </Text>
                                    ))}

                                <dl>
                                    {specialty && (
                                        <>
                                            <Text
                                                fontStyle={'smParagraph'}
                                                fontStyleCorp={'smParagraph'}
                                                tag='dt'>
                                                {specialtyLabel}:{' '}
                                            </Text>
                                            <Text
                                                fontStyle={'smParagraph'}
                                                fontStyleCorp={'smParagraph'}
                                                tag='dd'
                                                className={
                                                    styles['text-value']
                                                }>
                                                {specialty}
                                            </Text>
                                        </>
                                    )}

                                    {title && (
                                        <>
                                            <Text
                                                fontStyle={'smParagraph'}
                                                fontStyleCorp={'smParagraph'}
                                                tag='dt'>
                                                {titleLabel}:{' '}
                                            </Text>
                                            <Text
                                                fontStyle={'smParagraph'}
                                                fontStyleCorp={'smParagraph'}
                                                tag='dd'
                                                className={
                                                    styles['text-value']
                                                }>
                                                {title}
                                            </Text>
                                        </>
                                    )}

                                    {phone && (
                                        <>
                                            <Text
                                                fontStyle={'smParagraph'}
                                                fontStyleCorp={'smParagraph'}
                                                tag='dt'>
                                                {phoneLabel}:{' '}
                                            </Text>
                                            <dd>
                                                <Text
                                                    fontStyle={'smLink'}
                                                    fontStyleCorp={'smLink'}
                                                    asChild>
                                                    <a
                                                        href={`tel:${
                                                            (
                                                                phone as ReactElement
                                                            ).props.field.value
                                                        }`}>
                                                        {phone}
                                                    </a>
                                                </Text>
                                            </dd>
                                        </>
                                    )}

                                    {fax && (
                                        <>
                                            <Text
                                                fontStyle={'smParagraph'}
                                                fontStyleCorp={'smParagraph'}
                                                tag='dt'>
                                                {faxLabel}:{' '}
                                            </Text>
                                            <dd>
                                                <Text
                                                    fontStyle={'smLink'}
                                                    fontStyleCorp={'smLink'}
                                                    asChild>
                                                    <a
                                                        href={`fax:${
                                                            (
                                                                fax as ReactElement
                                                            ).props.field.value
                                                        }`}>
                                                        {fax}
                                                    </a>
                                                </Text>
                                            </dd>
                                        </>
                                    )}

                                    {email && (
                                        <>
                                            <Text
                                                fontStyle={'smParagraph'}
                                                fontStyleCorp={'smParagraph'}
                                                tag='dt'>
                                                {emailLabel}:{' '}
                                            </Text>
                                            <dd>
                                                <Text
                                                    fontStyle={'smLink'}
                                                    fontStyleCorp={'smLink'}
                                                    asChild>
                                                    <a
                                                        href={`mailto:${
                                                            (
                                                                email as ReactElement
                                                            ).props.field.value
                                                        }`}>
                                                        {email}
                                                    </a>
                                                </Text>
                                            </dd>
                                        </>
                                    )}

                                    {locations && (
                                        <>
                                            <Text
                                                fontStyle={'smParagraph'}
                                                fontStyleCorp={'smParagraph'}
                                                tag='dt'>
                                                {locationsLabel}:{' '}
                                            </Text>
                                            <RichText as='dd'>
                                                {locations}
                                            </RichText>
                                        </>
                                    )}

                                    {additional && (
                                        <>
                                            <Text
                                                fontStyle={'smParagraph'}
                                                fontStyleCorp={'smParagraph'}
                                                tag='dt'>
                                                {additionalInformationLabel}:{' '}
                                            </Text>
                                            <RichText as='dd'>
                                                {additional}
                                            </RichText>
                                        </>
                                    )}
                                </dl>
                            </div>
                        </div>
                    );
                })}
            </div>
        </ContentContainer>
    );
};
