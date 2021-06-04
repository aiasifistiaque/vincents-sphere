//asdkasj

export const MonthName = () => {};

export const getUnixToDate = unix => {
	const date = new Date(unix);
	const day = date.getDate();
	const month = date.getMonth();
	const year = date.getFullYear();
	const monthName = getNumberToMonth(month);
	return `${day} ${getNumberToMonth(month)}, ${year}`;
};

export const getNumberToMonth = month => {
	switch (month.toString()) {
		case '0':
			return 'January';
		case '1':
			return 'February';
		case '2':
			return 'March';
		case '3':
			return 'April';
		case '4':
			return 'May';
		case '5':
			return 'June';
		case '6':
			return 'July';
		case '7':
			return 'August';
		case '8':
			return 'September';
		case '9':
			return 'October';
		case '10':
			return 'November';
		case '11':
			return 'December';
	}
};

const getDatePrefix = date => {
	switch (date) {
		case '1':
			return 'st';
		case '2':
			return 'nd';
		case '3':
			return 'rd';
		case '21':
			return 'st';
		case '31':
			return 'st';
		case '22':
			return 'nd';
		default:
			return 'th';
	}
};

export const unixToHourMin = unix => {
	const date = new Date(unix);
	const hour = date.getHours();
	const min =
		date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
	if (hour == 0) return '12:' + min + ' am';
	if (hour == 12) return '12:' + min + ' pm';
	if (hour < 12) {
		if (hour < 10) return `0${hour}:${min} am`;
		else return `${hour}:${min} am`;
	}
	if (hour > 12) {
		let hh = hour - 12;
		if (hh < 10) return `0${hh}:${min} pm`;
		else return `${hh}:${min} pm`;
	}
};
