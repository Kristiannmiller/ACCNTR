import {
    RichText as JSSRichText,
    Text as JSSText
} from '@sitecore-jss/sitecore-jss-react';

// Types
import type { TableContainerProps } from '@/components';

// Mocks
import { mockTableCell, mockStandardTable } from '@/mocks/table';

// Components
import {
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '@/components';

export const mockTableContainerDefault: TableContainerProps = {
    headline: <JSSText field={{ value: 'Table Container' }} />,
    headlineTag: 'h2',
    supportCopy: <JSSRichText field={{ value: 'Cranial' }} />,
    contentAlignment: 'left',
    tableStyle: 'standard',
    cellAlignment: 'left',
    shouldPinFirstColumn: false,
    children: (
        <>
            <TableHeader cellAlignment='default'>
                <TableRow cellAlignment='default'>
                    <TableHead>Name</TableHead>
                    <TableHead>Specialty</TableHead>
                    <TableHead>Location</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {mockStandardTable.map((data, idx) => (
                    <TableRow
                        cellAlignment='default'
                        key={idx}>
                        <TableCell cellAlignment='default'>
                            {data.name}
                        </TableCell>
                        <TableCell cellAlignment='default'>
                            {data.specialty}
                        </TableCell>
                        <TableCell cellAlignment='default'>
                            {data.location}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </>
    )
};

export const firstCellRightAlignment: TableContainerProps = {
    ...mockTableContainerDefault,
    children: (
        <>
            <TableHeader cellAlignment='default'>
                <TableRow cellAlignment='default'>
                    <TableHead>Name</TableHead>
                    <TableHead>Specialty</TableHead>
                    <TableHead>Location</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow cellAlignment='default'>
                    <TableCell
                        {...mockTableCell.default}
                        cellAlignment='right'
                    />
                    <TableCell
                        {...mockTableCell.mockTableCellText}
                        children={
                            <JSSRichText field={{ value: 'Neurosurgery' }} />
                        }
                    />
                    <TableCell {...mockTableCell.default} />
                </TableRow>
                <TableRow cellAlignment='default'>
                    <TableCell {...mockTableCell.default} />
                    <TableCell
                        {...mockTableCell.mockTableCellText}
                        children={
                            <JSSRichText
                                field={{ value: 'Lorem dolor sit amet' }}
                            />
                        }
                    />
                    <TableCell {...mockTableCell.default} />
                </TableRow>
                <TableRow cellAlignment='default'>
                    <TableCell {...mockTableCell.mockTableCellLink} />
                    <TableCell {...mockTableCell.default} />
                    <TableCell {...mockTableCell.default} />
                </TableRow>
            </TableBody>
        </>
    )
};

export const headerOveRideLeftAlignment: TableContainerProps = {
    ...mockTableContainerDefault,
    children: (
        <>
            <TableHeader cellAlignment='left'>
                <TableRow cellAlignment='left'>
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
                    <TableCell {...mockTableCell.mockTableCellText} />
                    <TableCell {...mockTableCell.default} />
                    <TableCell {...mockTableCell.default} />
                    <TableCell {...mockTableCell.mockTableCellEmpty} />
                </TableRow>
                <TableRow cellAlignment='right'>
                    <TableCell {...mockTableCell.mockTableCellText} />
                    <TableCell {...mockTableCell.default} />
                    <TableCell {...mockTableCell.default} />
                    <TableCell {...mockTableCell.default} />
                </TableRow>
                <TableRow cellAlignment='right'>
                    <TableCell {...mockTableCell.mockTableCellLink} />
                    <TableCell {...mockTableCell.default} />
                    <TableCell {...mockTableCell.mockTableCellEmpty} />
                    <TableCell {...mockTableCell.default} />
                </TableRow>
            </TableBody>
        </>
    )
};

export const mockTableConatinerCutom: TableContainerProps = {
    headline: <JSSText field={{ value: 'Table Container' }} />,
    headlineTag: 'h2',
    supportCopy: (
        <JSSRichText
            field={{
                value: 'Not sure where to get care? The following chart shows some the nonurgent symptoms we treat.'
            }}
        />
    ),
    contentAlignment: 'left',
    tableStyle: 'custom',
    cellAlignment: 'center',
    shouldPinFirstColumn: false,
    children: (
        <>
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
                        children={
                            <JSSRichText field={{ value: 'Broken bones' }} />
                        }
                    />
                    <TableCell {...mockTableCell.default} />
                    <TableCell {...mockTableCell.default} />
                    <TableCell
                        {...mockTableCell.mockTableCellText}
                        children={
                            <JSSRichText field={{ value: 'Lorem ipsum' }} />
                        }
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
                        children={
                            <JSSRichText field={{ value: 'Ear issues' }} />
                        }
                    />
                    <TableCell {...mockTableCell.default} />
                    <TableCell {...mockTableCell.default} />
                    <TableCell {...mockTableCell.mockTableCellEmpty} />
                </TableRow>
                <TableRow cellAlignment='right'>
                    <TableCell
                        {...mockTableCell.mockTableCellText}
                        children={
                            <JSSRichText field={{ value: 'Eye concerns' }} />
                        }
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
        </>
    )
};

export const mockTableContainer: Record<
    | 'default'
    | 'custom'
    | 'firstCellRightAlignment'
    | 'headerOveRideLeftAlignment',
    TableContainerProps
> = {
    default: mockTableContainerDefault,
    custom: mockTableConatinerCutom,
    firstCellRightAlignment: firstCellRightAlignment,
    headerOveRideLeftAlignment: headerOveRideLeftAlignment
};
