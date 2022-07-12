import _ from "lodash";

export const profitAccount = (accounts: any, journals: any) => {
  let data: any = [];

  let selectedAccount: Array<any> = accounts.filter(
    (item: any) => item.financial_statement == 2
  );

  selectedAccount = selectedAccount.map((account) => ({
    ...account,
    debit: 0,
    credit: 0,
  }));

  journals.map((journal: any) => {
    journal.journal_entries?.map((entry: any) => {
      const account = selectedAccount?.find((item) => {
        return item.id == entry.account_id;
      });
      if (entry.account_id == account?.id) {
        data.push({ ...entry, accountName: account.name });
      }
    });
  });

  // =========================================

  data.map((entry: any) => {
    selectedAccount = selectedAccount.map((account) => {
      if (account.id == entry.account_id) {
        return {
          ...account,
          debit: Number(account.debit) + Number(entry.debit),
          credit: Number(account.credit) + Number(entry.credit),
        };
      } else return { ...account };
    });
  });



  selectedAccount = selectedAccount.map((account) => {
    if (account.debit > account.credit) {
      return {
        ...account,
        debit: account.debit - account.credit,
        credit: 0,
      };
    } else {
      return {
        ...account,

        debit: 0,
        credit: account.credit - account.debit,
      };
    }
  });

  let debits = selectedAccount.filter((item: any) => item.debit > 0);
  let credits = selectedAccount.filter((item: any) => item.credit > 0);

  const totalCredit = _.sumBy(credits, (item: any) => Number(item.credit));
  const totalDebit = _.sumBy(debits, (item: any) => Number(item.debit));
  let result = {
    name: "",
    debit: 0,
    credit: 0,
  };

  if (totalCredit > totalDebit) {
    result = {
      name: "الربح",
      debit: totalCredit - totalDebit,
      credit: 0,
    };
    debits = [...debits, { ...result }];
  } else {
    result = {
      name: "خسارة",
      credit: totalDebit - totalCredit,
      debit: 0,
    };
    credits = [...credits, { ...result }];
  }

  const total = _.sumBy(credits, (item: any) => Number(item.credit));

  return { debits, credits, total, result };
};

// ==================================================================================
// ==================================================================================
// ==================================================================================

const trading_account = (accounts: any, journals: any, setState: any) => {
  let data: any = [];
  let accountIds = [];
  let selectedAccount: Array<any> = accounts.filter(
    (item: any) => item.financial_statement == 1
  );

  selectedAccount.map((account: any) => {
    accountIds.push(account.id);
  });

  journals.map((journal: any) => {
    journal.journal_entries?.map((entry: any) => {
      let account = selectedAccount?.find((item) => {
        return item.id == entry.account_id;
      });

      if (entry.account_id == account?.id) {
        data.push({ ...entry, accountName: account.name });
      }
    });
  });

  selectedAccount = selectedAccount.map((account) => ({
    ...account,
    debit: 0,
    credit: 0,
  }));

  // =========================================

  data.map((entry: any) => {
    selectedAccount = selectedAccount.map((account) => {
      if (account.id == entry.account_id) {
        return {
          ...account,
          debit: Number(account.debit) + Number(entry.debit),
          credit: Number(account.credit) + Number(entry.credit),
        };
      } else return { ...account };
    });
  });

  selectedAccount = selectedAccount.map((account) => {
    if (account.debit > account.credit) {
      return {
        ...account,
        debit: account.debit - account.credit,
        credit: 0,
      };
    } else {
      return {
        ...account,

        debit: 0,
        credit: account.credit - account.debit,
      };
    }
  });

  let debits = selectedAccount.filter((item: any) => item.debit > 0);
  let credits = selectedAccount.filter((item: any) => item.credit > 0);

  const totalCredit = _.sumBy(credits, (item: any) => Number(item.credit));
  const totalDebit = _.sumBy(debits, (item: any) => Number(item.debit));
  let result = {
    name: "",
    debit: 0,
    credit: 0,
  };

  if (totalCredit > totalDebit) {
    result = {
      name: "الربح",
      debit: totalCredit - totalDebit,
      credit: 0,
    };
    debits = [...debits, { ...result }];
  } else {
    result = {
      name: "خسارة",
      credit: totalDebit - totalCredit,
      debit: 0,
    };
    credits = [...credits, { ...result }];
  }

  const total = _.sumBy(credits, (item: any) => Number(item.credit));

  setState({ debits, credits, total, result });
  return { debits, credits, total };
};

// ==================================================================================
// ==================================================================================
// ==================================================================================

const balance_sheet = (accounts: any, journals: any, setState: any) => {
  let data: any = [];
  let accountIds = [];
  let selectedAccount: Array<any> = accounts.filter(
    (item: any) => item.financial_statement == 0
  );

  selectedAccount.map((account: any) => {
    accountIds.push(account.id);
  });

  journals.map((journal: any) => {
    journal.journal_entries?.map((entry: any) => {
      let account = selectedAccount?.find((item) => {
        return item.id == entry.account_id;
      });

      if (entry.account_id == account?.id) {
        data.push({ ...entry, accountName: account.name });
      }
    });
  });

  selectedAccount = selectedAccount.map((account) => ({
    ...account,
    debit: 0,
    credit: 0,
  }));

  // =========================================

  data.map((entry: any) => {
    selectedAccount = selectedAccount.map((account) => {
      if (account.id == entry.account_id) {
        return {
          ...account,
          debit: Number(account.debit) + Number(entry.debit),
          credit: Number(account.credit) + Number(entry.credit),
        };
      } else return { ...account };
    });
  });

  selectedAccount = selectedAccount.map((account) => {
    if (account.debit > account.credit) {
      return {
        ...account,
        debit: account.debit - account.credit,
        credit: 0,
      };
    } else {
      return {
        ...account,

        debit: 0,
        credit: account.credit - account.debit,
      };
    }
  });

  let debits = selectedAccount.filter((item: any) => item.debit > 0);
  let credits = selectedAccount.filter((item: any) => item.credit > 0);

  const totalCredit = _.sumBy(credits, (item: any) => Number(item.credit));
  const totalDebit = _.sumBy(debits, (item: any) => Number(item.debit));
  let result = {
    name: "",
    debit: 0,
    credit: 0,
  };

  if (totalCredit > totalDebit) {
    result = {
      name: "الربح",
      debit: totalCredit - totalDebit,
      credit: 0,
    };
    debits = [...debits, { ...result }];
  } else {
    result = {
      name: "خسارة",
      credit: totalDebit - totalCredit,
      debit: 0,
    };
    credits = [...credits, { ...result }];
  }

  const total = _.sumBy(credits, (item: any) => Number(item.credit));

  setState({ debits, credits, total, result });
  return { debits, credits, total };
};

export const financialStatementFunctions = (
  accounts: any,
  journals: any,
  setState: any
) => {
  const profit = () => profitAccount(accounts, journals);
  const tradingAccount = () => trading_account(accounts, journals, setState);
  const balanceSheet = () => balance_sheet(accounts, journals, setState);

  return { profit, tradingAccount, balanceSheet };
};
