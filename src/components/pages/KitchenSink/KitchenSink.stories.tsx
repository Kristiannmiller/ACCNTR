import { RichText as JSSRichText } from '@sitecore-jss/sitecore-jss-react';
import { Meta, StoryObj } from '@storybook/react';

// Utils
import { disabledControl } from '@/sb-tools';

// Components
import {
    AccordionWrapper,
    Alert,
    AlphaLinksIndex,
    BioCardDirectory,
    BioCardGrid,
    Breadcrumbs,
    ChildrenAnimalMotif,
    ContentFeedForHealthNews,
    CorporateFooter,
    CtaContentCards,
    Footer,
    Header,
    HeadlineWithOptionalCta,
    HeroBanner,
    HeroBannerCarousel,
    HeroStatistics,
    IconCtaBordered,
    IconCtaColoredBox,
    IconCtaLeftAligned,
    IconCtaSimplified,
    ImageAsset,
    LeftNavigation,
    LeftNavLayout,
    LeftSideNavigationBackToTopAnchor,
    LinkList,
    LocationCards,
    LocationInfo,
    MediaGallery,
    MultiButton,
    MultiColumnContainer,
    MultiColumnCta,
    NewsListing,
    PromoCallout,
    PromoCarousel,
    ReverseRows,
    RichTextRendering,
    SideMediaAsset,
    SidePhotoContentCard,
    SidePhotoContentCardCarousel,
    SideStatistics,
    TableContainer,
    Testimonials,
    TextAccordion,
    TopStatistics,
    VideoAsset,
    Tabs,
    ContentFeedWithFeaturedCard,
    HeroFeaturedBanner,
    AudioAsset,
    SuggestiveDropdown,
    SearchResultSummary,
    SearchPagination
} from '@/components';
import { StorybookOnlyForm } from '@/components/atoms/Form/StorybookOnlyForm';
import { StorybookOnlySimpleSignup } from '@/components/organisms/SimpleSignup/StorybookOnlySimpleSignup';

// Mocks
import { mockAccordionWrapper } from '@/mocks/accordion-wrapper';
import { mockAlert } from '@/mocks/alert';
import { mockAlphaLinksIndex } from '@/mocks/alpha-links';
import { mockBioCardDirectory } from '@/mocks/bio-card-directory';
import { mockBioCardGrid } from '@/mocks/bio-card-grid';
import { mockBreadcrumbs } from '@/mocks/breadcrumbs';
import { mockChildrensAnimalMotif } from '@/mocks/childrens-animal-motif';
import { mockCorporateFooter } from '@/mocks/footer';
import { mockCtaContentCards } from '@/mocks/cta-content-cards';
import { mockFooter } from '@/mocks/footer';
import { mockHeader } from '@/mocks/header';
import { mockHeadlineWithOptionalCtas } from '@/mocks/headline-with-optional-cta';
import { mockHeroBanner } from '@/mocks/hero-banner';
import { mockHeroBannerCarousel } from '@/mocks/hero-banner-carousel';
import { mockHeroStatistics } from '@/mocks/hero-statistics';
import { mockIconCTAColorBox } from '@/mocks/icon-cta-color-box';
import { mockIconCtaLeftAligned } from '@/mocks/icon-cta-left-aligned';
import { mockIconCtaSimplified } from '@/mocks/icon-cta-simplified';
import { mockImageAsset } from '@/mocks/image-asset';
import {
    mockLeftNavigation,
    mockSitecoreRichTextRendering,
    mockSitecoreRichTextSmall
} from '@/mocks/sitecore';
import { mockForm } from '@/mocks/form';
import { mockLinkList } from '@/mocks/link-list';
import { mockLocationInfo } from '@/mocks/location-info';
import { mockMediaGallery } from '@/mocks/media-gallery';
import { mockMultiButtonLayouts } from '@/mocks/multi-button';
import { mockMultiColumnContainer } from '@/mocks/multi-column-container';
import { mockReverseRows } from '@/mocks/reverse-rows';
import { mockSideMediaAsset } from '@/mocks/side-media-asset';
import { mockSideStatistics } from '@/mocks/side-statistics';
import { mockReputationServiceTabs } from '@/mocks/reputation-services';
import { mockContentFeedForHealthNews } from '@/mocks/content-feed-for-health-news';
import { mockTestimonials } from '@/mocks/testimonials';
import { mockHeroFeaturedBanner } from '@/mocks/hero-featured-banner';
import { mockTextAccordion } from '@/mocks/text-accordion';
import { mockTopStatistics } from '@/mocks/top-statistics';
import { mockVideoAsset } from '@/mocks/video-asset';
import { mockTableContainer } from '@/mocks/table-container';
import { mockNewsListing } from '@/mocks/news-listing';
import { mockIconCtaBordered } from '@/mocks/icon-cta-bordered';
import { mockLocationCards } from '@/mocks/location-cards';
import { mockMultiColumnCta } from '@/mocks/multi-column-cta';
import { mockPromoCallout } from '@/mocks/promo-callout';
import { mockPromoCarousel } from '@/mocks/promo-carousel';
import { mockSidePhotoContentCardCarousel } from '@/mocks/side-photo-content-card-carousel';
import { mockSidePhotoContentCards } from '@/mocks/side-photo-content-card';
import { mockContentFeedWithFeaturedCard } from '@/mocks/content-feed-with-featured-card';
import { mockSuggestiveDropdown } from '@/mocks/suggestive-dropdown';
import { mockAudioAsset } from '@/mocks/audio-asset';
import { mockSimpleSignup } from '@/mocks/simple-signup';
import { mockSearchPagination } from '@/mocks/search-pagination';
import { mockSearchResultSummary } from '@/mocks/search-result-summary';

