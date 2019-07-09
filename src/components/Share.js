import React from 'react';
import './Share.css';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
} from 'react-share';


const Share = ({text}) => {
  const shareUrl = "https://chingu-v9-geckos-04.netlify.com";
  const title = text + "\n";
  const btnStyle = text ? "share-btn" : "share-btn share-hidden";

  return (

    <div className="Share">
    <span className="share-label">Share this : </span>
      <div className="share-btn">
      <div className={btnStyle}>
        <FacebookShareButton
          url={shareUrl}
          quote={title}
          hashtag="voicerecognition"
        className="facebook">
          <FacebookIcon
            size={48}
          round />
        </FacebookShareButton>
      </div>

      <div className={btnStyle}>
        <TwitterShareButton
          url={shareUrl}
          title={title + "\n"}
          hashtags={["vext", "chingucollabs", "SpeechToText", "VoiceRecognition"]}
        className="twitter">
          <TwitterIcon
            size={48}
          round />
        </TwitterShareButton>
      </div>

      <div className={btnStyle}>
        <WhatsappShareButton
          url={shareUrl}
          title={title}
          separator=""
        className="whatsapp">
          <WhatsappIcon size={48} round />
        </WhatsappShareButton>
      </div>

      <div className={btnStyle}>
        <EmailShareButton
          // url={"\n" + "Vext - Speak your mind" + "\n" + shareUrl + "\n"}
          url={`\nVext - Speak your mind \n${shareUrl} \n`}
          subject="New Voice Message transcribed using VEXT"
          body={text + "\n"}
        className="email">
          <EmailIcon
            size={48}
            round />
        </EmailShareButton>
      </div>


</div>
    </div>
  );
}

export default Share;
