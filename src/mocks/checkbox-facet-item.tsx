// Types
import { CheckboxFacetItemProps } from '@/components';

const mockCheckboxFacetItemDefault: CheckboxFacetItemProps = {
    label: 'Webpage',
    count: 567,
    onCheckedChange: (checked: boolean) => {
        console.log(checked);
        return console.log(`Webpage: ${checked}`);
    }
};

export const mockCheckboxFacetItem: Record<'default', CheckboxFacetItemProps> =
    {
        default: mockCheckboxFacetItemDefault
    };
