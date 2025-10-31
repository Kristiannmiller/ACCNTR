import { NavigationItem, NavigationElement } from '@/components';

export const mockSitecoreImage = {
    value: {
        src: 'https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80',
        alt: 'A random image from Unsplash'
    }
};
export const mockSitecoreImageWide = {
    value: {
        src: 'https://images.unsplash.com/photo-1589402903416-2d02f303d12c?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'A random image from Unsplash'
    }
};

export const mockSitecoreLocationImage = {
    value: {
        src: '/images/ctas/christ.png',
        alt: 'Oak Lawn Campus'
    }
};

export const mockSitecoreImageWideAlt = {
    value: {
        src: '/images/hero-banners/womens_banner.webp',
        alt: "Women's Health"
    }
};

export const mockSitecoreImageWide2 = {
    value: {
        src: 'https://images.unsplash.com/photo-1510908072721-6fbd31199630?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'A random image from Unsplash'
    }
};

export const mockSiteLogo = {
    value: {
        src: '/images/site-logos/advocate-footer-logo.webp',
        alt: 'consumer theme logo'
    }
};

export const mockChildrenSiteLogo = {
    value: {
        src: '/images/site-logos-site_logo_footer.png',
        alt: 'children theme logo'
    }
};

export const mockFoundationSiteLogo = {
    value: {
        src: '/images/site-logos/sitelogo2024.png',
        alt: 'foundation theme logo'
    }
};

export const mockSitecoreLink = {
    value: {
        id: '{64DDFEB8-2924-4CDD-8D6B-F89B19FD2223}',
        querystring: '',
        target: '|Custom',
        text: 'Learn More',
        anchor: '',
        title: 'custom-title',
        class: 'custom-class',
        url: '/test-link',
        linktype: 'internal',
        href: '/learn-more'
    }
};

export const mockSitecoreRichTextHeading = {
    value: '<h6>Card heading lorem ipsum dolor sit amet</h6><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>'
};

export const mockSitecoreCardRichTextHeading = {
    value: '<h4>Card heading lorem ipsum dolor sit amet</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>'
};

export const mockSitecoreRichTextBottomCopy = {
    value: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>'
};

export const mockSitecoreLinkLong = {
    value: {
        id: '{64DDFEB8-2924-4CDD-8D6B-F89B19FD2223}',
        querystring: '',
        target: '|Custom',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        anchor: '',
        title: 'custom-title',
        class: 'custom-class',
        url: '/test-link',
        linktype: 'internal',
        href: '/learn-more'
    }
};

export const mockSitecoreRichTextSmall = {
    value: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>'
};

export const mockSitecoreRichTextLong = {
    value: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>'
};

export const mockSitecoreRichText = {
    value: '<h1>Lorem ipsum dolor sit amet</h1><h2>Viverra nibh cras pulvinar mattis etis nunc sed blandit</h2><p>Lorem ipsum dolor sit amet, <b>consectetur adipiscing elit</b>. Nunc quis turpis eu justo <em>fermentum suscipit eu id nulla</em>. Sed fermentum blandit ultricies. Nam rhoncus ornare vestibulum. Cras sit amet ex vehicula, maximus ipsum sed, faucibus dolor. Mauris imperdiet tortor nunc, ut tempor mi interdum nec. Nunc fringilla fermentum dignissim. Vivamus rutrum ex quis elit elementum sollicitudin. Etiam placerat eros ex, tincidunt  convallis erat luctus ut. Pellentesque placerat orci magna. Sed eget est in est egestas venenatis. Nulla in ullamcorper justo, ut commodo erat. Praesent nec porttitor ante, ac facilisis urna. Donec ornare tincidunt justo. Nam convallis est urna, eget vehicula odio imperdiet a. <a href="#unvisited">Sed pretium ut neque</a> sit amet sollicitudin.</p> <p>Dictum varius duis at consectetur lorem donec mass. Elementum nisi quis elifend tempor incidiunt ut labore et dolore magna aliqua.</p><h2>Massa sapien faucibus</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><h3>Massa sapien faucius</h3><p>Dictum varius duis at consectetur lorem donec mass. Elementum nisi quis eleifend quam.</p><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li>Vestibulum et nisl tincidunt nisl suscipit condimentum vitae ac risus.</li><li><a href="https://www.advocatehealth.com">Nunc eget metus</a> et diam congue dictum eu at augue.</li><li>Cras ultrices ex at iaculis iaculis.</li></ul><ol><li><a href="https://www.aurorabaycare.com">Praesent eu lorem gravida</a> arcu sollicitudin condimentum.</li><li>In dapibus mi rutrum blandit accumsan.</li><li>Nam elementum sem eu neque ultrices sollicitudin.</li></ol>'
};

