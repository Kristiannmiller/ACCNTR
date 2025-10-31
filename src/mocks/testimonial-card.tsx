import {
    RichText as JSSRichText,
    Text as JSSText
} from '@sitecore-jss/sitecore-jss-react';

// Types
import { TestimonialCardProps } from '@/components';

const mockTestimonialCardDefault: TestimonialCardProps = {
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
};

export const mockTestimonialCard: Record<
    'default' | 'withoutAuthorTitle',
    TestimonialCardProps
> = {
    default: mockTestimonialCardDefault,
    withoutAuthorTitle: {
        ...mockTestimonialCardDefault,
        testimonialAuthorTitle: null
    }
};
