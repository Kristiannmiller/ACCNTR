import {
    Text as JSSText,
    Link as JSSLink
} from '@sitecore-jss/sitecore-jss-react';

// Types
import { FormDataProps } from '@/components/atoms/Form/StorybookOnlyForm';

const mockFormDefault: FormDataProps = {
    formName: <JSSText field={{ value: 'ahcContactUs' }} />,
    thankYouPageUrl: <JSSLink field={{ href: '/thanks-for-submission/' }} />,
    formioDomain: 'https://forms2-prod.ahcdigital.org/aah'
};

export const mockForm: Record<'default', FormDataProps> = {
    default: mockFormDefault
};
