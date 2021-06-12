import React, { useEffect } from 'react';

const FbChat = () => {
	useEffect(() => {
		FB.init({
			appId: 777093836325354,
			autoLogAppEvents: true,
			version: 'v10.0',
			status: true,
			cookie: true,
			xfbml: false,
		});
	}, []);

	return (
		<div>
			<div
				className='fb-customerchat'
				//attribution='setup_tool'
				page_id='110218757538456'
				// theme_color="..."
				// logged_in_greeting="..."
				// logged_out_greeting="..."
				// greeting_dialog_display="..."
				// greeting_dialog_delay="..."
				// minimized="false"
				// ref="..."
			/>
		</div>
	);
};

export default FbChat;
