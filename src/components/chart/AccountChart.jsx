import React, { PureComponent } from "react";
import { Button, Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { endroutes } from "../../constant/endroutes";
import { en } from "../../helper/languages/en";
import { useBreakpoints } from "../../hook/useBreakPoint";
import { selectAccounts } from "../../redux/data/dataSlice";
import { useColors } from "../../styles/variables-styles";

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export const AccountChart = () => {
  const { isTablet, isLaptop } = useBreakpoints();
  const { t } = useTranslation();

  const colors = useColors();
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const accounts = useSelector(selectAccounts);
  const navigate = useNavigate();
  const dataChart = () => {
    let data = [
      { name: t(en.trading), value: 0, financial_statement: 2 },
      { name: t(en.profit_and_loss), value: 0, financial_statement: 1 },
      { name: t(en.balance_sheet), value: 0, financial_statement: 0 },
    ];

    data.map((item) => {
      item.value = accounts.filter(
        (account) => account.financial_statement == item.financial_statement
      ).length;
    });

    return data;
  };

  const Title = ({ value, color }) => {
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            background: color,
            width: 10,
            height: 10,
            margin: "0 5px",
          }}
        />

        <div style={{ color: colors.text }}>{value}</div>
      </div>
    );
  };

  const Chart = () => (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          data={dataChart()}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {dataChart().map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );

  if (isLaptop)
    return (
      <Card
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          background: colors.background,
          borderColor: colors.border,
          color: colors.text,
        }}
      >
        <Card.Body style={{}}>
          <div>{t(en.accounts_types)}</div>
          <br />
          <Title value={t(en.trading)} color="#0088FE" />
          <Title value={t(en.profit_and_loss)} color="#00C49F" />
          <Title value={t(en.balance_sheet)} color="#FFBB28" />

          <br />
          <Button
            onClick={() => {
              navigate(endroutes.accounts.path);
            }}
          >
            {t(en.add) + " " + t(en.account)}
          </Button>
        </Card.Body>
        <Card.Body>
          <Chart />
        </Card.Body>
      </Card>
    );
  else
    return (
      <Card
        style={{
          height: "100%",
          background: colors.background,
          borderColor: colors.border,
          color: colors.text,
        }}
      >
        <Card.Header>{t(en.accounts_types)}</Card.Header>
        <Card.Body style={{ background: colors.surface }}>
          <Chart />
        </Card.Body>
      </Card>
    );
};