export const mockJumpLinkRichText = {
    value: '<a href="#MyAnchor">demo</a><h1>Lorem ipsum dolor sit amet</h1><h2>Viverra nibh cras pulvinar mattis etis nunc sed blandit</h2><p>Lorem ipsum dolor sit amet, <b>consectetur adipiscing elit</b>. Nunc quis turpis eu justo <em>fermentum suscipit eu id nulla</em>. Sed fermentum blandit ultricies. Nam rhoncus ornare vestibulum. Cras sit amet ex vehicula, maximus ipsum sed, faucibus dolor. Mauris imperdiet tortor nunc, ut tempor mi interdum nec. Nunc fringilla fermentum dignissim. Vivamus rutrum ex quis elit elementum sollicitudin. Etiam placerat eros ex, tincidunt <a href="#MyAnchor2">demo2</a> convallis erat luctus ut <a href="#">empty targetID</a> . Pellentesque placerat orci magna. Sed eget est in est egestas venenatis. Nulla in ullamcorper justo, ut commodo erat. Praesent nec porttitor ante, ac facilisis urna. Donec ornare tincidunt justo. Nam convallis est urna, eget vehicula odio imperdiet a. <a href="#unvisited">Sed pretium ut neque</a> sit amet sollicitudin.</p> <p>Dictum varius duis at consectetur lorem donec mass. Elementum nisi quis elifend tempor incidiunt ut labore et dolore magna aliqua.</p><h2>Massa sapien faucibus</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><h3>Massa sapien faucius</h3><p>Dictum varius duis at consectetur lorem donec mass. Elementum nisi quis eleifend quam.</p><ul><li><a href="#MyAnchorid2">Anchor item 2</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li><a href="#MyAnchor3">demo3</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li>Vestibulum et nisl tincidunt nisl suscipit condimentum vitae ac risus.</li><li><a href="https://www.advocatehealth.com">Nunc eget metus</a> et diam congue dictum eu at augue.</li><li>Cras ultrices ex at iaculis iaculis.</li></ul><ol><li><a href="https://www.aurorabaycare.com">Praesent eu lorem gravida</a> arcu sollicitudin condimentum.</li><li>In dapibus mi rutrum blandit accumsan.</li><li>Nam elementum sem eu neque ultrices sollicitudin.</li></ol>'
};

export const mockDemo = {
    value: '<a name="MyAnchor">demo</a>'
};

export const mockDemo2 = {
    value: 'Lorem ipsum dolor sit amet, consectetur<a name="MyAnchor2">demo2</a> adipiscing elit, '
};

export const mockDemo3 = {
    value: 'Lorem ipsum dolor sit amet, consectetur<a name="MyAnchor3">demo3</a> adipiscing elit, '
};

