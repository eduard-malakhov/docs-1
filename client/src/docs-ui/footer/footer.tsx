import {Component, h} from "@stencil/core";
import {
  footerContainerStyle,
  footerStyle,
  leftLinkContainerStyle,
  rightLinkContainerStyle,
  legalStyle,
  socialLinkContainerStyle,
} from "./footer.style";
import * as links from "../../constants/links";

@Component({tag: "docs-footer", shadow: false})
export class DocsFooter {
  render() {
    return (
      <amplify-container class={footerContainerStyle}>
        <div class={footerStyle}>
          <div class={leftLinkContainerStyle}>
            <img src="/assets/logo-light.svg" />
            <div>
              <h3>Amplify</h3>
              <docs-internal-link href="/start">
                Getting Started
              </docs-internal-link>
              <amplify-external-link href={links.DISCORD}>
                Support
              </amplify-external-link>
            </div>
            <div>
              <h3>Community</h3>
              <amplify-external-link href={links.COMMUNITY_EVENTS}>
                Events
              </amplify-external-link>
              <amplify-external-link href={links.COMMUNITY_POSTS}>
                Posts
              </amplify-external-link>
              <amplify-external-link href={links.COMMUNITY_CONTRIBUTORS}>
                Members
              </amplify-external-link>
              <amplify-external-link href={links.COMMUNITY_NEWSLETTERS}>
                Newsletters
              </amplify-external-link>
            </div>
          </div>
          <div class={rightLinkContainerStyle}>
            <div class={socialLinkContainerStyle}>
              <amplify-external-link anchorTitle="Twitter" href={links.TWITTER}>
                <img src="/assets/twitter.svg" />
              </amplify-external-link>
              <amplify-external-link anchorTitle="Discord" href={links.DISCORD}>
                <img src="/assets/discord-white.svg" />
              </amplify-external-link>
              <amplify-external-link anchorTitle="GitHub" href={links.GITHUB}>
                <img src="/assets/github-light.svg" />
              </amplify-external-link>
            </div>
            <div class={legalStyle}>
              <span>
                <img src="/assets/aws.svg" />
                {`Amplify open source, documentation and community are supported
                by Amazon Web Services © 2019, Amazon Web Services, Inc. and its
                affiliates. All rights reserved. View the `}
                <amplify-external-link href={links.TERMS}>
                  site terms
                </amplify-external-link>
                {` and `}
                <amplify-external-link href={links.PRIVACY}>
                  privacy policy
                </amplify-external-link>
                .
              </span>
            </div>
          </div>
        </div>
      </amplify-container>
    );
  }
}
