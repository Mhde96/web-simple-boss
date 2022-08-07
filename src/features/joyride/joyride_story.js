import {} from "react-joyride";

const defaultProps = {
  // disableOverlay: false,
  // disableOverlayClose: true,
  disableBeacon: true,
  hideCloseButton: true,
  // spotlightClicks: true,

  // styles: {
  //   options: {
  //     zIndex: 10000,
  //   },
  // },
};
export const joyride_story = {
  first_step: {
    className: "body",
    target: "body",
    content: `Our Program very simple and don't need alot of explane 
    you can understand the system in two step
    `,
    placement: "center",
    ...defaultProps,
  },
  step1: {
    className: "account_story",
    target: ".account_story",
    content: "Define your Accounts",
    ...defaultProps,
  },
  step2: {
    className: "journal_story",
    target: ".journal_story",
    content: "Add your journals",
    ...defaultProps,
  },
  step3: {
    className: "report_story",
    target: ".report_story",
    content: "get your reports",
    ...defaultProps,
  },
  last_step: {
    className: "body",
    target: "body",
    content: (
      <div>
        <div>congratulations 🎉</div>
        <div> enjoy you time</div>
      </div>
    ),
    placement: "center",
    ...defaultProps,
  },
};