export default {
    title: 'Design System/pages/KitchenSink',
    component: LeftNavLayout,
    parameters: {
        excludeThemes: ['Corporate'],
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System?type&#x3D;design&amp;node-id&#x3D;15-21&amp;mode&#x3D;design&amp;t&#x3D;vxXU596MnnyQqgIQ-4'
        }
    },
    argTypes: {
        breadcrumbsSection: disabledControl,
        aboveLeftNavSection: disabledControl,
        leftNavLinks: disabledControl,
        leftNavContent: disabledControl,
        belowLeftNavSection: disabledControl
    },
    args: {
        className: '',
        breadcrumbsSection: (
            <Breadcrumbs {...mockBreadcrumbs.auroraHealthCare} />
        ),
        aboveLeftNavSection: (
            <>
                <Alert {...mockAlert.info} />
                <Header {...mockHeader.auroraHealthCare} />
                <HeroBannerCarousel
                    {...mockHeroBannerCarousel.advocateHealthCare}
                />
                <HeroBanner {...mockHeroBanner.advocateHealthCare} />
            </>
        ),
        leftNavLinks: <LeftNavigation navigations={mockLeftNavigation} />,
        leftNavContent: (
            <>
                <HeadlineWithOptionalCta
                    {...mockHeadlineWithOptionalCtas.default}
                />
                <RichTextRendering>
                    <JSSRichText field={mockSitecoreRichTextRendering} />
                </RichTextRendering>
                <AudioAsset {...mockAudioAsset.default} />
                <AccordionWrapper
                    {...mockAccordionWrapper.accordionWithMultipleJumpLink}
                />
                <SidePhotoContentCard {...mockSidePhotoContentCards.default} />
                <SidePhotoContentCardCarousel
                    {...mockSidePhotoContentCardCarousel.default}
                />
                <LinkList {...mockLinkList.auroraHealthCare} />
                <MediaGallery {...mockMediaGallery['6-items']} />
                <PromoCallout {...mockPromoCallout.auroraHealthCare} />
                <TextAccordion {...mockTextAccordion.default} />
                <PromoCarousel {...mockPromoCarousel.default} />
                <BioCardDirectory {...mockBioCardDirectory.default} />
                <BioCardGrid {...mockBioCardGrid.default} />
                <MultiButton {...mockMultiButtonLayouts.fourButton} />
                <MultiColumnCta {...mockMultiColumnCta.default} />
                <IconCtaSimplified {...mockIconCtaSimplified.default} />
                <SideStatistics {...mockSideStatistics.default} />
                <HeroStatistics {...mockHeroStatistics.default} />
                <AlphaLinksIndex {...mockAlphaLinksIndex.default} />
                <CtaContentCards {...mockCtaContentCards.default} />
                <IconCtaBordered {...mockIconCtaBordered.default} />
                <IconCtaBordered
                    {...mockIconCtaBordered.withReputationScheduleCta}
                />
                <IconCtaColoredBox {...mockIconCTAColorBox.default} />
                <IconCtaLeftAligned {...mockIconCtaLeftAligned.default} />
                <ReverseRows {...mockReverseRows.default} />
                <MultiColumnContainer {...mockMultiColumnContainer.fourUp} />
                <TableContainer {...mockTableContainer.default} />
                <ContentFeedForHealthNews
                    {...mockContentFeedForHealthNews.default}
                />
                <Testimonials {...mockTestimonials.showOnlyFirstRowOnLoad} />
                <TopStatistics {...mockTopStatistics.default} />
                <VideoAsset {...mockVideoAsset.default} />
                <SideMediaAsset {...mockSideMediaAsset.default} />
                <ImageAsset {...mockImageAsset.default} />
                <LocationCards {...mockLocationCards.default} />
                <StorybookOnlyForm {...mockForm.default} />
                <LocationInfo {...mockLocationInfo.default} />
                <ContentFeedWithFeaturedCard
                    {...mockContentFeedWithFeaturedCard.default}
                />
                <SuggestiveDropdown {...mockSuggestiveDropdown.default} />
                <NewsListing {...mockNewsListing.default} />
                <StorybookOnlySimpleSignup {...mockSimpleSignup.default} />
            </>
        ),
        belowLeftNavSection: (
            <>
                <ChildrenAnimalMotif {...mockChildrensAnimalMotif.default} />
                <Footer {...mockFooter.auroraHealthCare} />
                <CorporateFooter {...mockCorporateFooter.default} />
            </>
        )
    }
} satisfies Meta<typeof LeftNavLayout>;

