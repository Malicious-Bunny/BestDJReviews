'use client'

import { useState } from 'react';
import { FaFacebook, FaLink, FaTwitter } from 'react-icons/fa';

const ShareArticle = ({ url }: any) => {
  const [showMessage, setShowMessage] = useState(false);

  const handleShare = (platform: string) => {
    let shareUrl = '';

    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=Check out this article&body=${encodeURIComponent(url)}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, '_blank');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  };

  return (
    <div className='links mt-2 flex flex-row text-gray-400 gap-4 self-center'>
      <button onClick={() => handleShare('twitter')}>
                <FaTwitter className="text-xl hover:cursor-pointer hover:text-[#FF7A00]" /></button>
      <button onClick={() => handleShare('facebook')}>
                <FaFacebook className="text-xl hover:cursor-pointer hover:text-[#FF7A00]" /></button>
     
     
      <button onClick={handleCopy}><FaLink className="text-xl hover:cursor-pointer hover:text-[#FF7A00]" /></button>
      {showMessage && <span>Link copied to clipboard!</span>}
    </div>
  );
};

export default ShareArticle;
