enum IncomeLevel {
    HighIncome = "HIC",
    NotClassified = "INX",
    LowIncome = "LIC",
    LowerMiddleIncome = "LMC",
    LowMiddleIncome = "LMY",
    MiddleIncome = "MIC",
    UpperMiddleIncome = "UMC",
}

const IncomeLevelReadable: Record<IncomeLevel, string> = {
    [IncomeLevel.HighIncome]: "High income",
    [IncomeLevel.NotClassified]: "Not classified",
    [IncomeLevel.LowIncome]: "Low income",
    [IncomeLevel.LowerMiddleIncome]: "Lower middle income",
    [IncomeLevel.LowMiddleIncome]: "Low & middle income",
    [IncomeLevel.MiddleIncome]: "Middle income",
    [IncomeLevel.UpperMiddleIncome]: "Upper middle income",
};

export { IncomeLevel, IncomeLevelReadable };