type Story = StoryObj<typeof LeftNavLayout>;

export const BasicPageWithLeftNavigation: Story = {};

export const BasicPageWithoutLeftNavigation: Story = {
    parameters: {
        excludeThemes: ['Corporate']
    },
    render: () => {
        return (
            <>
                {/* AbovePageContent */}
                <Header {...mockHeader.advocateHealthCare} />
                <HeroBannerCarousel
                    {...mockHeroBannerCarousel.advocateHealthCare}
                />
                <HeroBanner {...mockHeroBanner.advocateHealthCare} />
                {/* Breadcrumbs */}
                <Breadcrumbs {...mockBreadcrumbs.advocateHealthCare} />
                {/* pageContent */}
                <HeadlineWithOptionalCta
                    {...mockHeadlineWithOptionalCtas.advocateHealthCare}
                />
                <PromoCarousel {...mockPromoCarousel.advocateHealthCare} />
                <LinkList {...mockLinkList.advocateHealthCare} />
                <RichTextRendering>
                    <JSSRichText field={mockSitecoreRichTextRendering} />
                </RichTextRendering>
                <AudioAsset {...mockAudioAsset.default} />
                <PromoCallout {...mockPromoCallout.advocateHealthCare} />
                <SidePhotoContentCard
                    {...mockSidePhotoContentCards.right6040}
                />
                <SidePhotoContentCardCarousel
                    {...mockSidePhotoContentCardCarousel.default}
                />
                <AccordionWrapper {...mockAccordionWrapper.default} />
                <TextAccordion {...mockTextAccordion.default} />
                <PromoCarousel {...mockPromoCarousel.default} />
                <MediaGallery {...mockMediaGallery['6-items']} />
                <BioCardDirectory {...mockBioCardDirectory.default} />
                <BioCardGrid {...mockBioCardGrid.default} />
                <MultiButton {...mockMultiButtonLayouts.fourButton} />
                <MultiColumnCta {...mockMultiColumnCta.default} />
                <IconCtaSimplified {...mockIconCtaSimplified.default} />
                <CtaContentCards {...mockCtaContentCards.default} />
                <AlphaLinksIndex {...mockAlphaLinksIndex.default} />
                <SideStatistics {...mockSideStatistics.default} />
                <HeroStatistics {...mockHeroStatistics.default} />
                <IconCtaBordered {...mockIconCtaBordered.default} />
                <IconCtaBordered
                    {...mockIconCtaBordered.withReputationScheduleCta}
                />
                <IconCtaColoredBox {...mockIconCTAColorBox.default} />
                <IconCtaLeftAligned {...mockIconCtaLeftAligned.default} />
                <ReverseRows {...mockReverseRows.default} />
                <MultiColumnContainer {...mockMultiColumnContainer.fourUp} />
                <TableContainer {...mockTableContainer.default} />
                <ContentFeedForHealthNews
                    {...mockContentFeedForHealthNews.default}
                />
                <Testimonials {...mockTestimonials.showOnlyFirstRowOnLoad} />
                <TopStatistics {...mockTopStatistics.default} />
                <VideoAsset {...mockVideoAsset.default} />
                <SideMediaAsset {...mockSideMediaAsset.withVideo} />
                <Tabs
                    defaultValue='find-a-doctor'
                    hasShadow
                    {...mockReputationServiceTabs.default}
                />
                <ImageAsset {...mockImageAsset.default} />
                <LocationCards {...mockLocationCards.default} />
                <Alert {...mockAlert.warning} />
                <StorybookOnlyForm {...mockForm.default} />
                <LocationInfo {...mockLocationInfo.default} />
                <ContentFeedWithFeaturedCard
                    {...mockContentFeedWithFeaturedCard.default}
                />
                <SuggestiveDropdown {...mockSuggestiveDropdown.default} />
                <NewsListing {...mockNewsListing.default} />
                <StorybookOnlySimpleSignup {...mockSimpleSignup.default} />
                {/* belowPageContent */}
                <ChildrenAnimalMotif {...mockChildrensAnimalMotif.default} />
                <LeftSideNavigationBackToTopAnchor />
                <Footer {...mockFooter.advocateHealthCare} />
                <CorporateFooter {...mockCorporateFooter.default} />
            </>
        );
    }
};

