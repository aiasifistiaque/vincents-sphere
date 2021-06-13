import React from 'react';
import {
	EmailIcon,
	FacebookIcon,
	FacebookMessengerIcon,
	HatenaIcon,
	InstapaperIcon,
	LineIcon,
	LinkedinIcon,
	LivejournalIcon,
	MailruIcon,
	OKIcon,
	PinterestIcon,
	PocketIcon,
	RedditIcon,
	TelegramIcon,
	TumblrIcon,
	TwitterIcon,
	ViberIcon,
	VKIcon,
	WeiboIcon,
	WhatsappIcon,
	WorkplaceIcon,
	EmailShareButton,
	WhatsappShareButton,
	FacebookShareButton,
	TwitterShareButton,
	InstapaperShareButton,
	PinterestShareButton,
} from 'react-share';

const UpdatedProductDetails = ({ product }) => {
	return (
		<div
			style={{
				backgroundColor: 'white',
				margin: '2em 1em',
				borderRadius: 4,
			}}>
			<ShareProduct product={product} />
			<h1 style={{ marginBottom: 20, color: 'black' }}>Description</h1>
			<p style={{ lineHeight: '2em', color: 'black' }}>{product.description}</p>
		</div>
	);
};

const ShareProduct = ({ product }) => {
	const url = `https://vincentsphere.com/product/${product._id}`;
	const size = 40;
	const cn = 'shr-icon';
	const title = product._name;

	return (
		<div
			style={{
				display: 'flex',
				paddingBottom: '2em',
				alignItems: 'center',
			}}>
			<p style={{ margin: 0, padding: 0, marginRight: 10, fontWeight: '600' }}>
				Share This Item:
			</p>
			<FacebookShareButton
				title={title}
				url={url}
				size={size}
				round={true}
				description={product.description}>
				<FacebookIcon size={size} round className={cn} />
			</FacebookShareButton>

			<WhatsappShareButton title={title} url={url}>
				<WhatsappIcon size={size} round className={cn} />
			</WhatsappShareButton>

			<TwitterShareButton title={title} url={url}>
				<TwitterIcon size={size} round className={cn} />
			</TwitterShareButton>

			<PinterestShareButton title={title} url={url}>
				<PinterestIcon size={size} round className={cn} />
			</PinterestShareButton>

			<EmailShareButton title={title} url={url}>
				<EmailIcon size={size} round className={cn} />
			</EmailShareButton>
		</div>
	);
};

export default UpdatedProductDetails;
