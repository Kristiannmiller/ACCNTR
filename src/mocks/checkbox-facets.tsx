// Types
import { CheckboxFacetsProps } from '@/components';

const mockCheckboxFacetsDefault: CheckboxFacetsProps = {
    checkboxFacetItems: [
        {
            label: 'Test',
            count: 3,
            onCheckedChange: (checked: boolean) => {
                console.log(checked);
                return console.log(`Test: ${checked}`);
            },
            checked: true
        },
        {
            label: 'Research news',
            count: 2,
            onCheckedChange: (checked: boolean) =>
                console.log(`Research news: ${checked}`)
        },
        {
            label: 'News article',
            count: 42,
            onCheckedChange: (checked: boolean) =>
                console.log(`News article: ${checked}`)
        },
        {
            label: 'Event',
            count: 19,
            onCheckedChange: (checked: boolean) =>
                console.log(`Event: ${checked}`)
        }
    ],
    heading: 'Filter by type',
    onFilterChange: (label: string, selected: boolean) => {
        console.log({ label, selected });
        return console.log(`Filter changed: ${label} - ${selected}`);
    }
};

export const mockCheckboxFacets: Record<'default', CheckboxFacetsProps> = {
    default: mockCheckboxFacetsDefault
};
