import Image from 'next/image';
import nexab_footer_logo from '../../../../public/images/logo/company-logo.png';
import qr_code from '../../../../public/svgs/qr_code.svg';
import ic_google_playstore from '../../../../public/svgs/ic_google_playstore.svg';
import ic_baseline_apple from '../../../../public/svgs/ic_baseline_apple.svg';
import ic_chevron_down from '../../../../public/svgs/ic_chevron_down.svg';
import ic_copyright from '../../../../public/svgs/ic_copyright.svg';

import Link from 'next/link';

const linksArr = [
  {
    title: 'About us',
    links: [
      { label: 'Our Company', path: '/about-us' },
      // { label: 'Careers', path: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms of use', path: '/terms' },
      { label: 'Privacy policy', path: '/privacy' },
      { label: 'About us', path: '/about-us' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact us', path: '/contact' },
      { label: 'FAQ', path: '/#faq' },
    ],
  },
];

import {
  Wrapper,
  Inner,
  FooterLogo,
  FooterMainContent,
  FooterMiddle,
  QRContainer,
  QRImageCtn,
  TextCtn,
  IconCtn,
  FooterNavigation,
  GridColumn,
  LinksContainer,
  FooterBottom,
  Translator,
  CopyRight,
} from './styles';

const Footer = () => {
  return (
    <Wrapper>
      <Inner>
        <FooterLogo>
          <Image src={nexab_footer_logo} alt="nexab_footer_logo" width={120} height={40} style={{ objectFit: 'contain', transform: 'scale(3.5)' }} />
        </FooterLogo>
        <FooterMainContent>
          <FooterMiddle>
            <QRContainer>
              <QRImageCtn>
                <Image src={qr_code} alt="qr_code" />
              </QRImageCtn>
              <TextCtn>
                <p>Scan to download Nexab App on the Playstore and Appstore.</p>
                <IconCtn>
                  <Image src={ic_google_playstore} alt="playstore icon" />
                  <Image src={ic_baseline_apple} alt="apple icon" />
                </IconCtn>
              </TextCtn>
            </QRContainer>
            <FooterNavigation>
              {linksArr.map((l, i) => (
                <GridColumn key={i}>
                  <h3>{l.title}</h3>
                  <LinksContainer>
                    {l.links.map((link, i) => (
                      <li key={i}>
                        <Link href={link.path}>{link.label}</Link>
                      </li>
                    ))}
                  </LinksContainer>
                </GridColumn>
              ))}
            </FooterNavigation>
          </FooterMiddle>
          <FooterBottom>
            <CopyRight>
              <Image src={ic_copyright} alt="copyright svg" />
              Nexab Corp, LLC.
            </CopyRight>
          </FooterBottom>
        </FooterMainContent>
      </Inner>
    </Wrapper>
  );
};

export default Footer;