export const HomePage: Story = {
    parameters: {
        excludeThemes: ['Corporate']
    },
    render: () => {
        return (
            <>
                {/* AbovePageContent */}
                <Alert {...mockAlert.success} />
                <Header {...mockHeader.advocateHealthCare} />
                <HeroBannerCarousel
                    {...mockHeroBannerCarousel.advocateHealthCare}
                />
                <HeroBanner {...mockHeroBanner.advocateHealthCare} />
                {/* pageContent */}
                <HeadlineWithOptionalCta
                    {...mockHeadlineWithOptionalCtas.advocateHealthCare}
                />
                <PromoCarousel {...mockPromoCarousel.advocateHealthCare} />
                <LinkList {...mockLinkList.advocateHealthCare} />
                <RichTextRendering>
                    <JSSRichText field={mockSitecoreRichTextRendering} />
                </RichTextRendering>
                <AudioAsset {...mockAudioAsset.default} />
                <PromoCallout {...mockPromoCallout.advocateHealthCare} />
                <SidePhotoContentCard
                    {...mockSidePhotoContentCards.right6040}
                />
                <SidePhotoContentCardCarousel
                    {...mockSidePhotoContentCardCarousel.default}
                />
                <AccordionWrapper {...mockAccordionWrapper.default} />
                <TextAccordion {...mockTextAccordion.default} />
                <MediaGallery {...mockMediaGallery['6-items']} />
                <PromoCarousel {...mockPromoCarousel.default} />
                <BioCardDirectory {...mockBioCardDirectory.default} />
                <BioCardGrid {...mockBioCardGrid.default} />
                <MultiButton {...mockMultiButtonLayouts.fourButton} />
                <MultiColumnCta {...mockMultiColumnCta.default} />
                <IconCtaSimplified {...mockIconCtaSimplified.default} />
                <CtaContentCards {...mockCtaContentCards.default} />
                <AlphaLinksIndex {...mockAlphaLinksIndex.default} />
                <SideStatistics {...mockSideStatistics.default} />
                <HeroStatistics {...mockHeroStatistics.default} />
                <IconCtaBordered {...mockIconCtaBordered.default} />
                <IconCtaBordered
                    {...mockIconCtaBordered.withReputationScheduleCta}
                />
                <IconCtaColoredBox {...mockIconCTAColorBox.default} />
                <IconCtaLeftAligned {...mockIconCtaLeftAligned.default} />
                <ReverseRows {...mockReverseRows.default} />
                <MultiColumnContainer {...mockMultiColumnContainer.fourUp} />
                <TableContainer {...mockTableContainer.default} />
                <ContentFeedForHealthNews
                    {...mockContentFeedForHealthNews.default}
                />
                <Testimonials {...mockTestimonials.showOnlyFirstRowOnLoad} />
                <TopStatistics {...mockTopStatistics.default} />
                <VideoAsset {...mockVideoAsset.default} />
                <SideMediaAsset {...mockSideMediaAsset.noOptionalProps} />
                <ImageAsset {...mockImageAsset.default} />
                <LocationCards {...mockLocationCards.default} />
                <StorybookOnlyForm {...mockForm.default} />
                <LocationInfo {...mockLocationInfo.default} />
                <SuggestiveDropdown {...mockSuggestiveDropdown.default} />
                <ContentFeedWithFeaturedCard
                    {...mockContentFeedWithFeaturedCard.default}
                />
                <NewsListing {...mockNewsListing.default} />
                <StorybookOnlySimpleSignup {...mockSimpleSignup.default} />
                {/* belowPageContent */}
                <ChildrenAnimalMotif {...mockChildrensAnimalMotif.default} />
                <Footer {...mockFooter.advocateHealthCare} />
            </>
        );
    }
};

