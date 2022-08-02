import _ from "lodash";
import { useSelector } from "react-redux";
import { selectAccounts, selectJournals } from "../../redux/data/dataSlice";
import { accountType } from "../accounts/account-type";
import { entryType } from "../entry/journal-entry-type";
import { journalType } from "../journals/journal-type";

const trial_balance_ammount = (
  accounts: Array<accountType>,
  journals: Array<journalType>
) => {
  let _entries: Array<entryType> = [];
  let _accounts = accounts.map((account) => ({
    ...account,
    debit: 0,
    credit: 0,
  }));

  journals.map((journal: any) => {
    journal.journal_entries?.map((entry: any) => {
      const account = _accounts?.find((item) => {
        return item.id == entry.account_id;
      });
      if (entry.account_id == account?.id) {
        _entries.push({ ...entry, accountName: account?.name });
      }
    });
  });

  _entries.map((entry: any) => {
    _accounts = _accounts.map((account) => {
      if (account.id == entry.account_id) {
        return {
          ...account,
          debit: Number(account.debit) + Number(entry.debit),
          credit: Number(account.credit) + Number(entry.credit),
        };
      } else return { ...account };
    });
  });

  return _accounts;
};

const trial_balance = (trial_balance_ammount: Array<accountType>) => {
  let _accounts = trial_balance_ammount;

  _accounts = _accounts.map((account) => {
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

  let debits = _accounts.filter((item: any) => item.debit > 0);
  let credits = _accounts.filter((item: any) => item.credit > 0);

  const total = _.sumBy(credits, (item: any) => Number(item.credit));

  return { _accounts, credits, debits, total };
};

// ==================================================================================
// ==================================================================================
// ==================================================================================

const trading_account = (_trial_balance: any) => {
  const financial_statement = 2;

  let debits = _trial_balance.debits.filter(
    (item: any) =>
      item.debit > 0 && item.financial_statement == financial_statement
  );

  let credits = _trial_balance.credits.filter(
    (item: any) =>
      item.credit > 0 && item.financial_statement == financial_statement
  );

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

export const profit_account = (_trial_balance: any, trading_account: any) => {
  const financial_statement = 1;

  let debits = _trial_balance.debits.filter(
    (item: any) =>
      item.debit > 0 && item.financial_statement == financial_statement
  );

  let credits = _trial_balance.credits.filter(
    (item: any) =>
      item.credit > 0 && item.financial_statement == financial_statement
  );

  //
  if (trading_account.result.debit > trading_account.result.credit) {
    credits = [
      ...credits,
      {
        name: "ربح مجمل",
        debit: 0,

        credit: trading_account.result.debit,
      },
    ];
  } else {
    debits = [
      ...debits,
      {
        name: "ربح مجمل",
        debit:
          Number(trading_account.result.credit) -
          Number(trading_account.result.debit),
        credit: 0,
      },
    ];
  }

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

const balance_sheet = (_trial_balance: any, _profit_account: any) => {
  const financial_statement = 0;

  let debits = _trial_balance.debits.filter(
    (item: any) =>
      item.debit > 0 && item.financial_statement == financial_statement
  );

  let credits = _trial_balance.credits.filter(
    (item: any) =>
      item.credit > 0 && item.financial_statement == financial_statement
  );

  if (_profit_account.result.debit > _profit_account.result.credit) {
    credits = [
      ...credits,
      {
        name: "ربح صافي",
        debit: 0,

        credit: _profit_account.result.debit,
      },
    ];
  } else {
    debits = [
      ...debits,
      {
        name: "ربح صافي",
        debit:
          Number(_profit_account.result.credit) -
          Number(_profit_account.result.debit),
        credit: 0,
      },
    ];
  }


  const total = _.sumBy(credits, (item: any) => Number(item.credit));

  return { debits, credits, total };
};



export const useFinancialStatement = () => {
  const accounts = useSelector(selectAccounts);
  const journals = useSelector(selectJournals);

  const _trial_balance_ammount = trial_balance_ammount(accounts, journals);
  const _trial_balance = trial_balance(_trial_balance_ammount);

  const _trading_account = trading_account(_trial_balance);
  const _profit_account = profit_account(_trial_balance, _trading_account);
  const _balance_sheet = balance_sheet(_trial_balance, _profit_account);


  return {
    trial_balance_ammount: _trial_balance_ammount,
    trial_balance: _trial_balance,
    profit_account: _profit_account,
    trading_account: _trading_account,
    balance_sheet: _balance_sheet,
  };
};
