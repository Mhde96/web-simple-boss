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
import { useEffect, useMemo } from "react";
import { matchPath, useMatch } from "react-router";
import { colors } from "../../styles/variables-styles";
import appSlice from "../../redux/app/appSlice";

export const PlatformLayout = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(
      appSlice.actions.openConfirmBox({
        title: "Logout",
        message: "are you sure you want to logout ",
        handleSubmit: () => {
          dispatch(logoutAsync());
        },
      })
    );
    //
  };

  const NavCard = ({ title, href, Icon, onClick }: any) => {
    const match = useMatch(href);
    const active = useMemo(() => match?.pathname.includes(href), []);
    const controls = useAnimationControls();

    useEffect(() => {
      if (active)
        controls.start({
          background: colors.primary,
          color: colors.onPrimary,
          fill: colors.onPrimary,
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
      <motion.div animate={controls} className="nav-card" onClick={handleClick}>
        <div className="img">{Icon}</div>
        <div className="content">{title}</div>
      </motion.div>
    );
  };

  // register 1
  return (
    <div id="platform-layout-style">
      <HeaderWidget />
      <Container className="platform-conainer" fluid>
        <Row>
          <Col className="sidebar-container" xs={2}>
            <Stack gap={2}>
              <NavCard
                href={endroutes.journals.path}
                title={endroutes.journals.title}
                Icon={<JournalIcon />}
              />
              <NavCard
                href={endroutes.accounts.path}
                title={endroutes.accounts.title}
                Icon={<AccountIcon />}
              />
              <NavCard
                href={endroutes.account_statment().null_path}
                title={endroutes.account_statment().title}
                Icon={<StatementIcon />}
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
                href={endroutes.balancesheet.path}
                title={endroutes.balancesheet.title}
                Icon={<BalanceIcon />}
              />
              <NavCard
                href={endroutes.income_statement.path}
                title={endroutes.income_statement.title}
                Icon={<ProfitIcon />}
              />
              <NavCard
                href={endroutes.balance_statement.path}
                title={endroutes.balance_statement.title}
                Icon={<BalanceIcon />}
              />
              <NavCard
                href={endroutes.about.path}
                title={endroutes.about.title}
                Icon={<InfoIcon />}
              />

              <NavCard
                href={"logout"}
                title={"logout"}
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