export const mockSitecoreRichTextRendering = {
    value: `
    <ol>
      <li>Rich Text Rendering</li>
      <li>In dapibus mi rutrum blandit accumsan.</li>
      <li>Nam elementum sem eu neque ultrices sollicitudin.</li>
    </ol>

    <p>Below are examples of the each of the capabilities provided by the Sitecore Custom Rich Text Editor Profile.</p>
<ul>
    <li><strong>Text Copying</strong>
    <ul>
        <li>Paste Plain Text</li>
        <li>Format Stripper</li>
    </ul>
    </li>
</ul>

<ul>
    <li><strong>Formatting</strong>
    <ul>
        <li>Strip all formatting </li>
        <li>Strip CSS Formatting</li>
        <li>Strip Font Elements</li>
        <li>Strip Span elements</li>
        <li>Strip Word formatting</li>
    </ul>
    </li>
</ul>
<ul>
    <li><strong>Memory</strong>
    <ul>
        <li>Undo</li>
        <li>Redo</li>
    </ul>
    </li>
</ul>
<ul>
    <li><strong>Links</strong>
    <ul>
        <li><a href="~/link.aspx?_id=C90ED35DBC3744B588D6D6BCEC1F7347&amp;_z=z">Insert sitecore link</a></li>
        <li><a href="http://www.advocatehealth.org">Hyper link manager</a></li>
    </ul>
    </li>
</ul>
<ul>
    <li><strong>Headings</strong>
        <h1>H1 headline</h1>
        <h2>H2 headline</h2>
        <h3>H3 headline</h3>
        <h4>H4 headline</h4>
    </li>
</ul>
<ul>
    <li><strong>Insert symbol</strong>
    <ul>
        <li>mdash&nbsp;&mdash;</li>
        <li>ndash&nbsp;&ndash;</li>
        <li>Copyright&nbsp;&copy;</li>
        <li>Register&nbsp;&reg;</li>
        <li>Trademark&nbsp;&trade;</li>
        <li>Dollar&nbsp;$</li>
        <li>Euro&nbsp;&euro;</li>
        <li>Pound&nbsp;&pound;</li>
    </ul>
    </li>
</ul>
<ul>
    <li><strong>Font Styles</strong>
    <ul>
        <li><strong>Bold</strong></li>
        <li><em>Italic</em></li>
        <li><span style="text-decoration: underline;">Underline</span></li>
    </ul>
    </li>
</ul>
<ol>
    <li>Lists</li>
    <li>Number List</li>
    <li>Unordered List</li>
</ol>
<p><strong>Alignment</strong></p>
<p style="text-align: left;">Align Left</p>
<p style="text-align: center;">
Align Center</p>
<p style="text-align: right;">
Align Right</p>
<p style="text-align: justify;">
<strong>Justified</strong>&nbsp;<span style="background-color: #ffffff; text-align: justify; color: #000000;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></p>
<p style="text-align: left;"><strong>Not Justified</strong>&nbsp;<span style="background-color: #ffffff; text-align: justify; color: #000000;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></p>
<p style="text-align: left;">Indents/Outdents</p>
<ul>
    <li style="text-align: left;">A
    <ul>
        <li style="text-align: left;">B
        <ul>
            <li style="text-align: left;">C</li>
        </ul>
        </li>
    </ul>
    </li>
    <li style="text-align: left;">D
    <ul>
        <li style="text-align: left;">E</li>
    </ul>
    </li>
</ul>

<p>Buttons</p>
    <a href="#" class="r-btn r-btn-solid1 r-btn-medium inline">button</a><a href="#" class="r-btn r-btn-solid2 r-btn-medium inline">button</a><a href="#" class="r-btn r-btn-outlined r-btn-medium inline">button</a><a href="#" class="r-btn r-btn-light1 r-btn-medium inline">button</a><a href="#" class="r-btn r-btn-light2 r-btn-medium">button</a><a href="#" class="r-btn r-btn-solid-1-inverse r-btn-medium">button</a><a href="#" class="r-btn r-btn-outlined-inverse r-btn-medium">button</a><a href="#" class="r-btn r-btn-light-inverse r-btn-medium">button</a>

<p style="text-align: left;">This concludes the examples.</p>
    `
};

export const mockSitecoreLegalRichText = {
    value: 'Nulla in ullamcorper justo, ut commodo erat. Praesent nec porttitor ante, ac facilisis urna. Donec ornare tincidunt justo. Nam convallis est urna, eget vehicula odio imperdiet a. <a href="https://www.advocatehealth">Sed pretium ut neque</a> '
};

export const mockSitecoreBottomText = {
    value: 'Now part of <a href="https://www.advocatechildrenshospital.com/">Advocate Health</a>'
};

export const mockSitecoreText = {
    value: 'Lorem ipsum'
};

export const IconCtaColorBoxMockSitecoreText = {
    value: 'Icon Cta Color Box'
};

export const articleMockSitecoreText = {
    value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
};

export const mediaWithCaptionMockSitecoreText = {
    value: 'Media With Caption'
};

export const mockSitecoreLongerText = {
    value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
};

export const iconCtaColorBoxCardMockSitecoreText = {
    value: 'Icon CTA Color Box Card'
};

export const mockSitecoreCopyRightText = {
    value: '©2024 Advocate Aurora Health'
};

