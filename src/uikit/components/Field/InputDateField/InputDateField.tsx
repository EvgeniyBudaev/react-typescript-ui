import { Popover as UiPopover, Transition } from "@headlessui/react";
import clsx from "clsx";
import { format } from "date-fns";
import { createRef, Fragment, memo } from "react";
import type { FC, SyntheticEvent } from "react";

import { DatePicker } from "../../DatePicker";
import { usePopover } from "../../../hooks";
import { InputDate } from "../../Input";
import { POPOVER_POSITION_STYLES } from "../../Popover";
import "./InputDateField.scss";

type TProps = {
  isInvalid?: boolean;
  locale?: Locale;
  onChange: (value: Date | null) => void;
  onFieldClear?: (event: SyntheticEvent) => void;
  placeholder?: string;
  subTitle?: string;
  title?: string;
  value: Date | null;
};

const InputDateFieldComponent: FC<TProps> = (props) => {
  const { isInvalid, locale, onChange, onFieldClear, placeholder, subTitle, title, value } = props;
  const triggerRef = createRef<HTMLDivElement>();

  const { attributes, popoverPosition, setPopperElement, setReferenceElement, styles } = usePopover(
    { triggerRef },
  );

  return (
    <div className="InputDateField">
      <UiPopover className="HeadlessPopover">
        <UiPopover.Button ref={setReferenceElement} className="HeadlessPopover-Button">
          <div className="HeadlessPopover-Trigger" ref={triggerRef}>
            <InputDate
              isInvalid={isInvalid}
              onFieldClear={onFieldClear}
              placeholder={placeholder}
              subTitle={subTitle}
              title={title}
              value={value ? format(value, "dd.MM.yyyy", { locale }) : null}
            />
          </div>
        </UiPopover.Button>
        <Transition as={Fragment}>
          <UiPopover.Panel
            ref={setPopperElement}
            style={styles.popper}
            className={clsx(
              "HeadlessPopover-Panel",
              `HeadlessPopover-Panel__${POPOVER_POSITION_STYLES[popoverPosition]}`,
            )}
            {...attributes.popper}
          >
            {({ close }) => (
              <Transition.Child
                as={Fragment}
                enter="HeadlessPopover-Transition__enter"
                enterFrom="HeadlessPopover-Transition__enterFrom"
                enterTo="HeadlessPopover-Transition__enterTo"
                leave="HeadlessPopover-Transition__leave"
                leaveFrom="HeadlessPopover-Transition__leaveFrom"
                leaveTo="HeadlessPopover-Transition__leaveTo"
              >
                <div className="HeadlessPopover-PanelContent">
                  <DatePicker
                    locale={locale}
                    onChange={(date: Date) => {
                      onChange(date);
                      close();
                    }}
                    value={value}
                  />
                </div>
              </Transition.Child>
            )}
          </UiPopover.Panel>
        </Transition>
      </UiPopover>
    </div>
  );
};

export const InputDateField = memo(InputDateFieldComponent);
