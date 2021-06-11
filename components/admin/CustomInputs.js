import React from 'react';

export const CustomInput = ({ value, setValue, children, type = 'text' }) => {
	return (
		<div>
			<label>{children}</label>
			<input
				type={type}
				placeholder={children}
				className='v-custom-input'
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
		</div>
	);
};

export const CustomTextArea = ({ value, setValue, children, rows }) => {
	return (
		<div>
			<label>{children}</label>
			<textarea
				type='text'
				placeholder={children}
				className='v-custom-textarea'
				value={value}
				onChange={e => setValue(e.target.value)}
				rows={rows}
			/>
		</div>
	);
};

export const CustomUpload = ({ value, setValue, children }) => {
	return (
		<div>
			<label>{children}</label>
			<input
				className='v-custom-imageupload'
				type='file'
				accept='image/*'
				value={value != undefined ? value.target.value : ''}
				onChange={e => {
					//console.log(e.target.files[0]);
					setValue(e);
				}}
			/>
		</div>
	);
};
