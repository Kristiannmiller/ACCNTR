// Components
import {
    IconCtaBordered,
    LocationInfo,
    MultiColumnContainerProps,
    RichTextRendering
} from '@/components';

// Mocks
import { mockLocationInfo } from './location-info';
import { mockIconCtaBordered } from './icon-cta-bordered';

const mockMultiColumnContainerDefault: MultiColumnContainerProps = {
    numberOfColumns: '2',
    columnContents: (
        <>
            <RichTextRendering>
                <h3>Multi Column Container</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    id ligula arcu. Quisque lobortis rhoncus elit, vitae commodo
                    eros fringilla sit amet. Nam mattis porttitor lobortis. Cras
                    orci sem, sagittis sit amet vulputate vel, elementum id
                    turpis. Duis laoreet lorem non ultricies laoreet. Phasellus
                    egestas dolor sed erat laoreet mollis. Mauris turpis ligula,
                    accumsan sed mattis ac, vestibulum sit amet felis. Cras
                    vitae neque turpis. Vestibulum sagittis mollis elit, vel
                    vestibulum nisi. Vivamus iaculis mi elit, quis lacinia odio
                    pharetra eu.
                </p>
            </RichTextRendering>
            <IconCtaBordered
                {...mockIconCtaBordered.default}
                headline={undefined}
                supportCopy={undefined}
                bottomSupportCopy={undefined}
            />
        </>
    )
};

const mockMultiColumnContainerWithLocationInfo: MultiColumnContainerProps = {
    numberOfColumns: '3',
    columnContents: (
        <>
            <LocationInfo {...mockLocationInfo.default} />
            <LocationInfo {...mockLocationInfo.noMapOrInfo} />
            <LocationInfo {...mockLocationInfo.withDetailPage} />
        </>
    )
};

const mockMultiColumnContainerFour: MultiColumnContainerProps = {
    numberOfColumns: '4',
    columnContents: (
        <>
            <RichTextRendering>
                <h3>Multi Column Container</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    id ligula arcu. Quisque lobortis rhoncus elit, vitae commodo
                    eros fringilla sit amet. Nam mattis porttitor lobortis. Cras
                    orci sem, sagittis sit amet vulputate vel, elementum id
                    turpis. Duis laoreet lorem non ultricies laoreet. Phasellus
                    egestas dolor sed erat laoreet mollis. Mauris turpis ligula,
                    accumsan sed mattis ac, vestibulum sit amet felis. Cras
                    vitae neque turpis. Vestibulum sagittis mollis elit, vel
                    vestibulum nisi. Vivamus iaculis mi elit, quis lacinia odio
                    pharetra eu.
                </p>
            </RichTextRendering>
            <RichTextRendering>
                <h3>Multi Column Container</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    id ligula arcu. Quisque lobortis rhoncus elit, vitae commodo
                    eros fringilla sit amet. Nam mattis porttitor lobortis. Cras
                    orci sem, sagittis sit amet vulputate vel, elementum id
                    turpis. Duis laoreet lorem non ultricies laoreet. Phasellus
                    egestas dolor sed erat laoreet mollis. Mauris turpis ligula,
                    accumsan sed mattis ac, vestibulum sit amet felis. Cras
                    vitae neque turpis. Vestibulum sagittis mollis elit, vel
                    vestibulum nisi. Vivamus iaculis mi elit, quis lacinia odio
                    pharetra eu.
                </p>
            </RichTextRendering>
            <RichTextRendering>
                <h3>Multi Column Container</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    id ligula arcu. Quisque lobortis rhoncus elit, vitae commodo
                    eros fringilla sit amet. Nam mattis porttitor lobortis. Cras
                    orci sem, sagittis sit amet vulputate vel, elementum id
                    turpis. Duis laoreet lorem non ultricies laoreet. Phasellus
                    egestas dolor sed erat laoreet mollis. Mauris turpis ligula,
                    accumsan sed mattis ac, vestibulum sit amet felis. Cras
                    vitae neque turpis. Vestibulum sagittis mollis elit, vel
                    vestibulum nisi. Vivamus iaculis mi elit, quis lacinia odio
                    pharetra eu.
                </p>
            </RichTextRendering>
            <RichTextRendering>
                <h3>Multi Column Container</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    id ligula arcu. Quisque lobortis rhoncus elit, vitae commodo
                    eros fringilla sit amet. Nam mattis porttitor lobortis. Cras
                    orci sem, sagittis sit amet vulputate vel, elementum id
                    turpis. Duis laoreet lorem non ultricies laoreet. Phasellus
                    egestas dolor sed erat laoreet mollis. Mauris turpis ligula,
                    accumsan sed mattis ac, vestibulum sit amet felis. Cras
                    vitae neque turpis. Vestibulum sagittis mollis elit, vel
                    vestibulum nisi. Vivamus iaculis mi elit, quis lacinia odio
                    pharetra eu.
                </p>
            </RichTextRendering>
        </>
    )
};

export const mockMultiColumnContainer: Record<
    'default' | 'fourUp' | 'withLocationInfo',
    MultiColumnContainerProps
> = {
    default: mockMultiColumnContainerDefault,
    fourUp: mockMultiColumnContainerFour,
    withLocationInfo: mockMultiColumnContainerWithLocationInfo
};
