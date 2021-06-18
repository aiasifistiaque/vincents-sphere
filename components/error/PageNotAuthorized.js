import React from 'react';
import Page from '../Page';
import { TextButton, LongButton } from '..';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

const PageNotAuthorized = () => {
	const router = useRouter();
	return (
		<Page>
			<div
				style={{
					display: 'flex',
					flex: 1,
					padding: '15vh 5%',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column',
				}}>
				<div style={{ marginTop: '7em', marginBottom: '1em' }}>
					<FontAwesomeIcon
						icon={faBan}
						height={100}
						style={{ minHeight: 80, width: 80 }}
					/>
				</div>
				<h4
					style={{
						marginBottom: '.2em',
						textAlign: 'center',
						fontWeight: 600,
					}}>
					Error 401: Unauthorized
				</h4>
				<p style={{ textAlign: 'center', maxWidth: 600 }}>
					The link may be broken or you may not have the permission to access
					this page. Check to see if the link you're trying to open is correct.
				</p>

				<div style={{ margin: '.5em 0 .3em 0' }}>
					<LongButton onClick={() => router.replace('/')}>
						Go to Home
					</LongButton>
				</div>

				<TextButton onClick={() => router.back()}>Go back</TextButton>
			</div>
		</Page>
	);
};

export default PageNotAuthorized;
