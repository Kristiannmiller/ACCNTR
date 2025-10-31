import {
    RichText as JSSRichText,
    Text as JSSText
} from '@sitecore-jss/sitecore-jss-react';

// Types
import { TestimonialsProps } from '@/components';

const mockTestimonialsDefault: TestimonialsProps = {
    headline: (
        <JSSText
            field={{
                value: 'Testimonials'
            }}
        />
    ),
    supportCopy: (
        <JSSRichText
            field={{
                value: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.</p>`
            }}
        />
    ),
    backgroundColor: 'whiteSmoke',
    numberOfColumns: '2',
    headlineTag: 'h2',
    contentAlignment: 'center',
    expandButtonText: 'Expand',
    expandButtonAlignment: 'center',
    showOnlyFirstRowOnLoad: false,
    testimonialCards: [
        {
            testimonialText: (
                <JSSRichText
                    field={{
                        value: `“Gene not only brings readers behind-the-scenes of a major healthcare system's work to expand access to healthcare and confront an unprecedented pandemic, but also presents smart, bipartisan policy prescriptions to achieve the transformation our nation desperately needs.”`
                    }}
                />
            ),
            testimonialAuthor: (
                <JSSText
                    field={{
                        value: 'Erskine Bowles'
                    }}
                />
            ),
            testimonialAuthorTitle: (
                <JSSText
                    field={{
                        value: 'Former White House chief of staff and former president, University of North Carolina'
                    }}
                />
            )
        },
        {
            testimonialText: (
                <JSSRichText
                    field={{
                        value: `“Gene Woods gives us an incredible balance of technical expertise, world class leadership and unmatched authenticity with his book about healthcare. … Whether you're an experienced executive or a student dreaming of a better future, this book will inspire you on the art of the possible while providing hope for the future of America’s healthcare system.”`
                    }}
                />
            ),
            testimonialAuthor: (
                <JSSText
                    field={{
                        value: 'Lorem Ipsum'
                    }}
                />
            ),
            testimonialAuthorTitle: (
                <JSSText
                    field={{
                        value: 'President, CEO and chairman, Lowe’s Home Improvement'
                    }}
                />
            )
        },
        {
            testimonialText: (
                <JSSRichText
                    field={{
                        value: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.`
                    }}
                />
            ),
            testimonialAuthor: (
                <JSSText
                    field={{
                        value: 'Lorem Ipsum'
                    }}
                />
            ),
            testimonialAuthorTitle: (
                <JSSText
                    field={{
                        value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
                    }}
                />
            )
        },
        {
            testimonialText: (
                <JSSRichText
                    field={{
                        value: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.`
                    }}
                />
            ),
            testimonialAuthor: (
                <JSSText
                    field={{
                        value: 'Dolor Sit'
                    }}
                />
            ),
            testimonialAuthorTitle: (
                <JSSText
                    field={{
                        value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna'
                    }}
                />
            )
        },
        {
            testimonialText: (
                <JSSRichText
                    field={{
                        value: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”`
                    }}
                />
            ),
            testimonialAuthor: (
                <JSSText
                    field={{
                        value: 'Name goes here'
                    }}
                />
            ),
            testimonialAuthorTitle: (
                <JSSText
                    field={{
                        value: 'Title and or association'
                    }}
                />
            )
        },
        {
            testimonialText: (
                <JSSRichText
                    field={{
                        value: `"Gene not only brings readers behind-the-scenes of a major healthcare system's work to expand access to healthcare and confront an unprecedented pandemic, but also presents smart, bipartisan policy prescriptions to achieve the transformation our nation desperately needs."`
                    }}
                />
            ),
            testimonialAuthor: (
                <JSSText
                    field={{
                        value: 'Erskine Bowles'
                    }}
                />
            ),
            testimonialAuthorTitle: (
                <JSSText
                    field={{
                        value: 'Former White House chief of staff and former president, University of North Carolina'
                    }}
                />
            )
        },
        {
            testimonialText: (
                <JSSRichText
                    field={{
                        value: `“Gene Woods gives us an incredible balance of technical expertise, world class leadership and unmatched authenticity with his book about healthcare. … Whether you're an experienced executive or a student dreaming of a better future, this book will inspire you on the art of the possible while providing hope for the future of America’s healthcare system.”`
                    }}
                />
            ),
            testimonialAuthor: (
                <JSSText
                    field={{
                        value: 'Lorem Ipsum'
                    }}
                />
            ),
            testimonialAuthorTitle: (
                <JSSText
                    field={{
                        value: ''
                    }}
                />
            )
        },
        {
            testimonialText: (
                <JSSRichText
                    field={{
                        value: `"Gene not only brings readers behind-the-scenes of a major healthcare system's work to expand access to healthcare and confront an unprecedented pandemic, but also presents smart, bipartisan policy prescriptions to achieve the transformation our nation desperately needs."`
                    }}
                />
            ),
            testimonialAuthor: (
                <JSSText
                    field={{
                        value: 'Erskine Bowles'
                    }}
                />
            ),
            testimonialAuthorTitle: (
                <JSSText
                    field={{
                        value: 'Former White House chief of staff and former president, University of North Carolina'
                    }}
                />
            )
        },
        {
            testimonialText: (
                <JSSRichText
                    field={{
                        value: `test`
                    }}
                />
            ),
            testimonialAuthor: (
                <JSSText
                    field={{
                        value: 'Lorem Ipsum'
                    }}
                />
            ),
            testimonialAuthorTitle: (
                <JSSText
                    field={{
                        value: 'President, CEO and chairman, Lowe’s Home Improvement'
                    }}
                />
            )
        }
    ]
};

export const mockTestimonials: Record<
    'default' | 'showOnlyFirstRowOnLoad',
    TestimonialsProps
> = {
    default: mockTestimonialsDefault,
    showOnlyFirstRowOnLoad: {
        ...mockTestimonialsDefault,
        showOnlyFirstRowOnLoad: true
    }
};
