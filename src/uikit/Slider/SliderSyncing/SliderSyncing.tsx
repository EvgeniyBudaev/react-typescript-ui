import { memo, useEffect, useRef, useState } from "react";
import type { FC } from "react";
import Slider from "react-slick";
import { Modal, SLIDER_SYNCING_SETTINGS } from "uikit";
import type { TSliderSyncingProps } from "uikit";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderSyncing.scss";
import "../Slider.scss";

const SliderSyncingComponent: FC<TSliderSyncingProps> = (props) => {
  const { alt = "", images } = props;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [nav1, setNav1] = useState<Slider | undefined>();
  const [nav2, setNav2] = useState<Slider | undefined>();
  const slider1 = useRef<Slider>(null);
  const slider2 = useRef<Slider>(null);

  const settingsForModal = SLIDER_SYNCING_SETTINGS(props).settingsForModal;
  const settingsFor = SLIDER_SYNCING_SETTINGS(props).settingsFor;
  const settingsNav = SLIDER_SYNCING_SETTINGS(props).settingsNav;

  useEffect(() => {
    slider1.current && setNav1(slider1.current);
    slider2.current && setNav2(slider2.current);
  }, []);

  useEffect(() => {
    slider1.current && slider1.current.slickGoTo(currentSlide);
    slider2.current && slider2.current.slickGoTo(currentSlide);
  }, [currentSlide]);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const handleAfterChange = (currentSlideAfterChange: number) => {
    setCurrentSlide(currentSlideAfterChange);
  };

  return (
    <>
      <Modal className="Slider-Modal" isOpen={isOpenModal} onCloseModal={handleCloseModal}>
        <Modal.Content>
          <Slider
            asNavFor={nav2}
            initialSlide={currentSlide}
            ref={slider1}
            afterChange={handleAfterChange}
            {...settingsForModal}
          >
            {images &&
              images.map((image, index) => {
                return (
                  <div className="SliderSyncing-ImageContainer" key={index + "Nav"}>
                    <img
                      alt={alt}
                      className="SliderSyncing-Image"
                      height="100%"
                      src={image}
                      width="100%"
                    />
                  </div>
                );
              })}
          </Slider>
        </Modal.Content>
      </Modal>

      <Slider
        afterChange={handleAfterChange}
        asNavFor={nav2}
        initialSlide={currentSlide}
        ref={slider1}
        {...settingsFor}
      >
        {images &&
          images.map((image, index) => {
            return (
              <div className="SliderSyncing-ImageContainer" key={index + "For"}>
                <img
                  alt={alt}
                  className="SliderSyncing-Image"
                  height="100%"
                  onClick={handleOpenModal}
                  src={image}
                  width="100%"
                />
              </div>
            );
          })}
      </Slider>

      <Slider asNavFor={nav1} initialSlide={currentSlide} ref={slider2} {...settingsNav}>
        {images &&
          images.map((image, index) => {
            return (
              <div key={index + "Nav"}>
                <img
                  alt={alt}
                  className="SliderSyncing-Image"
                  height="100%"
                  src={image}
                  width="100%"
                />
              </div>
            );
          })}
      </Slider>
    </>
  );
};

export const SliderSyncing = memo(SliderSyncingComponent);
