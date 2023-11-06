import HeadingPanel from "components/ui/HeadingPanel";
import TextPanel from "components/ui/TextPanel";

import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Flex,
  Center,
  Button,
  VStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import cookies_logo from "../../../images/misc/cookie-6116766_640.png";
import Roll from "react-reveal/Roll";

function CookiesInformation() {
  return (
    <>
      <VStack backgroundColor={"accent-1"} paddingBottom={"150px"}>
        <Roll left>
          <Image
            src={cookies_logo}
            alt="cookies-logo"
            paddingBottom={"30px"}
            paddingTop={"60px"}
            w={"200px"}
          />
        </Roll>
        <TextPanel>
          <HeadingPanel backgroundColor="secondary">
            What are cookies?
          </HeadingPanel>
          <br />
          Cookies are small text files stored on your computer by your web
          browser at the request of a site you're viewing. This allows the site
          you're viewing to remember things about you, such as your preferences
          and history or to keep you logged in. Cookies may be stored on your
          computer for a short time (such as only while your browser is open) or
          for an extended period of time, even years. Cookies not set by this
          site will not be accessible to us.
        </TextPanel>

        <TextPanel>
          <HeadingPanel backgroundColor="secondary">
            Our cookie usage
          </HeadingPanel>
          <br />
          This site uses cookies for numerous things, including:
          <UnorderedList>
            <ListItem>
              Registration and maintaining your preferences. This includes
              ensuring that you can stay logged in and keeping the site in the
              language or appearance that you requested.
            </ListItem>
            <ListItem>
              Analytics. This allows us to determine how people are using the
              site and improve it.
            </ListItem>
            <ListItem>
              Advertising cookies (possibly third-party). If this site displays
              advertising, cookies may be set by the advertisers to determine
              who has viewed an ad or similar things. These cookies may be set
              by third parties, in which case this site has no ability to read
              or write these cookies.
            </ListItem>
            <ListItem>
              Other third-party cookies for things like Facebook or Twitter
              sharing. These cookies will generally be set by the third-party
              independently, so this site will have no ability to access them.
            </ListItem>
          </UnorderedList>
        </TextPanel>

        <TextPanel>
          <HeadingPanel backgroundColor="secondary">
            Additional cookies and those set by third parties
          </HeadingPanel>
          <br />
          Additional cookies may be set during the use of the site to remember
          information as certain actions are being performed, or remembering
          certain preferences. Other cookies may be set by third party service
          providers which may provide information such as tracking anonymously
          which users are visiting the site, or set by content embedded into
          some pages, such as YouTube or other media service providers.
        </TextPanel>

        <TextPanel>
          <HeadingPanel backgroundColor="secondary">
            Removing/disabling cookies
          </HeadingPanel>
          <br />
          Additional cookies may be set during the use of the site to remember
          information as certain actions are being performed, or remembering
          certain preferences. Other cookies may be set by third party service
          providers which may provide information such as tracking anonymously
          which users are visiting the site, or set by content embedded into
          some pages, such as YouTube or other media service providers.
          <Center paddingTop={"20px"}>
            <UnorderedList textAlign={"left"}>
              <ListItem>
                <Link href="https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies">
                  Microsoft Internet Explorer
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://privacy.microsoft.com/en-us/windows-10-microsoft-edge-and-privacy">
                  Microsoft Edge
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer">
                  Mozilla Firefox
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://support.google.com/chrome/answer/95647?hl=en">
                  Google Chrome
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://support.apple.com/en-gb/guide/safari/manage-cookies-and-website-data-sfri11471/mac">
                  Safari for macOS
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://support.apple.com/en-gb/HT201265">
                  Safari for iOS
                </Link>
              </ListItem>
            </UnorderedList>
          </Center>
        </TextPanel>

        <TextPanel>
          <HeadingPanel backgroundColor="secondary">
            Removing/disabling cookies
          </HeadingPanel>
          <br />
          To learn more about cookies, and find more information about blocking
          certain types of cookies, please visit the{" "}
          <Link href="https://ico.org.uk/for-the-public/online/cookies/">
            <Text>ICO website Cookies page</Text>
          </Link>
          .
        </TextPanel>
      </VStack>
    </>
  );
}

export default CookiesInformation;
