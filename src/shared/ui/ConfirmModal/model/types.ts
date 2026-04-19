export interface ConfirmModalOptions {
    title?: string;
    message?: string;
}

export interface ConfirmModalProps extends ConfirmModalOptions {
    onConfirm: () => void;
    onCancel: () => void;
}
