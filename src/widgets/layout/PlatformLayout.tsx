import { Row, Col, Container, Stack } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { Outlet, useNavigate } from "react-router-dom";
import { AccountIcon } from "../../assets/icons/AccountIcon";
import { BalanceIcon } from "../../assets/icons/BalanceIcon";
import { InfoIcon } from "../../assets/icons/InfoIcon";
import { JournalIcon } from "../../assets/icons/JournalIcon";
import { LogoutIcon } from "../../assets/icons/LogoutIcon";
import { ProfitIcon } from "../../assets/icons/ProfitIcon";
import { StatementIcon } from "../../assets/icons/StatementIcon";
import { TradeIcon } from "../../assets/icons/TradeIcon";
import { TrialIcon } from "../../assets/icons/TrialIcon";
import { endroutes } from "../../constant/endroutes";
import { logoutAsync } from "../../redux/app/appAsync";
import { useAppDispatch } from "../../redux/hooks";
import { HeaderWidget } from "../header/HeaderWidget";

import "./layout-style.scss";
import { NavLinkType } from "./layout-type";
import { useAnimationControls, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { matchPath, useMatch } from "react-router";
import { useColors } from "../../styles/variables-styles";
import appSlice from "../../redux/app/appSlice";
import { IncomeStatementIcon } from "../../assets/icons/IncomeStatementIcon";
import { useTranslation } from "react-i18next";
import { en } from "../../helper/languages/en";
import { HomeIcon } from "../../assets/icons/HomeIcon";
import { JoyrideHelper } from "../../features/joyride/JoyrideHelper";
import { joyride_story } from "../../features/joyride/joyride_story";
import { SearchIcon } from "../../assets/icons/SearchIcon";
import { NewsIcon } from "../../assets/icons/NewsIcon";

export const PlatformLayout = () => {
  const { t } = useTranslation();
  const colors = useColors();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(
      appSlice.actions.openConfirmBox({
        title: t(en.logout),
        message: t(en.confirm_logout),
        handleSubmit: () => {
          dispatch(logoutAsync());
        },
      })
    );
    //
  };

  const NavCard = ({ title, href, Icon, onClick, className }: any) => {
    const match = useMatch(href);
    const active = useMemo(() => match?.pathname.includes(href), []);
    const controls = useAnimationControls();

    useEffect(() => {
      if (active)
        controls.start({
          background: colors.background,
          color: colors.onSurface,
          // fill: colors.onPrimary,
        });
    }, [active]);

    const handleClick = () => {
      if (onClick) {
        onClick();
      } else {
        navigate(href);
      }
    };

    return (
      <motion.div
        animate={controls}
        className={"nav-card " + className}
        onClick={handleClick}
      >
        <div className="img">{Icon}</div>
        <div className="content">{t(title)}</div>
      </motion.div>
    );
  };

  // register 1
  return (
    <div id="platform-layout-style">
      <JoyrideHelper />
      <HeaderWidget />

      <Container className="platform-conainer" fluid>
        <Row>
          <Col className="sidebar-container" xs={2}>
            <Stack gap={2}>
              <NavCard
                href={endroutes.home.path}
                title={endroutes.home.title}
                Icon={<HomeIcon />}
              />
              <NavCard
                className={joyride_story.step1.className}
                href={endroutes.accounts.path}
                title={endroutes.accounts.title}
                Icon={<StatementIcon />}
              />
              <NavCard
                href={endroutes.journals.path}
                title={endroutes.journals.title}
                Icon={<JournalIcon />}
                className={joyride_story.step2.className}
              />

              <Stack className={joyride_story.step3.className} gap={2}>
                <NavCard
                  href={endroutes.account_statment().null_path}
                  title={endroutes.account_statment().title}
                  Icon={<SearchIcon />}
                />

                <NavCard
                  href={endroutes.trial_balance.path}
                  title={endroutes.trial_balance.title}
                  Icon={<TrialIcon />}
                />
                <NavCard
                  href={endroutes.trading_account.path}
                  title={endroutes.trading_account.title}
                  Icon={<TradeIcon />}
                />
                <NavCard
                  href={endroutes.profit_and_loss_account.path}
                  title={endroutes.profit_and_loss_account.title}
                  Icon={<ProfitIcon />}
                />
                <NavCard
                  href={endroutes.income_statement.path}
                  title={endroutes.income_statement.title}
                  Icon={<IncomeStatementIcon />}
                />
                <NavCard
                  href={endroutes.balancesheet.path}
                  title={endroutes.balancesheet.title}
                  Icon={<BalanceIcon />}
                />
              </Stack>

              <NavCard
                href={endroutes.about.path}
                title={endroutes.about.title}
                Icon={<InfoIcon />}
              />
              <NavCard
                href={endroutes.blog.path}
                title={"Blog"}
                Icon={<NewsIcon />}
              />

              <NavCard
                href={"logout"}
                title={t(en.logout)}
                Icon={<LogoutIcon />}
                onClick={handleLogout}
              />
            </Stack>
          </Col>

          <Col xs={10}>
            <div className="outlet-container">
              <Outlet />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
