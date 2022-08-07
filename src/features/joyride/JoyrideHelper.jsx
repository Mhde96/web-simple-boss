import { useEffect, useState } from "react";
import Joyride from "react-joyride";
import { joyride_story } from "./joyride_story";
import { useCookies } from "react-cookie";
import { cookiesKey } from "../../constant/cookiesKey";

export const JoyrideHelper = () => {
  const [runJoyride, setRunJoyride] = useState(false);
  const [cookie, setCookie] = useCookies();

  const handleRun = () => {
    if (cookie[cookiesKey.introductionApp] == undefined) {
      setRunJoyride(true);
      setCookie(cookiesKey.introductionApp, false);
    }
  };

  useEffect(() => {
    handleRun();
  }, []);

  return (
    <>
      <Joyride
        continuous
        hideBackButton
        hideCloseButton
        scrollToFirstStep
        showProgress
        showSkipButton
        run={runJoyride}
        steps={[
          { ...joyride_story.first_step },
          { ...joyride_story.step1 },
          { ...joyride_story.step2 },
          { ...joyride_story.step3 },
          { ...joyride_story.last_step },
        ]}
        styles={{
          options: {
            zIndex: 10000,
          },
        }}
      />
    </>
  );
};
