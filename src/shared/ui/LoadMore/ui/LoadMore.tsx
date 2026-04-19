/* eslint-disable react/display-name */
import { Alert, CircularProgress, Stack } from '@mui/material';
import { memo, useRef } from 'react';
import { useLoadMore } from '../hooks/useLoadMore';

export const LoadMore = memo(() => {
	const ref = useRef<HTMLDivElement>(null);
	const { isEndOfList, isFetching } = useLoadMore({ ref });

	return (
		<Stack
			ref={ref}
			direction='row'
			justifyContent='center'
			alignItems='center'
			sx={{ my: 5 }}>
			{isFetching && <CircularProgress />}
			{isEndOfList && <Alert severity='success'>End of list!</Alert>}
		</Stack>
	);
});
