import { Modal } from 'components/Modal/Modal';
import { ImageGalleryItemStyle } from './ImageGalleryItem.styled';
import { UseToggleModal } from 'hooks/useToggle.hooks';
import { FC } from 'react';
import { IImage } from 'types/interfaces';

export const ImageGalleryItem: FC<
  Pick<IImage, 'largeImageURL' | 'tags' | 'webformatURL'>
> = ({ webformatURL, tags, largeImageURL }) => {
  const { isOpen, open, close } = UseToggleModal();
  return (
    <>
      <ImageGalleryItemStyle>
        <img src={webformatURL} alt={tags} onClick={open} />
        {isOpen && (
          <Modal closeModal={close}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </ImageGalleryItemStyle>
    </>
  );
};