export const CorporatePage: Story = {
    parameters: {
        excludeThemes: ['Consumer', 'Childrens']
    },
    render: () => {
        return (
            <>
                <Header {...mockHeader.corporate} />
                <HeroFeaturedBanner {...mockHeroFeaturedBanner.default} />
                <IconCtaColoredBox {...mockIconCTAColorBox.default} />
                <IconCtaLeftAligned {...mockIconCtaLeftAligned.default} />
                <ReverseRows {...mockReverseRows.default} />
                <MultiColumnContainer {...mockMultiColumnContainer.fourUp} />
                <TableContainer {...mockTableContainer.default} />
                <ContentFeedForHealthNews
                    {...mockContentFeedForHealthNews.default}
                />
                <Testimonials {...mockTestimonials.showOnlyFirstRowOnLoad} />
                <TopStatistics {...mockTopStatistics.default} />
                <VideoAsset {...mockVideoAsset.default} />
                <SideMediaAsset {...mockSideMediaAsset.noOptionalProps} />
                <ImageAsset {...mockImageAsset.default} />
                <LocationCards {...mockLocationCards.default} />
                <LocationInfo {...mockLocationInfo.default} />
                <ContentFeedWithFeaturedCard
                    {...mockContentFeedWithFeaturedCard.default}
                />
                <StorybookOnlySimpleSignup {...mockSimpleSignup.default} />
                <CorporateFooter {...mockCorporateFooter.default} />
            </>
        );
    }
};

export const Search: Story = {
    parameters: {
        excludeThemes: ['Corporate', 'Childrens']
    },
    render: () => {
        return (
            <>
                <SearchResultSummary {...mockSearchResultSummary.default} />
                <NewsListing {...mockNewsListing.default} />
            </>
        );
    }
};

export const SwiperTest: Story = {
    render: () => {
        return (
            <>
                <HeroBannerCarousel
                    {...mockHeroBannerCarousel.advocateHealthCare}
                />
                {/* pageContent */}
                <HeadlineWithOptionalCta
                    {...mockHeadlineWithOptionalCtas.advocateHealthCare}
                />
                <PromoCarousel
                    {...{ ...mockPromoCarousel.advocateHealthCare, slides: [] }}
                />
            </>
        );
    }
};

export const SearchPaginationScroll: Story = {
    render: () => {
        return (
            <>
                <JSSRichText field={mockSitecoreRichTextRendering} />
                <SearchPagination {...mockSearchPagination.default} />
            </>
        );
    }
};

export const SimplePageWithLeftNavigation: Story = {
    args: {
        breadcrumbsSection: (
            <Breadcrumbs {...mockBreadcrumbs.auroraHealthCare} />
        ),
        aboveLeftNavSection: (
            <>
                <Alert {...mockAlert.info} />
                <Header {...mockHeader.auroraHealthCare} />
                <HeroBanner {...mockHeroBanner.advocateHealthCare} />
            </>
        ),
        leftNavLinks: <LeftNavigation navigations={mockLeftNavigation} />,
        leftNavContent: (
            <>
                <HeadlineWithOptionalCta
                    {...mockHeadlineWithOptionalCtas.default}
                />
                <RichTextRendering>
                    <JSSRichText field={mockSitecoreRichTextSmall} />
                </RichTextRendering>
                <MultiColumnContainer {...mockMultiColumnContainer.fourUp} />
                <RichTextRendering>
                    <JSSRichText field={mockSitecoreRichTextSmall} />
                </RichTextRendering>
                <MultiColumnContainer {...mockMultiColumnContainer.default} />
                <RichTextRendering>
                    <JSSRichText field={mockSitecoreRichTextSmall} />
                </RichTextRendering>
            </>
        ),
        belowLeftNavSection: (
            <>
                <ChildrenAnimalMotif {...mockChildrensAnimalMotif.default} />
                <Footer {...mockFooter.auroraHealthCare} />
                <CorporateFooter {...mockCorporateFooter.default} />
            </>
        )
    }
};
