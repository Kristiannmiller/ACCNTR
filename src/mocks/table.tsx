import {
    RichText as JSSRichText,
    Link as JSSLink
} from '@sitecore-jss/sitecore-jss-react';

// Types
import {
    TableCellProps,
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
    TableProps
} from '@/components';

import { mockSitecoreText } from '@/mocks/sitecore';

export const mockStandardTable = [
    {
        name: <JSSRichText field={mockSitecoreText} />,
        specialty: 'Neurosurgery',
        location: 'Aurora St. Luke’s Medical Center'
    },
    {
        name: (
            <JSSLink
                field={{
                    value: { text: 'Lorem', url: '/', href: '/' }
                }}
            />
        ),
        specialty: 'Neurosurgery Medical Director, neuro-oncology',
        location: 'Aurora St. Luke’s Medical Center'
    },
    {
        name: (
            <JSSLink
                field={{
                    value: { text: 'Lorem', url: '/', href: '/' }
                }}
            />
        ),
        specialty: 'Lorem dolor sit amet',
        location: 'Aurora St. Luke’s Medical Center'
    },
    {
        name: (
            <JSSLink
                field={{
                    value: { text: 'Lorem', url: '/', href: '/' }
                }}
            />
        ),
        specialty: 'Lorem dolor sit amet',
        location: 'Aurora St. Luke’s Medical Center'
    },
    {
        name: (
            <JSSLink
                field={{
                    value: { text: 'Lorem', url: '/', href: '/' }
                }}
            />
        ),
        specialty: 'Lorem dolor sit amet',
        location: 'Aurora St. Luke’s Medical Center'
    },
    {
        name: (
            <JSSLink
                field={{
                    value: { text: 'Lorem', url: '/', href: '/' }
                }}
            />
        ),
        specialty: 'Lorem dolor sit amet',
        location: 'Aurora St. Luke’s Medical Center'
    },
    {
        name: (
            <JSSLink
                field={{
                    value: { text: 'Lorem', url: '/', href: '/' }
                }}
            />
        ),
        specialty: 'Lorem dolor sit amet',
        location: 'Aurora St. Luke’s Medical Center'
    }
];

export const mockTableCellDefault: TableCellProps = {
    children: <JSSRichText field={mockSitecoreText} />,
    cellAlignment: 'center',
    icon: 'check'
};

export const mockTableCellText: TableCellProps = {
    children: <JSSRichText field={mockSitecoreText} />,
    cellAlignment: 'default'
};

export const mockTableCellEmpty: TableCellProps = {
    cellAlignment: 'right'
};

export const mockTableCellLink: TableCellProps = {
    children: (
        <JSSLink
            field={{
                value: { text: 'Lorem', url: '/', href: '/' }
            }}
        />
    ),
    cellAlignment: 'default'
};

export const mockTableCell: Record<
    | 'default'
    | 'mockTableCellText'
    | 'mockTableCellLink'
    | 'mockTableCellEmpty',
    TableCellProps
> = {
    default: mockTableCellDefault,
    mockTableCellText: mockTableCellText,
    mockTableCellLink: mockTableCellLink,
    mockTableCellEmpty: mockTableCellEmpty
};

export const mockTableStandard = (args: TableProps) => (
    <Table
        isStriped={args.isStriped}
        isSticky={args.isSticky}
        tableStyle={'standard'}>
        <TableHeader cellAlignment='left'>
            <TableRow cellAlignment='default'>
                <TableHead>Name</TableHead>
                <TableHead>Specialty</TableHead>
                <TableHead>Location</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {mockStandardTable.map((data, idx) => (
                <TableRow
                    cellAlignment='left'
                    key={idx}>
                    <TableCell cellAlignment='default'>{data.name}</TableCell>
                    <TableCell cellAlignment='default'>
                        {data.specialty}
                    </TableCell>
                    <TableCell cellAlignment='default'>
                        {data.location}
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
);

export const mockTableCustom = (args: TableProps) => (
    <Table
        isStriped={args.isStriped}
        isSticky={args.isSticky}
        tableStyle={'custom'}>
        <TableHeader cellAlignment='center'>
            <TableRow cellAlignment='default'>
                <TableHead>Lorem Ipsum</TableHead>
                <TableHead>Immediate Care</TableHead>
                <TableHead>Advocate Clinic</TableHead>
                <TableHead>Video Visit</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow cellAlignment='right'>
                <TableCell
                    {...mockTableCell.mockTableCellText}
                    children={<JSSRichText field={{ value: 'Asthma' }} />}
                />
                <TableCell {...mockTableCell.mockTableCellEmpty} />
                <TableCell {...mockTableCell.mockTableCellEmpty} />
                <TableCell {...mockTableCell.default} />
            </TableRow>
            <TableRow cellAlignment='right'>
                <TableCell
                    {...mockTableCell.mockTableCellText}
                    children={<JSSRichText field={{ value: 'Broken bones' }} />}
                />
                <TableCell {...mockTableCell.default} />
                <TableCell {...mockTableCell.default} />
                <TableCell
                    {...mockTableCell.mockTableCellText}
                    children={<JSSRichText field={{ value: 'Lorem ipsum' }} />}
                />
            </TableRow>
            <TableRow cellAlignment='right'>
                <TableCell
                    {...mockTableCell.mockTableCellText}
                    children={<JSSRichText field={{ value: 'COVID' }} />}
                />
                <TableCell {...mockTableCell.default} />
                <TableCell {...mockTableCell.mockTableCellEmpty} />
                <TableCell {...mockTableCell.default} />
            </TableRow>
            <TableRow cellAlignment='right'>
                <TableCell
                    {...mockTableCell.mockTableCellText}
                    children={<JSSRichText field={{ value: 'Ear issues' }} />}
                />
                <TableCell {...mockTableCell.default} />
                <TableCell {...mockTableCell.default} />
                <TableCell {...mockTableCell.mockTableCellEmpty} />
            </TableRow>
            <TableRow cellAlignment='right'>
                <TableCell
                    {...mockTableCell.mockTableCellText}
                    children={<JSSRichText field={{ value: 'Eye concerns' }} />}
                />
                <TableCell {...mockTableCell.default} />
                <TableCell {...mockTableCell.default} />
                <TableCell {...mockTableCell.mockTableCellEmpty} />
            </TableRow>
            <TableRow cellAlignment='right'>
                <TableCell
                    {...mockTableCell.mockTableCellText}
                    children={<JSSRichText field={{ value: 'Fever' }} />}
                />
                <TableCell {...mockTableCell.default} />
                <TableCell {...mockTableCell.default} />
                <TableCell {...mockTableCell.default} />
            </TableRow>
            <TableRow cellAlignment='right'>
                <TableCell
                    {...mockTableCell.mockTableCellText}
                    children={<JSSRichText field={{ value: 'Flu' }} />}
                />
                <TableCell {...mockTableCell.default} />
                <TableCell {...mockTableCell.default} />
                <TableCell {...mockTableCell.default} />
            </TableRow>
            <TableRow cellAlignment='right'>
                <TableCell
                    {...mockTableCell.mockTableCellText}
                    children={
                        <JSSRichText
                            field={{ value: 'Insect bites and sting' }}
                        />
                    }
                />
                <TableCell {...mockTableCell.default} />
                <TableCell {...mockTableCell.mockTableCellEmpty} />
                <TableCell {...mockTableCell.default} />
            </TableRow>
        </TableBody>
    </Table>
);