export const mockLeftNavigation: NavigationItem = {
    id: '{AE71C5E6-48AD-4BD9-B219-7D85C0A7CD9D}',
    url: '/Level-1-B/Level-2-B-1?sc_site=Global',
    navigationTitle: 'Brain care center',
    isActive: false,
    children: [
        {
            id: '{EEDC0EDB-D2C5-49F1-BC48-7A7F67C387DA}',
            url: '/Level-1-B/Level-2-B-1/Level-3-B-1?sc_site=Global',
            navigationTitle: 'Advocate Memory Center',
            isActive: true,
            target: '_blank'
        },
        {
            id: '{76FD10DE-2B54-418D-996D-F9D51D747181}',
            url: '/Level-1-B/Level-2-B-1/Level-3-B-1/Level-4-B-2',
            navigationTitle: 'Cats and Dogs',
            isActive: false,
            children: [
                {
                    id: '{63BBBC38-78BD-4BAF-9131-D31E9A95750C}',
                    url: '/Level-1-B/Level-2-B-1/Level-3-B-1/Level-4-B-1/level-4-b-1?sc_site=Global',
                    navigationTitle: 'Arteriovenous malformation',
                    isActive: false
                },
                {
                    id: '{63BBBC38-78BD-4BAF-9131-D31E9A95750C}',
                    url: '/Level-1-B/Level-2-B-1/Level-3-B-1/Level-4-B-1/level-4-b-1?sc_site=Global',
                    navigationTitle: 'Arteriovenous malformation',
                    isActive: false
                }
            ]
        },
        {
            id: '{EEDC0EDB-D2C5-49F1-BC48-7A7F67C387DA}',
            url: '/Level-1-B/Level-2-B-1/Level-3-B-1?sc_site=Global',
            navigationTitle: 'Conditions & treatments',
            isActive: false,
            children: [
                {
                    id: '{63BBBC38-78BD-4BAF-9131-D31E9A95750C}',
                    url: '/Level-1-B/Level-2-B-1/Level-3-B-1/Level-4-B-1?sc_site=Global',
                    navigationTitle: 'Aneurysm',
                    isActive: false
                },
                {
                    id: '{63BBBC38-78BD-4BAF-9131-D31E9A95750C}',
                    url: '/Level-1-B/Level-2-B-1/Level-3-B-1/Level-4-B-1?sc_site=Global',
                    navigationTitle: 'Ataxia',
                    isActive: false
                },
                {
                    id: '{63BBBC38-78BD-4BAF-9131-D31E9A95750C}',
                    url: '/Level-1-B/Level-2-B-1/Level-3-B-1/Level-4-B-1?sc_site=Global',
                    navigationTitle: 'Autonomic Neuropathy',
                    isActive: false
                },
                {
                    id: '{76FD10DE-2B54-418D-996D-F9D51D747180}',
                    url: '/Level-1-B/Level-2-B-1/Level-3-B-1/Level-4-B-2?sc_site=Global',
                    navigationTitle: 'Cerebrovascular malformations',
                    isActive: false,
                    children: [
                        {
                            id: '{63BBBC38-78BD-4BAF-9131-D31E9A95750C}',
                            url: '/Level-1-B/Level-2-B-1/Level-3-B-1/Level-4-B-1/level-4-b-1?sc_site=Global',
                            navigationTitle: 'Arteriovenous malformation',
                            isActive: false
                        },
                        {
                            id: '{63BBBC38-78BD-4BAF-9131-D31E9A95750C}',
                            url: '/Level-1-B/Level-2-B-1/Level-3-B-1/Level-4-B-1/level-4-b-1?sc_site=Global',
                            navigationTitle: 'Brain aneurysms',
                            isActive: false
                        },
                        {
                            id: '{63BBBC38-78BD-4BAF-9131-D31E9A95750C}',
                            url: '/Level-1-B/Level-2-B-1/Level-3-B-1/Level-4-B-1/level-4-b-1?sc_site=Global',
                            navigationTitle: 'Coma',
                            isActive: false
                        },
                        {
                            id: '{63BBBC38-78BD-4BAF-9131-D31E9A95750C}',
                            url: '/Level-1-B/Level-2-B-1/Level-3-B-1/Level-4-B-1/level-4-b-1?sc_site=Global',
                            navigationTitle: 'Doctors',
                            isActive: false
                        },
                        {
                            id: '{63BBBC38-78BD-4BAF-9131-D31E9A95750C}',
                            url: '/Level-1-B/Level-2-B-1/Level-3-B-1/Level-4-B-1/level-4-b-1?sc_site=Global',
                            navigationTitle: 'Locations',
                            isActive: false
                        },
                        {
                            id: '{63BBBC38-78BD-4BAF-9131-D31E9A95750C}',
                            url: '/Level-1-B/Level-2-B-1/Level-3-B-1/Level-4-B-1/level-4-b-1?sc_site=Global',
                            navigationTitle: 'Heart',
                            isActive: false
                        },
                        {
                            id: '{63BBBC38-78BD-4BAF-9131-D31E9A95750C}',
                            url: '/Level-1-B/Level-2-B-1/Level-3-B-1/Level-4-B-1/level-4-b-1?sc_site=Global',
                            navigationTitle: 'Cancer',
                            isActive: false
                        },
                        {
                            id: '{63BBBC38-78BD-4BAF-9131-D31E9A95750C}',
                            url: '/Level-1-B/Level-2-B-1/Level-3-B-1/Level-4-B-1/level-4-b-1?sc_site=Global',
                            navigationTitle: 'Lung',
                            isActive: false
                        },
                        {
                            id: '{63BBBC38-78BD-4BAF-9131-D31E9A95750C}',
                            url: '/Level-1-B/Level-2-B-1/Level-3-B-1/Level-4-B-1/level-4-b-1?sc_site=Global',
                            navigationTitle: "Women's Health",
                            isActive: false
                        },
                        {
                            id: '{63BBBC38-78BD-4BAF-9131-D31E9A95750C}',
                            url: '/Level-1-B/Level-2-B-1/Level-3-B-1/Level-4-B-1/level-4-b-1?sc_site=Global',
                            navigationTitle: 'Healthy weight',
                            isActive: false
                        }
                    ]
                },
                {
                    id: '{63BBBC38-78BD-4BAF-9131-D31E9A95750C}',
                    url: '/Level-1-B/Level-2-B-1/Level-3-B-1/Level-4-B-1?sc_site=Global',
                    navigationTitle: 'Choosing a primary care doctor',
                    isActive: false
                },
                {
                    id: '{63BBBC38-78BD-4BAF-9131-D31E9A95750C}',
                    url: '/Level-1-B/Level-2-B-1/Level-3-B-1/Level-4-B-1?sc_site=Global',
                    navigationTitle: 'Preventive care',
                    isActive: false
                },
                {
                    id: '{63BBBC38-78BD-4BAF-9131-D31E9A95750C}',
                    url: '/Level-1-B/Level-2-B-1/Level-3-B-1/Level-4-B-1?sc_site=Global',
                    navigationTitle: 'Immediate care',
                    isActive: false
                },
                {
                    id: '{63BBBC38-78BD-4BAF-9131-D31E9A95750C}',
                    url: '/Level-1-B/Level-2-B-1/Level-3-B-1/Level-4-B-1?sc_site=Global',
                    navigationTitle: 'Ways to get immediate care',
                    isActive: false
                },
                {
                    id: '{63BBBC38-78BD-4BAF-9131-D31E9A95750C}',
                    url: '/Level-1-B/Level-2-B-1/Level-3-B-1/Level-4-B-1?sc_site=Global',
                    navigationTitle: 'Travel vaccinations',
                    isActive: false
                },
                {
                    id: '{63BBBC38-78BD-4BAF-9131-D31E9A95750C}',
                    url: '/Level-1-B/Level-2-B-1/Level-3-B-1/Level-4-B-1?sc_site=Global',
                    navigationTitle: 'Physical examinations',
                    isActive: false
                },
                {
                    id: '{63BBBC38-78BD-4BAF-9131-D31E9A95750C}',
                    url: '/Level-1-B/Level-2-B-1/Level-3-B-1/Level-4-B-1?sc_site=Global',
                    navigationTitle: 'Checklist',
                    isActive: false
                },
                {
                    id: '{63BBBC38-78BD-4BAF-9131-D31E9A95750C}',
                    url: '/Level-1-B/Level-2-B-1/Level-3-B-1/Level-4-B-1?sc_site=Global',
                    navigationTitle: 'Annual examination',
                    isActive: false
                },
                {
                    id: '{63BBBC38-78BD-4BAF-9131-D31E9A95750C}',
                    url: '/Level-1-B/Level-2-B-1/Level-3-B-1/Level-4-B-1?sc_site=Global',
                    navigationTitle: 'Who needs an annual examination',
                    isActive: false
                }
            ]
        },
        {
            id: '{EEDC0EDB-D2C5-49F1-BC48-7A7F67C387DA}',
            url: '/Level-1-B/Level-2-B-1/Level-3-B-1?sc_site=Global',
            navigationTitle: 'Neuroendovascular program',
            isActive: false
        },
        {
            id: '{EEDC0EDB-D2C5-49F1-BC48-7A7F67C387DA}',
            url: '/Level-1-B/Level-2-B-1/Level-3-B-1?sc_site=Global',
            navigationTitle: 'Stroke Program',
            isActive: false
        },
        {
            id: '{EEDC0EDB-D2C5-49F1-BC48-7A7F67C387DA}',
            url: '/Level-1-B/Level-2-B-1/Level-3-B-1?sc_site=Global',
            navigationTitle: 'Rehabilitation',
            isActive: false
        },
        {
            id: '{EEDC0EDB-D2C5-49F1-BC48-7A7F67C387DA}',
            url: '/Level-1-B/Level-2-B-1/Level-3-B-1?sc_site=Global',
            navigationTitle: 'Neurocritial care',
            isActive: false
        },
        {
            id: '{EEDC0EDB-D2C5-49F1-BC48-7A7F67C387DA}',
            url: '/Level-1-B/Level-2-B-1/Level-3-B-1?sc_site=Global',
            navigationTitle: 'Electromyography test',
            isActive: false
        },
        {
            id: '{EEDC0EDB-D2C5-49F1-BC48-7A7F67C387DA}',
            url: '/Level-1-B/Level-2-B-1/Level-3-B-1?sc_site=Global',
            navigationTitle: 'Find a location',
            isActive: false
        },
        {
            id: '{EEDC0EDB-D2C5-49F1-BC48-7A7F67C387DA}',
            url: '/Level-1-B/Level-2-B-1/Level-3-B-1?sc_site=Global',
            navigationTitle: 'Find a doctor',
            isActive: false
        },
        {
            id: '{EEDC0EDB-D2C5-49F1-BC48-7A7F67C387DA}',
            url: '/Level-1-B/Level-2-B-1/Level-3-B-1?sc_site=Global',
            navigationTitle: 'Appointments',
            isActive: false
        },
        {
            id: '{EEDC0EDB-D2C5-49F1-BC48-7A7F67C387DA}',
            url: '/Level-1-B/Level-2-B-1/Level-3-B-1?sc_site=Global',
            navigationTitle: 'Standard charges contact information',
            isActive: false
        }
    ]
};

