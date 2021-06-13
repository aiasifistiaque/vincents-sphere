import React, { useState } from 'react';

const useLoadMore = (items, page, loading) => {
	const [pageLoading, setPageLoading] = useState(true);
	const [end, setEnd] = useState(false);
	const [total, setTotal] = useState([]);

	useEffect(() => {
		if (page == 0) {
			setPageLoading(true);
			setEnd(false);
			setTotal([]);
		}
		let newItems = [];
		if (total.length > 0 && page > 0) {
			newItems = total.concat(items);
			setTotal(newItems);
		} else {
			setTotal(items);
		}
		setPageLoading(false);
		if (!loading && items.length == 0) setEnd(true);
	}, [items]);

	return { total, pageLoading, end };
};

export default useLoadMore;
