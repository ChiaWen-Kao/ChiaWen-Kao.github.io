/**
 * Component: Alert
 *
 * An alert for displaying success or failure messages.
 *
 * Features:
 * - Displays a colored label and message based on the status (Success or Fail).
 * - Close button to dismiss the alert.
 *
 * @param {AlertProps} props: Props to configure the alert component.
 * @param {"Success" | "Fail"} props.status: Status of the alert to determine color.
 * @param {string} props.message: The message to display inside the alert.
 * @param {boolean} props.visible: Whether the alert should be visible.
 * @param {() => void} props.onClose: Callback function when the alert is closed.
 *
 * @returns {JSX.Element} The Alert component JSX.
 *
 * @example
 * <Alert
 *   status="Success"
 *   message="Your message has been sent."
 *   visible={alertVisible}
 *   onClose={() => setAlertVisible(false)}
 * />
 */

"use client";

import { useRef, useEffect } from "react";
import { fadeInDown, fadeOutUp } from "utils/gsapAnimation";

interface AlertProps {
  status: "Success" | "Fail";
  message: string;
  visible: boolean;
  onClose: () => void;
}

export default function Alert({
  status,
  message,
  visible,
  onClose,
}: AlertProps) {
  const bgColour = status === "Success" ? "bg-success" : "bg-fail";
  const textColour = status === "Success" ? "text-success" : "text-fail";
  const label = status === "Success" ? "text-success" : "text-fail";

  const alertRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (visible) {
      fadeInDown(alertRef);
    }
  }, [visible]);

  return (
    <div
      className="fixed top-30 right-0 left-0 flex justify-center z-10"
      ref={alertRef}
    >
      <div
        className={`relative rounded inline-flex items-center py-4 px-3 ${bgColour}`}
      >
        <span
          className={`rounded-full px-2 py-1 bg-foreground font-bold text-sm ${textColour} uppercase mr-3`}
        >
          {status}
        </span>
        <span className="font-bold text-foreground">{message}</span>
        <span
          className="ml-10 cursor-pointer"
          onClick={() => {
            fadeOutUp(alertRef, onClose);
          }}
        >
          <svg
            className="fill-current h-6 w-6"
            fill={`${textColour}`}
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
      </div>
    </div>
  );
}
