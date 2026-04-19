import { JSX, useState } from 'react';
import { ConfirmModalOptions, ConfirmModalProps } from '../model/types';
import { ConfirmModal } from '..';

export interface UseConfirmModalResult {
	confirm: (options?: ConfirmModalOptions) => Promise<boolean>;
	element: JSX.Element | null;
}

export const useConfirmModal = (): UseConfirmModalResult => {
	const [ModalProps, setModalProps] = useState<
		(ConfirmModalProps & { resolve: (value: boolean) => void }) | null
	>(null);

	const confirm = (options: ConfirmModalOptions = {}): Promise<boolean> => {
		return new Promise((resolve) => {
			setModalProps({
				title: options.title,
				message: options.message,
				onConfirm: () => resolve(true),
				onCancel: () => resolve(false),
				resolve,
			});
		});
	};

	const handleConfirm = () => {
		ModalProps?.onConfirm();
		setModalProps(null);
	};

	const handleCancel = () => {
		ModalProps?.onCancel();
		setModalProps(null);
	};

	const element = ModalProps ? (
		<ConfirmModal
			title={ModalProps.title}
			message={ModalProps.message}
			onConfirm={handleConfirm}
			onCancel={handleCancel}
		/>
	) : null;

	return { confirm, element };
};
