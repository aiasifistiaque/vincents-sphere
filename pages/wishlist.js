import Page from '../components/Page';
import { useSelector } from 'react-redux';
import WishProducts from '../components/product/WishProducts';

const wishlist = () => {
	const { favItems } = useSelector(state => state.favItems);

	return (
		<Page>
			<div className='explore-page'>
				<h1>Wishlist</h1>
			</div>

			<div className='all-products-explore'>
				{favItems.length == 0 ? (
					<h3>No items in list</h3>
				) : (
					favItems.map((id, i) => <WishProducts key={i} id={id} />)
				)}
			</div>
		</Page>
	);
};

export default wishlist;
