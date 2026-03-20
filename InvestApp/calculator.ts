type InvestmentData = {
    initialInvestment: number;
    annualContribution: number;
    annualInterestRate: number;
    years: number;
};

type InvestmentResults = {
    totalContributions: number;
    totalInterest: number;
    finalAmount: number;
};

function calculateInvestment(data: InvestmentData): InvestmentResults {
    let money = data.initialInvestment;
    for (let i = 0; i < data.years; i++) {
        money += data.annualContribution;
        money += money * (data.annualInterestRate / 100);
    }
    return {
        totalContributions: data.initialInvestment + data.annualContribution * data.years,
        totalInterest: money - (data.initialInvestment + data.annualContribution * data.years),
        finalAmount: money
    };

}

function printResults(results: InvestmentResults) {
    console.log(`Total Contributions: $${results.totalContributions.toFixed(2)}`);
    console.log(`Total Interest Earned: $${results.totalInterest.toFixed(2)}`);
    console.log(`Final Amount: $${results.finalAmount.toFixed(2)}`);
}

const results = calculateInvestment({
    initialInvestment: 1000,
    annualContribution: 100,
    annualInterestRate: 5,
    years: 10
});
printResults(results);