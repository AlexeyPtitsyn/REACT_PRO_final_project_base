/* eslint-disable react/display-name */
import classNames from 'classnames';
import s from './Price.module.css';
import { memo } from 'react';

type TPriceProps = {
	price: number;
	discountPrice: number;
};

export const Price = memo(({ price, discountPrice }: TPriceProps) => {
	return (
		<div className={classNames(s['price-small'], s['price-wrap'])}>
			<span className={classNames(s['price_old'], s['price_left'])}>
				{`${price}₽`}
			</span>
			<span className={classNames(s['price_discount'], s['price'])}>
				{`${price - discountPrice}₽`}
			</span>
		</div>
	);
});
