import Image from 'next/image';
import React from 'react';

import { Button } from './button';
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';

interface FormStatusDialogProps extends React.ComponentProps<typeof Dialog> {
  variant: 'success' | 'error';
  loading?: boolean;
}

const FormStatusDialog: React.FC<FormStatusDialogProps> = ({
  variant,
  loading,
  ...props
}) => {
  return (
    <Dialog {...props}>
      <DialogContent>
        <DialogHeader className='relative h-34.25 bg-linear-to-br from-[#0093DD] to-[#46AEE2] md:h-42'>
          <Image
            src={
              variant === 'success'
                ? '/icons/icon-form-message-success.svg'
                : '/icons/icon-form-message-error.svg'
            }
            alt={variant === 'success' ? 'success' : 'error'}
            width={220}
            height={242}
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-125 md:scale-160'
          />
        </DialogHeader>
        <DialogBody>
          <DialogTitle>
            {variant === 'success'
              ? 'Your message has been sent!'
              : 'Oops! Your message couldn’t be sent.'}
          </DialogTitle>
          <DialogDescription>
            {variant === 'success'
              ? 'Thanks for contacting us. We’ll respond to you shortly.'
              : 'Please try again later or check your internet connection.'}
          </DialogDescription>
          <DialogClose asChild>
            <Button className='max-90.25 mx-auto mt-6 md:mt-8'>
              {loading ? 'Loading...' : 'Back to Home'}
            </Button>
          </DialogClose>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
};

export default FormStatusDialog;