export const mockLeftSideNavigationAnchorLinks: NavigationElement = {
    url: '/Level-1-B/Level-2-B-1?sc_site=Global',
    navigationTitle: 'Brain care center',
    children: [
        {
            url: '#first',
            navigationTitle: 'First anchor'
        },
        {
            url: '#second',
            navigationTitle: 'Second anchor',
            children: [
                {
                    url: '#third',
                    navigationTitle: 'Third anchor'
                },
                {
                    url: '#fourth',
                    navigationTitle: 'Fourth anchor',
                    children: [
                        {
                            url: '#fifth',
                            navigationTitle: 'Fifth anchor'
                        }
                    ]
                },
                {
                    url: '#sixth',
                    navigationTitle: 'Sixth anchor'
                }
            ]
        },
        {
            url: '#seventh',
            navigationTitle: 'Seventh anchor'
        }
    ]
};

export const columnCtaSingleColumnCopy = {
    value: '<p>Call Advocate at 800-3-ADVOCATE to schedule an appointment.</p><p>Paragraph text appears here and can wrap. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p><p><b>One to two line subheader is here</b></p><p><a href="#" >A one-line link goes here</a></p><p><a href="#" >A one-line link goes here</a></p>'
};

export const columnCtaCovidCopy = {
    value: '<p>Schedule your vaccination, get a COVID test and find answers to your questions.</p><p><a href="#" >Advocate Resource Center</a></p><p><a href="#" >Aurora Resource Center</a></p>'
};

export const columnCtaLivewellCopy = {
    value: '<p>Check the FAQ or call us at</p><p><a href="#" >855-624-9366</a></p><p><a href="#" >LiveWell FAQ</a></p>'
};

export const columnCtaShortSubheadingCopy = {
    value: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur  </p><ul><li><a href="#" >Sample Link is here and wraps to two lines</a></li><li><a href="#" >Sample Link is here and wraps to two lines</a></li><li><a href="#" >Sample Link is here and wraps to two lines</a></li></ul><p><a href="#" >View all lorem ipsum</a></p>'
};

export const imageHeadline = {
    value: 'Title of image. Lorem ipsum dolor sit amet.'
};

export const mediaGalleryCarouselImageHeadline = {
    value: 'Media Gallery Carousel'
};

export const imageCaption = {
    value: '<p>Image description and <a href="#">link</a> goes here.</p>'
};
